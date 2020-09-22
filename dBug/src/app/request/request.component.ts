// /request page
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  template: `
    <p>
    <!-- BULMA IMPORT -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css">
    <style>
    /*need to make this responsive*/
    body{
      background-color: rgb(167, 167, 200);
      display:flex;
      align-items:center;
      justify-content: center;
      flex-direction: column;
      position:absolute;
      top:10vh;
      height:90vh;
      width:100vw;
  }
  input{
      width:20vw;
  }
  .textarea{
      min-width:20vw !important;
      max-width:20vw !important;
  }</style>
    <body>
    <input type="text" class="input" placeholder="Enter Username" id="username"><br>
    <input type="text" class="input" placeholder="Enter Language" id="language"><br>
    <textarea name="code" class="textarea" id="code" placeholder="Enter Code"></textarea><br>
    <!-- <code>hello</code> -->
    <button (click)="test($event)" class="button is-primary">Submit</button>
    <p id="content"></p>
    </body>
    </p>
  `,
  styles: [
  ]
})
export class RequestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // Function to send code to database
  test(event: Event){
    var name = (<HTMLInputElement>document.getElementById("username")).value;
    var language = (<HTMLInputElement>document.getElementById("language")).value;
    var code = (<HTMLInputElement>document.getElementById("code")).value;
    var content = (<HTMLInputElement>document.getElementById("content"));
    // let content = document.getElementById('content') as HTMLInputElement;
    // content.value = "yo";
    console.log("Data Received");
    var cookie = document.cookie;
    content.innerHTML+= "This data will be sent to db --> " + name + " " + language + " " + code+ " "+ cookie;
    // https://stackblitz.com/edit/ngstack-code-editor-ng6?file=src%2Fapp%2Fapp.module.ts
    
  }

}