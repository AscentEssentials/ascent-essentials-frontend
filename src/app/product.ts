import {ObjectId} from "mongodb"
import {Subcategory} from "./subcategory";

export interface Product {
  id: ObjectId,
  name: string,
  brand: string,
  price: number,
  subCategory: Subcategory,
  description: string,
  technicalSpecifications: Map<string, string>,
  quantity: number,
  images: string[],
}
