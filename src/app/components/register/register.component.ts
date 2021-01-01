import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/UserService';
import { VMRegister } from 'src/app/viewmodel/VMRegister';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  User: VMRegister = new VMRegister();
  IsLoading = false;
  constructor(private UserSRV:UserService,private Toaster:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.UserSRV.Register(this.User).subscribe(res=>{
      this.Toaster.success("you are registerd successfully")
      this.router.navigate(['Signin']);
    },err=>{
      this.Toaster.error("invalid date");
    });
  }
}
