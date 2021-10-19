import { Component, OnInit } from '@angular/core';
import { IBrand } from '../models/Ibrand.interface';
import { ICategory } from '../models/Icategory.interface';
import { Idata } from '../models/Idata.interface';
import { IDepartment } from '../models/Idepartment.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  data: Idata;
  brandsVisible: boolean;
  departmentsVisible: boolean;
  categoriesVisible: boolean;

  constructor(private api: ApiService) { 
    this.departmentsVisible = false;
    this.categoriesVisible = false;
    this.brandsVisible = false;
  }
  
  ngOnInit(): void {
    this.api.getData().subscribe( data => {
      this.data = data
      console.log(data);
    }); 
  }
  showDepartments(){
    this.departmentsVisible = !this.departmentsVisible;
  }
  showCategories(){
    this.categoriesVisible = !this.categoriesVisible;
  }
  showBrands(){
    this.brandsVisible = !this.brandsVisible;
  }
}
