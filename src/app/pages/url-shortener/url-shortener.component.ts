import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {ShorturlService} from "./service/shorturl.service";
import {SnaccbarService} from '../../components/snaccbar/snaccbar.service';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.scss']
})
export class UrlShortenerComponent implements OnInit {
  suGroup = new FormGroup({
    // tslint:disable-next-line:max-line-length
    fullUrl: new FormControl('', Validators.pattern('(([\\w]+:)?//)?(([\\d\\w]|%[a-fA-f\\d]{2,2})+(:([\\d\\w]|%[a-fA-f\\d]{2,2})+)?@)?([\\d\\w][-\\d\\w]{0,253}[\\d\\w]\\.)+[\\w]{2,63}(:[\\d]+)?(/([-+_~.\\d\\w]|%[a-fA-f\\d]{2,2})*)*(\\?(&?([-+_~.\\d\\w]|%[a-fA-f\\d]{2,2})=?)*)?(#([-+_~.\\d\\w]|%[a-fA-f\\d]{2,2})*)?'))
  });
  result: string;

  constructor(private service: ShorturlService, private snaccService: SnaccbarService) { }

  ngOnInit() {
  }

  onSubmitClicked() {
    if (this.suGroup.valid) {
      let fullUrl: string = this.suGroup.get('fullUrl').value;

      if ( ! (fullUrl.startsWith('http') || fullUrl.startsWith('www')) ) {
          fullUrl = 'https://' + fullUrl;
      }

      // CONTACT BACKEND
      this.service.CreateUrl(fullUrl).subscribe(res => {
        this.result = window.location.origin + '/s/' + res.toString();
        this.snaccService.addSnacc({text: ['Short URL created!'], time: 3000, buttonText: 'Amazing!'});
      });

    }
  }

}
