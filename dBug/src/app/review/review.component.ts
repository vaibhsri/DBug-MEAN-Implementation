// /review page
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  template: `
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
      <h1 class="title" style="color:white !important; text-shadow:0.5px 0.5px 1px black;">Code submitted for review will show up here</h1>
    </body>
  `,
  styles: [
  ]
})
export class ReviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // Function to retrieve code from database
}
