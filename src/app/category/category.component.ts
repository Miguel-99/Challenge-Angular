import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from '../models/Icategory.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() 
  categories: ICategory[];
  constructor() { }

  ngOnInit(): void {
  }
  showMappingOnConsole(): void {
    
  }
}
