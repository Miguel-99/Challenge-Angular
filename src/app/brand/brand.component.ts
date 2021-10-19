import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBrand } from '../models/Ibrand.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brand: IBrand;
  constructor(private api: ApiService, private router: Router) {
    
   }

  ngOnInit(): void {
  }

}
