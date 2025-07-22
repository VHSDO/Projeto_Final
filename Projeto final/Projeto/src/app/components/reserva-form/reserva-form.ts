import { Component, OnInit, inject} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-reserva-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reserva-form.html',
  styleUrl: './reserva-form.css'
})
export class ReservaForm implements OnInit {

    formulario!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: [''],
      email: [''],
      telefone: [''],
      carro: ['']
    });
  }

carroSelecionadoImagem = 'img/mustang.png';
  router = inject(Router)
  onCarroChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;

  const imagens: { [key: string]: string } = {
    mustang: 'img/mustang.png',
    ranger: 'img/ranger.png',
    bronco: 'img/broncoSport.png',
    territory: 'img/territory.png'
  };

  this.carroSelecionadoImagem = imagens[value] || 'img/mustang.png';
}

  onSubmitLogin(): void {
    console.log(this.formulario.value);
    // Enviar dados aqui
  }
  
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