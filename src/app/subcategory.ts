import {ObjectId} from "mongodb";
import {Category} from "./category";

export interface Subcategory {
  id: ObjectId,
  name: string,
  description: string,
  parentCategory: Category,
}
