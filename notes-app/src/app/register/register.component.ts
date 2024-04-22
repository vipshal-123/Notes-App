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
  useRegisterData = { email: "", password: ""};
  confirmPassword = "";

  register(){
    if(this.useRegisterData.password !== this.confirmPassword){
      this.useRegisterData = { email: this.useRegisterData.email, password: ""}
      this.confirmPassword="";
      return alert("Password does not match")
    }
    localStorage.setItem("user",JSON.stringify(this.useRegisterData));
    alert("User Registered Sucessfully..!, Please signIn to Continue");
    this.useRegisterData = { email: "", password: ""};
    this.confirmPassword="";
  }
}
