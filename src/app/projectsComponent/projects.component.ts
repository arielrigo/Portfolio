import { Component, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { projects } from '../model/projetos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  obj: projects = {
    id: 1,
    name: 'Portfolio',
    img: 'portfolioImg',
    description: 'in this project I challenge myself to make animations and a website fully responsive.',
    date: '00/00/22'
  }

  clothesObj: projects = {
    id: 2,
    name: 'Clothes Ecommerce',
    img: 'none',
    description: 'A project used to learn angular framework, using BootStrap and a lot of creativity.',
    date: '25/07/22'
  }

  queryObj: projects = {
    id: 3,
    name: 'Weather Query',
    img: 'none',
    description: 'One of my first projects, made with Vanilla JavaScript, my first contact with an API.',
    date: '18/05/22'
  }


  constructor() { 
    
  }

  ngOnInit(): void {
  console.log(this.obj)
  }

  redirect() {
    console.log('a')
  }

}
