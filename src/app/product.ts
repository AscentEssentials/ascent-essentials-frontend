export interface Product {
  name: string
  brand: string
  price: number
  subCategoryId: string
  description: string
  technicalSpecifications: Record<string, string>
  quantity: number
}

export interface ProductResponse extends Product{
  _id: string
  images: string[]
}
