import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // initialiseUser: { email: String, password: String }[] = [];
  useRegisterData = { email: "", password: ""}

  register(){
    // this.initialiseUser.push({...this.useRegisterData});
    localStorage.setItem("user",JSON.stringify(this.useRegisterData));
    alert("User Registered Sucessfully..!, Please signIn to Continue");
    this.useRegisterData = { email: "", password: ""}
  }
}
