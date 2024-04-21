import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userData = { email: "", password: "" }
  verifiesUser = { email: "", password: "" }

  constructor(private router: Router ){};
  login(){
    const RetrieveNotes = localStorage.getItem('user');
    if (RetrieveNotes) {
      const storedNotes = JSON.parse(RetrieveNotes);
      if (storedNotes) {
        this.verifiesUser = storedNotes;
      }
    }
    if(this.userData.email === this.verifiesUser.email && this.userData.password === this.verifiesUser.password){
      this.router.navigate(["/home"]);
    }
    else{
      alert("Invalid Login credentials");
      this.userData = { email: "", password: "" };
    }
  }
}
