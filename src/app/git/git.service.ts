import { Injectable } from '@angular/core';

/* // js-git version
import * as createtree from 'js-git/mixins/create-tree';
// This adds in walker algorithms for quickly walking history or a tree.
// - logWalk(ref|hash) => stream<commit>
// - treeWalk(hash) => stream<object>
import * as walkers from 'js-git/mixins/walkers';
// This provides extra methods for dealing with packfile streams.
// It depends on
// - unpack(packStream, opts) => hashes
// - pack(hashes, opts) => packStream
import * as packops from 'js-git/mixins/pack-ops';
// This provides an in-memory storage backend that provides the following APIs:
// - saveAs(type, value) => hash
// - loadAs(type, hash) => hash
// - saveRaw(hash, binary) =>
// - loadRaw(hash) => binary
import * as memdb from 'js-git/mixins/mem-db';
// This combines parallel requests for the same resource for effeciency under load.
import * as readCombiner from 'js-git/mixins/read-combiner';
// This makes the object interface less strict.  See it's docs for details
import * as formats from 'js-git/mixins/formats';
// This is the high level API from https://github.com/creationix/js-git/pull/140
import * as highLevel from 'js-git/mixins/high-level';
// This adds a high-level API for creating multiple git objects by path.
// - createTree(entries) => hash

// This provides symbolic names for the octal modes used by git trees.

@Injectable({
  providedIn: 'root'
})
export class GitService {
  // Create a repo by creating a plain object.
  repo: any = {};

  constructor() {
    memdb(this.repo);
    createtree(this.repo);
    packops(this.repo);
    walkers(this.repo);
    readCombiner(this.repo);
    formats(this.repo);
    highLevel(this.repo);
  }

  init(cb: (error?: Error) => void) {
    return cb(void 0);
  }

  clone(url: string, branch: string, depth: number, callback: (err?: Error) => void) {
    this.repo.clone(branch, depth, callback);
  }
}
*/

// isomorphic-git version
import * as BrowserFS from 'browserfs';
import * as pify from 'pify';
import * as git from 'isomorphic-git';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  fs: any;
  pfs: any;
  public git: typeof git;

  init(cb: (error?: Error) => void) {
    if (this.fs != null || this.pfs != null) return cb(void 0);

    const fsOptions = {
      fs: 'IndexedDB',
      options: {}
    };
    BrowserFS.configure(fsOptions, err => {
      if (err) return cb(err);

      this.fs = BrowserFS.BFSRequire('fs');

      // Initialize isomorphic-git with our new file system
      git.plugins.set('fs', this.fs);

      // make a Promisified version for convenience
      this.pfs = pify(this.fs);
      return cb(void 0);
    });
  }

  async clone(dir = 'tutorial0', url = 'https://github.com/isomorphic-git/isomorphic-git') {
    console.info('this.pfs.mkdir');
    if (!this.pfs.existsSync(dir)) {
      await this.pfs.mkdir(dir);
    }
    // Behold - it is empty!

    console.info('this.pfs.readdir');
    await this.pfs.readdir(dir);

    console.info('git.log');
    await git.log({dir});
  }
}

