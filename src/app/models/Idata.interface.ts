import { IBrand } from "./Ibrand.interface";
import { ICategory } from "./Icategory.interface";
import { IDepartment } from "./Idepartment.interface";

export interface Idata {
    Departments: IDepartment[];
    Brands: IBrand[];
    CategoriesTrees: ICategory[];
}