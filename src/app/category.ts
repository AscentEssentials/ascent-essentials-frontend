import {ObjectId} from "mongodb";

export interface Category {
  _id: string,
  name: string,
  description?: string,
}

export interface CategoryResponse extends Category {}
