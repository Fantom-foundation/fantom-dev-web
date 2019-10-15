#!/usr/bin/env bash

cd "$TRAVIS_BUILD_DIR"

# Gather all Rust projects of Fantom-foundation
rust_projects="$(for page in {1..5}; do curl -s https://api.github.com/orgs/Fantom-foundation/repos?page="$page" | node -e 'process.stdin.resume(); process.stdin.setEncoding("utf8"); let data=""; process.stdin.on("data", d => data+=d); process.stdin.on("end", () => {process.stdout.write(JSON.parse(data).filter(o => o.language=="Rust").map(o => o.name).join(" ") + " ")});'; done ; echo)";

# Clone all Rust projects, in parallel
cd ..
for name in "$rust_projects"; do git clone --depth=1 https://github.com/Fantom-foundation/"$name" & done

# Generate static HTML template of docs
for name in "$rust_projects"; do
    pushd "$name" && hxnormalize -xe 'target/doc/libconsensus_dag/index.html' | hxselect -cis '\n' 'body' | hxremove -i 'script' | hxremove 'address' | hxremove 'noscript' > "$TRAVIS_BUILD_DIR"/
done
# Copy to Angular website
