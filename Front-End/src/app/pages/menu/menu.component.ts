import { OrdemDetailsService } from './../../services/ordem-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service: OrdemDetailsService) { }
  foodData: any;

  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

}
