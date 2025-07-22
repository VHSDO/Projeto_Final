import { Component, inject} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel{
 ngOninit(){
  console.log(localStorage.getItem('usuarioo'))
 }
}
