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
  orphansChildren: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.searchAllChildrens(this.categories);
    console.log(this.categories);
    console.log(this.orphansChildren);
    this.showMappingLevelsOnConsole(this.categories);
  }

  sortCategoriesByName(arr: Array<ICategory>): void {
    arr.sort( (a, b) =>{
      if (a.Name > b.Name)
        return -1;
      if (a.Name < b.Name)
        return 1;
      return 0;
    });
  }
  changeNameByQuantity(category: ICategory) : void {
    if (category.Quantity < 7)
      category.Name = "*" + category.Name;
  };
  searchAllChildrens(arr: Array<ICategory>) : void {
    this.sortCategoriesByName(arr);

    arr.forEach( category => {
      if (category.Name === "Carne de aves")
        category.Children.push({Id:1, Quantity:1, Name: "Halcon", Link:"", LinkEncoded:"", Children:[], Map:"", Position:null, Value: ""})
      if (category.Name === "Leches")
        category.Children.push({Id:1, Quantity: 1, Name:"Yogurt", Link:"", LinkEncoded: "", Map:"", Children: [],Value:"", Position:null})
      if (category.Children.length > 0){
        this.changeNameByQuantity(category);
        this.searchAllChildrens(category.Children);
      }else
        this.orphansChildren++;
    })
  }

  showMappingLevelsOnConsole(arr: Array<ICategory>): void {
    console.log(JSON.stringify(arr, null, 4));
  }

  
}
