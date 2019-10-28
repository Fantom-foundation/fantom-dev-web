#!/usr/bin/env bash

#cd "$TRAVIS_BUILD_DIR"

pushd "$(mktemp -d --suffix='.rustdocs')"

# Gather all Rust projects of Fantom-foundation
rust_projects="$(for page in {1..5}; do
  curl -s https://api.github.com/orgs/Fantom-foundation/repos?page="$page" \
  | node -e 'process.stdin.resume(); process.stdin.setEncoding("utf8"); let data=""; process.stdin.on("data", d => data+=d); process.stdin.on("end", () => {const parsed = JSON.parse(data); parsed.hasOwnProperty("filter") ? process.stdout.write(parsed.filter(o => o.language=="Rust").map(o => o.name).join(" ") + " "): ""});';
done ;
echo
)";


# If API rate limit is exceeded; or other error occurs
if [ -z "$rust_projects" ]; then
  rust_projects='fantom-rust-vm lachesis-rs libcommon-rs libconsensus-raft-rs libconsensus-paxos-rs '
  rust_projects="$rust_projects"'libconsensus-lachesis-rs libconsensus libtransport libtransport-streaming '
  rust_projects="$rust_projects"'libtransport-http libtransport-rpc full-cli-rs light-cli-rs libcli librevm-rs '
  rust_projects="$rust_projects"'solidity-rs raft-rs libnode-membership libconsensus-dag libtransport-grpc '
  rust_projects="$rust_projects"'libtransport-tcp prost tower-grpc serde-protobuf libhash libhash-sha3 libvm libvm-evm '
  rust_projects="$rust_projects"'evm-rs libsignature libsignature-minisign libsignature-ed25519-dalek sled'
fi

function handle_project() {
  project="$1"
  [ -d "$project/.git" ] || git clone --depth=1 https://github.com/Fantom-foundation/"$project"
  printf '$project = %s\n' "$project"
  # Generate static HTML template of docs
  pushd "$project" && ( \
      [ -d 'target/doc' ] && \
      hxnormalize -xe 'target/doc/REPLACE_WITH_PKG_NAME/index.html' \
      | hxselect -cis '\n' 'body' \
      | hxremove -i 'script' \
      | hxremove 'address' \
      | hxremove 'noscript' > "$TRAVIS_BUILD_DIR"/
  ); popd
}

# Clone and process Rust projects, in parallel
for name in ${rust_projects}; do handle_project "$name" & done

# Copy to Angular website
