import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';
import {ShorturlService} from "../service/shorturl.service";

@Component({
  selector: 'app-redirector',
  templateUrl: './redirector.component.html',
  styleUrls: ['./redirector.component.scss']
})
export class RedirectorComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: ShorturlService,
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const url = params.get('url');

      if (url) {
          this.service.GetUrl(url).subscribe(res => {
            window.location.href = res.toString();
          });
      }
    });
  }

}
