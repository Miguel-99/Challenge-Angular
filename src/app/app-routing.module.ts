import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { DataComponent } from './data/data.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  {path:'', component: DataComponent},
  {path:'departments', component:DepartmentComponent},
  {path: 'brands', component: BrandComponent},
  {path: 'categories', component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
