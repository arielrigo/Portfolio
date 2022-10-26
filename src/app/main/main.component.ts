declare var require: any
import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})



export class MainComponent implements OnInit {
  
  constructor() { 
    
  }

  
  ngOnInit(): void {
  
    const Parallax = require('parallax-js');
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    var port = document.querySelector('.portfolio');
    var parallaxInstance = new Parallax(port);

    
    
  }

}

