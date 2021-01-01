import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/UserService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  IsCustomer:boolean=false;
  IsAdmin:boolean=false;
  constructor(private UserSRV:UserService) { }

  ngOnInit(): void {
    this.IsCustomer=this.UserSRV.isCustomerUser();
    this.IsAdmin=this.UserSRV.isAdminUser();
  }
  logout(){
    this.UserSRV.logout();
  }
}
