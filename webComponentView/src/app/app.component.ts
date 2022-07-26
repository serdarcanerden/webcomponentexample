import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webComponentView';
  btnHeight : Number = 50;
  btnWidth : Number = 200;
  btnColor : Number = 0;

  onAlertClicked(){
    alert('Alert Button Click action recieved from Vue side')
  }
  decreaseSizeHandler() {
    const num : number = 10;
    this.btnHeight = Number(this.btnHeight) - num;
    this.btnWidth = Number(this.btnWidth) - num;
    console.log('button size decreased from angular height :' +  this.btnHeight + '- width :' +this.btnWidth);
  } 
  increaseSizeHandler() {    
    const num : number = 10;
    this.btnHeight = Number(this.btnHeight) + num;
    this.btnWidth = Number(this.btnWidth) + num;
    console.log('button size increased from angular height :' +  this.btnHeight + '- width :' +this.btnWidth);
  }
  changeBtnColor() {
    this.btnColor = Math.floor(Math.random() * 8);
  }
}
