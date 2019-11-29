import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wap-request-token',
  template: `
    <ion-header>
      <ion-title>
        Request New Token
      </ion-title>
    </ion-header>
    <wap-view-wrapper>
          </wap-view-wrapper>
  `,
  styleUrls: ['./request-token.component.scss']
})
export class RequestTokenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
