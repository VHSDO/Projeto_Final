import { Component, inject} from '@angular/core';
import { Router } from '@angular/router';
import { CompareComponent } from '../../components/comparar/comparar';


@Component({
  selector: 'app-comparador',
  imports: [CompareComponent],
  templateUrl: './comparador.html',
  styleUrl: './comparador.css'
})
export class Comparador {
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
    sessionStorage.clear()
    this.router.navigate([""])
  }

}
