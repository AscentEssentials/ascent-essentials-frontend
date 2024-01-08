export interface Cart {
  userId: string,
  items: [{productId: string, quantity: number}]
  cartTotal: number
}
