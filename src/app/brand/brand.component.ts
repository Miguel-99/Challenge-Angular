import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBrand } from '../models/Ibrand.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  @Input()
  brands: IBrand[];
  constructor(private api: ApiService, private router: Router) {
    
   }

  ngOnInit(): void {
  }
  sortByName(): void {
    this.brands = this.brands.sort( (a, b) =>{
      if (a.Name > b.Name)
        return 1;
      if (b.Name < b.Name)
        return -1;
      return 0;
    })
  }
}
