import { Component, inject} from '@angular/core';
import { Carousel } from '../../components/carousel/carousel';
import { MenuComponent } from '../../components/menu/menu.component';


@Component({
  selector: 'app-home',
  imports: [Carousel, MenuComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
}