import { Component, OnInit } from '@angular/core';
import {SourceType} from 'dictcms-service-source';

@Component({
  selector: 'app-dictcms-ui-source',
  template: `
    <p>
      dictcms-ui-source works!
    </p>
  `,
  styles: []
})
export class DictcmsUiSourceComponent implements OnInit {

  wow: SourceType

  constructor() { }

  ngOnInit(): void {
  }

}
