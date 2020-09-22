import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
declare function signOut(): any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dBug';
  // (<HTMLInputElement>document.getElementById(elementId)).value; //ignore this
  ngOnInit(){ 
    localStorage.getItem('mail');
  }
  name = localStorage.getItem('name');
  image = localStorage.getItem('image');
}
