import { Component, OnInit } from '@angular/core';

import { GitService } from '../git/git.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {

  constructor(private gitService: GitService) { }

  ngOnInit() {
    this.gitService.init(err => err == null || console.error(err));
  }

  async debug() {
    /*this.gitService.clone('https://github.com/Fantom-foundation/fantom-dev-web.wiki.git', 'master', 1, err =>
      err == null ? console.info('debug without error') : console.error(err)
    );*/

    await this.gitService.clone();
  }
}
