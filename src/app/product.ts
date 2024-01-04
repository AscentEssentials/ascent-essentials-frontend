export interface Product {
  _id: string
  name: string
  brand: string
  price: number
  subCategoryId: string
  description: string
  technicalSpecifications: Record<string, string>
  quantity: number
  images: string[]
}
