export interface IAddProduct {
  id: number,
  name: string,
  amount: string,
}

export interface IgetProducts extends IAddProduct {
  orderId: number | null
}