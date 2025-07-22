import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
    router = inject(Router)

  goToHome() {
    this.router.navigate(["/home"])
  }
  goToComparador() {
    this.router.navigate(["/comparador"])
  }
  goToReservaCompra() {
    this.router.navigate(["/reserva-compra"])
  }
  
  logout() {
    localStorage.clear()
    this.router.navigate([""])
  }
}
