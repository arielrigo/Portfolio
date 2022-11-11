import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    
  }

  activeYes = false
  active = false
  animationContent = false
  mobileActive = false


  animation() {
     this.active = true

     if(window.screen.width <= 455) {
      setInterval(()=> {
        this.animationContent = true
       }, 200)
     }

     setInterval(()=> {
      this.animationContent = true
     }, 5100)

     
  }

  mobileClick() {
    this.mobileActive = true;
  }
  
}
