import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  isClick:boolean = false;
  imgclick:string = "";
  imgesUrl: string[] = [
    'imgs/poert1.png',
    'imgs/port2.png',
    'imgs/port3.png',
    'imgs/poert1.png',
    'imgs/port2.png',
    'imgs/port3.png',
  ];

  imgClick(imgUrl:string):void{
    this.isClick = true
    this.imgclick = imgUrl;
    
  }

  closeLayer(e:MouseEvent):void{
    e.stopPropagation();
    this.isClick = false;
  }


}
