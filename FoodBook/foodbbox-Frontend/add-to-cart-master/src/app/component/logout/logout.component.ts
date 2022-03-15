import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
 
  username:string = localStorage.getItem('username');

  constructor(
    private authentocationService: AuthenticationService,
    private router: Router) {

  }

  ngOnInit() {
    this.logOut()
   
  }
  logOut(){
    
       localStorage.removeItem('username')
       console.log(this.username)
       this.router.navigate(['products']);
     }
  }



