import { Component, OnInit } from '@angular/core';
import { PicService } from 'src/app/service/pic.service';
import { $ } from 'protractor';
import { __param } from 'tslib';
import { Subscription } from 'rxjs';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  private subscription: Subscription;

  private test;

  public count = 0;
  public rout;
  public objs = this.picService.items;
  public summ = this.picService.items.length;
  public currentIndex;

  constructor(private picService: PicService, private activateRoute: ActivatedRoute) { 
  //  this.test = this.activateRoute.snapshot.params['id'];
    this.subscription = activateRoute.params.subscribe(params=> {
        this.onPhotoId(+params.id);
    });
  }
  ngOnInit() {
   
  }

  public onPhotoId(id){
    this.currentIndex = this.objs.findIndex(item => item.id == id);
    this.rout = -((100/this.summ)*this.currentIndex)+((100/this.summ)*0.1);
  }

  public onNext() {
    this.count++;
    this.rout = (100/this.summ)*this.count;
    
  }

  public onBack() {
    this.count--;
    this.rout = (100/this.summ)*this.count;
   
  }
  debugger
}
