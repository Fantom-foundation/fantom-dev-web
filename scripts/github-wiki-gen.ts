// TODO: Proper slugify
// TODO: Compile the markdown (syntax highlighting and all)

import * as path from 'path';
import { existsSync, mkdirSync, writeFileSync } from 'fs';

import { acquireGithubWiki } from 'github-wiki-to-html';

import { Routes } from '@angular/router';
import { Type } from '@angular/core';


const fnameSanitise = (fname: string): string =>
  fname
    .toLocaleLowerCase()
    .replace(' ', '-')
    .replace(path.sep, '/');

const stringify = (obj_from_json: Object): string => {
  if (typeof obj_from_json !== 'object' || Array.isArray(obj_from_json)) {
    // not an object, stringify using native function
    return JSON.stringify(obj_from_json);
  }
  // Implements recursive object serialization according to JSON spec
  // but without quotes around the keys.
  const props = Object
    .keys(obj_from_json)
    .map(key => `${key}:${stringify((obj_from_json as any)[key])}`)
    .join(',');
  return `{${props}}`;
};

if (require.main === module) {
  const gen = path.join(path.dirname(__dirname), 'src', 'app', 'wiki', 'generated');
  if (!existsSync(gen)) mkdirSync(gen);
  acquireGithubWiki('https://github.com/Fantom-foundation/fantom-dev-web.wiki.git', void 0, (err, fname2content) => {
    if (err != null) throw err;
    else if (fname2content == null) throw ReferenceError('Empty fname2content');

    const routes: Routes = [];
    for (const [fname, content] of fname2content.entries()) {
      /*const filename = fname.replace('.md', '.html');
      writeFileSync(path.join(gen, fnameSanitise(filename)), markdown);*/
      routes.push({
        path: fnameSanitise(fname.slice(0, fname.lastIndexOf('.'))),
        data: { template: content, styles: [':host {color: red}'] },
        component: 'WikiComponent' as any as Type<any>
      });
    }
    const routes_s = JSON
      .stringify(routes, null, 2)
      .replace(/\"([^(\")"]+)\":/g, '$1:')
      .replace(/"/g, '\'')
      .replace(/'WikiComponent'/g, 'WikiComponent');
    writeFileSync(path.join(gen, 'generate_routes.ts'),
      'import { Routes } from \'@angular/router\';\n\n' +
      'import { WikiComponent } from \'../wiki.component\';\n\n' +
      `export const generatedRoutes: Routes = ${routes_s};\n`,
      { encoding: 'utf8', flag: 'w' });
  });
}
