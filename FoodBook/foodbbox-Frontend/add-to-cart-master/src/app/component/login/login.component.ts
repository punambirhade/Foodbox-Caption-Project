import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string = localStorage.getItem('username');
  user:User = new User();
  user2:User = new User();

  users: Array<User> = new Array();
  
  username_value:string;


  constructor(private loginService: LoginService,  
              private router: Router) { }


  ngOnInit(): void {
    
 
  
  }

  handleLogin() {

    
    this.loginService.getUser().subscribe(
      data => {
       this.users = data; 
        
      }
      ,error => console.log(error));


    // check data entered
    for(var i in this.users){
    if(this.users[i]?.username == this.user.username){
        if(this.users[i]?.password==this.user.password){
        localStorage.setItem('username', this.user.username);
        localStorage.setItem('password', this.user.password);
        // alert("Login Sucessfully")
         console.log("YES");
 
         window.location.replace('/products');
      }
    }
   else{
      console.log("No");
        // alert("please enter correct username & password")
       }
   
  }
  }
  onSubmit(){
    console.log(this.user);
     
    this.handleLogin();
  }


}

function elseif(arg0: boolean) {
  throw new Error('Function not implemented.');
}
