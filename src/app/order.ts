import {ObjectId} from "mongodb";

export interface Order {
  id: ObjectId,
  date: Date,
  price: number,
}
