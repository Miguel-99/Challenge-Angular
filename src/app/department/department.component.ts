import { Component, Input, OnInit } from '@angular/core';
import { IDepartment } from '../models/Idepartment.interface';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  @Input()
  departments: IDepartment[];
  constructor() { }

  ngOnInit(): void {
  }

  sortByQuantity(): void {
    this.departments = this.departments.sort( (a, b) => 
      b.Quantity - a.Quantity
    );
  }
}
