export interface Subcategory {
  categoryId: string
  name: string,
  description: string,
}

export interface SubcategoryResponse extends Subcategory {
  _id: string
}
