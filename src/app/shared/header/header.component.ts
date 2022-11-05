import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  button: string
  id: any
  constructor() {
    
   }
   gitActive = false
   instaActive = false
   mobileActive = false
   
  selectedButton = -1;

   over(id: number) {
    this.selectedButton = id
    console.log(this.selectedButton)

    if(id === 1) {
      this.gitActive = true
    } else  {
      this.gitActive = false
    }

    if(id === 2) {
      this.instaActive = true
    } else {
      this.instaActive = false
    }

   }

   activated() {
    this.mobileActive = true


    if (this.mobileActive == true) {
      document.querySelector(".Mspan").classList.remove("activated")
      document.querySelector(".activatedF").classList.remove("activatedF")
      this.mobileActive = false
    }
   }
   

   leave(id: number) {
     this.gitActive = false
     this.instaActive = false
   }

  
  ngOnInit(): void {
    
    
  }

  refresh() {
    location.reload()
  }

  
 
}
