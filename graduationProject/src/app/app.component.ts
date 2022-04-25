import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, from, pipe, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  
  }

  ngAfterViewInit() {
    // let userState={
    //   _id:(JSON.parse(localStorage.getItem('user')!)._id),
    //   online:true
    // }
    //  this.http.post('http://localhost:3000/user/online',userState, { responseType: 'text' as const})
    
  }
  
  ngOnDestroy() {
    // if(JSON.parse(localStorage.getItem('user')!)._id){

    //   let userState={
    //     _id:JSON.parse(localStorage.getItem('user')!)._id,
    //     online:false
    //   }
    //    this.http.post('http://localhost:3000/user/online',userState, { responseType: 'text' as const})
    // }
  }
}
