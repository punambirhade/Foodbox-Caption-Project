import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  username:string = localStorage.getItem('username');
  grandTotal:string = localStorage.getItem('totalPrice'); 

  users: Array<User> = new Array();
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {

    this.loginService.getUser().subscribe(
      data => {
       this.users = data; 

        
      }
      ,error => console.log(error));

}

backHome(){
  window.location.replace('/products');
}

}


