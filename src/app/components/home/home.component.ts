import { Component, OnInit } from '@angular/core';
import { PicService } from 'src/app/service/pic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  

  constructor(private picService:PicService) { }

  ngOnInit() {
  }

  public objs = this.picService.items;

}
