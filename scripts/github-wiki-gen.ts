#!/usr/bin/env node

// TODO: Proper slugify
// TODO: Compile the markdown (syntax highlighting and all)

import * as path from 'path';
import { existsSync, mkdirSync, WriteFileOptions, writeFileSync } from 'fs';

import { acquireGithubWiki } from 'github-wiki-to-html';

import { Routes } from '@angular/router';
import { Type } from '@angular/core';


const angular_json = require('../angular.json');
const ng_prefix = angular_json['projects'][Object.keys(angular_json['projects'])[0]]['prefix'];

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

const ensure_quoted = (s: string, q = '\''): string => s == null || !s.length ? s
  : (s.startsWith('"') && s.endsWith('"') || s.startsWith('\'') && s.endsWith('\'') ? s : `${q}${s}${q}`);

const component_gen = (prefix: string, name: string, template: string, styles: string[] | undefined, className: string): string =>
  `import { Component } from '@angular/core';


@Component({
  selector: ${ensure_quoted(prefix + '-' + name)},
  template: ${ensure_quoted(template, '`')},
  styles: [${styles == null || !styles.length ? '' : styles.map(s => ensure_quoted(s)).join(', ')}]
})
export class ${className} {}
`;

const module_gen = (imports: string[], declarations: string[], className: string): string => `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

${imports.join('\n')}
import { generatedRoutes } from './generated.routes';

@NgModule({
  declarations: [${declarations.join(', ')}],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(generatedRoutes)
  ]
})
export class ${className} {}
`;

const routes_gen = (imports: string[], routes: Routes, constName: string): string => `import { Routes } from '@angular/router';

${imports.join('\n')}

export const ${constName}: Routes = ${JSON.stringify(routes, null, 2).replace(/"/g, '')};
`;

// https://gist.github.com/youssman/745578062609e8acac9f#gistcomment-2304728
const camelCaseToDash = (s: string): string => s.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();

if (require.main === module) {
  const gen = path.join(path.dirname(__dirname), 'src', 'app', 'wiki', 'generated');
  const write_options: WriteFileOptions = { encoding: 'utf8', flag: 'w' };
  if (!existsSync(gen)) mkdirSync(gen);
  acquireGithubWiki('https://github.com/Fantom-foundation/fantom-dev-web.wiki.git', void 0, (err, fname2content) => {
    if (err != null) throw err;
    else if (fname2content == null) throw ReferenceError('Empty fname2content');

    const routes: Routes = [];
    const declarations: string[] = [];
    for (const [fname, content] of fname2content.entries()) {
      const _path = fnameSanitise(fname.slice(0, fname.lastIndexOf('.')));
      const name = _path.replace('/', '-');

      const className = `${name[0].toUpperCase() + name.slice(1).replace(/-([a-z])/g, (x, up) => up.toUpperCase())}`
        + 'Component';
      writeFileSync(path.join(gen, `${name}.component.ts`), component_gen(ng_prefix, name, content, void 0, className), write_options);
      declarations.push(className);

      routes.push({
        path: ensure_quoted(fnameSanitise(fname.slice(0, fname.lastIndexOf('.')))),
        component: className as any as Type<any>
      });
    }

    (() => {
      const className = 'ListComponent';
      const name = 'list';
      const content = '<ul>' +
        routes.map(route =>
          '<li>' +
          '<a routerLink=' + route.path + '>' +
          (route.path as string).substr(1, (route.path as string).length - 2 ) + '</a>' +
          '</li>').join('') +
        '</ul>';
      writeFileSync(path.join(gen, `${name}.component.ts`), component_gen(ng_prefix, name, content, void 0, className), write_options);
      declarations.push(className);

      routes.push({
        path: '\'\'',
        component: className as any as Type<any>
      });
    })();

    const component_imports = declarations.map(
      s => `import { ${s} } from './${camelCaseToDash(s).replace('-component', '.component')}';`
    );

    writeFileSync(path.join(gen, 'generated.routes.ts'),
      routes_gen(component_imports, routes, 'generatedRoutes'),
      write_options);

    writeFileSync(path.join(gen, 'generated.module.ts'),
      module_gen(
        component_imports,
        declarations, 'GeneratedModule'
      ),
      write_options);
  });
}
