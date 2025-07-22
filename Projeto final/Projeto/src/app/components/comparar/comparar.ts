import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from './car.model';

@Component({
  standalone: true,
  selector: 'app-comparar',
  templateUrl: './comparar.html',
  styleUrls: ['./comparar.css'],
  imports: [CommonModule],
})
export class CompareComponent {
  cars: Car[] = [
    new Car('Ford Bronco Sport', 252790, 1814, 433, 2.0, 253, 'Aço Estampado 18', 'img/broncoSport.png'),
    new Car('Ford Mustang', 529000, 1398, 334, 5.0, 429,'Aço Estampado 20', 'img/mustang.png'),
    new Car('Frd Ranger', 326990, 1884, 1031, 3.0, 170,'Liga Leve 18', 'img/ranger.png'),
    new Car('Ford Territory', 209990, 1706, 395, 1.5, 169,'Liga Leve 17', 'img/territory.png')

  ];

  compareList: Car[] = [];
  comparing = false;

  toggleCompare(event: Event, car: Car): void {
    const checkbox = event.target as HTMLInputElement;
    const checked = checkbox.checked;

    if (checked) {
      if (this.compareList.length < 2) {
        this.compareList.push(car);
      } else {
        checkbox.checked = false;
        alert('Você só pode comparar dois carros por vez.');
      }
    } else {
      this.compareList = this.compareList.filter(c => c.nome !== car.nome);
    }
  }

  showCompare(): void {
    if (this.compareList.length < 2) {
      alert('Selecione dois carros para comparar.');
    } else {
      this.comparing = true;
    }
  }

  hideCompare(): void {
    this.comparing = false;
  }
}
