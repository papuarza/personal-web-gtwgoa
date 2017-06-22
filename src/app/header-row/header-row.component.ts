import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-row',
  templateUrl: './header-row.component.html',
  styleUrls: ['./header-row.component.css']
})
export class HeaderRowComponent implements OnInit {
  currentIndex: any;;
  messageText: string[];
  timeoutId: any;;
  stopTimeout: boolean;

  constructor() {
  }

  ngOnInit() {
    this.currentIndex = 0;
    this.messageText = ['con el desarrollo de la tecnología."', 'optimizando los procesos de cambio."', 'con la rápida y eficaz adopción digital."'];
    this.timeoutId = '';
    this.stopTimeout = false;
    var that = this;
    function addHeaderMessage(){
      var current = document.getElementById("home-page-text").innerHTML;
      var following = current.length;
      var newLetter = that.messageText[that.currentIndex][following];
      document.getElementById("home-page-text").innerHTML += newLetter;
      var x = document.getElementById("home-page-text").innerHTML;
      clearTimeout(that.timeoutId);
      if(following < that.messageText[that.currentIndex].length - 1){
          addHeaderMessage();
          } else {
            if(!that.stopTimeout){
              that.timeoutId = setTimeout(function(){
                eraseHeaderMessage();
              }, 2500);
            }
        }
      }

      function eraseHeaderMessage(){
          that.timeoutId = setTimeout(function(){
          var what = document.getElementById("home-page-text");
          var y = what.innerHTML;
          what.innerHTML = y.slice(0, -1);
          clearTimeout(that.timeoutId);
          if(what.innerHTML.length > 0){
            eraseHeaderMessage();
          } else {
            that.timeoutId = setTimeout(function(){
              that.currentIndex++;
              if(that.currentIndex == that.messageText.length){
                that.currentIndex = 0;
                that.stopTimeout = false;
              }
              addHeaderMessage();
            }, 100);
          }
        }, 100);
      }
    addHeaderMessage()
  }


}
