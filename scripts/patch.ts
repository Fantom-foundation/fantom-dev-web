import * as fs from 'fs';
import { spawn } from 'child_process';

const browser = 'node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js';
const emscripten = 'node_modules/browserfs/dist/node/backend/Emscripten.d.ts';
const fs_stats = 'node_modules/browserfs/dist/node/core/node_fs_stats.d.ts';

fs.readFile(browser, 'utf8', (error, data) => {
  if (error) return console.error(error);

  fs.writeFile(browser, data.replace(/node: false/g, 'node: {crypto: true, stream: true}'), 'utf8', (erro) => {
    if (erro) return console.error(erro);

    fs.readFile(emscripten, 'utf8', (err, d) => {
      if (err) return console.error(err);

      fs.writeFile(emscripten, d.replace(/NodeBuffer/g, 'Buffer'), 'utf8', (er) => {
        if (er) return console.error(er);

        fs.readFile(fs_stats, 'utf8', (e, da) => {
          if (e) return console.error(e);

          const s = 'export default class Stats implements fs.Stats {';
          fs.writeFile(fs_stats, da.indexOf('atimeMs: number') > -1 ? da : da.replace(s, s + '\n  atimeMs: number;\n' +
            '  mtimeMs: number;\n' +
            '  ctimeMs: number;\n' +
            '  birthtimeMs: number;'), 'utf8', e_ => {
            if (e_) return console.error(e_);

            const cp = spawn(process.argv[2], [process.argv[3]]);

            cp.stdout.on('data', datum => console.log(datum.toString()));
            cp.stderr.on('data', datum => console.error(datum.toString()));

            cp.on('close', code => console.log(`child process exited with code ${code}`));
          });
        });
      });
    });
  });
});
