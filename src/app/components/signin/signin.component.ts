import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/UserService';
import { VMSignIn } from 'src/app/viewmodel/VMSignin';
import { VMUser } from 'src/app/viewmodel/VMUser';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  User: VMSignIn = new VMSignIn();
  IsLoading = false;
  constructor(
    private USerSRV: UserService,
    private Toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onSubmit() {
    this.USerSRV.login(this.User).subscribe(
      (res) => {
        this.USerSRV.currentLoggedUser.next(res);
        if (res.IsAdmin) {
          this.router.navigate(['/Home/DProducts']);
        } else {
          this.router.navigate(['/Home/CProducts']);
        }
      },
      (err) => {
        this.Toaster.error("Invalid Email Or Password");
      }
    );
  }
}
