import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

 username = ''
 password = ''
  invalidLogin = false

 //username:string = localStorage.getItem('username');
 //password:string = localStorage.getItem('password');
 //user:User = new User();
 //user2:User = new User();

 users: Array<User> = new Array();
 
 username_value:string;

  constructor(private router: Router,
    private loginService:AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginService.authenticate(this.username, this.password)
    ) {
      alert("Login Sucessfully")
      this.router.navigate(['product-list'])
      this.invalidLogin = false
    } else{
      this.invalidLogin = true
      alert("please enter correct username & password")
    }
  }

  
}

  

