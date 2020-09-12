import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  username: string;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  //on submission,username and password are passed as parameters i.e., as credentials
  onSubmit(credentials: NgForm){
    console.log(credentials);
    //for now
    console.log(this.username + ' ' + this.password);

    //after submission->further action
    //call service method,pass parameters in its method.For getting service method, inject service as dependency in the constructor
    this.authService.signin(credentials).subscribe(response=>{
      //if success->response stored in local storage
      //->user role->//Admin -> dashboard
      //customer -> 
        //for now
        // console.log(response.jwtToken);
        console.log(response);                       
    },err=>{
      //if fail->alert
      alert(err);
      //for now
      console.log(err);
    });
  }
}
