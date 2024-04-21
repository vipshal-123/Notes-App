import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router) {}
  isLoginPage(): boolean {
    const isLogin = this.router.url === '/' || this.router.url === '/register';
    return isLogin;
  }

  searching() {
    const searchInput = document.getElementById("searchs") as HTMLInputElement | null;
    const container = document.getElementById("container");

    if (searchInput && container) {
      const searchValue = searchInput.value.toUpperCase();
      const contentBoxes = container.querySelectorAll(".content-box") as NodeListOf<HTMLElement>;

      contentBoxes.forEach(box => {
        const content = box.querySelector("p");
        if (content) {
          const textValue = content.textContent || content.innerHTML;
          if (textValue.toUpperCase().indexOf(searchValue) >= 0) {
            box.style.display = "";
          } else {
            box.style.display = "none";
          }
        }
      });
    }
  }
}
