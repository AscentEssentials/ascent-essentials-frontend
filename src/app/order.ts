export interface NewOrder {
  creditCardNumber: number,
  creditCardExpirationDate: Date,
  ccv: number,
  couponCode: string
}

export interface OrderResponse {
  _id: string;
  userId: string;
  userAddress: {
    address: string;
    addressNumber: string;
    zipCode: string;
    telephoneNumber: string;
  };
  items: {
    productId: string;
    name: string;
    brand: string;
    price: number;
    subCategoryId: string;
    description: string;
    technicalSpecifications: {
      type: string;
      diameter: string;
    };
    quantity: number;
    images: string[];
  }[]
  shippingCosts: number;
  orderTotal: number;
  status: string;
  createdAt: string;
}
