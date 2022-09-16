export interface IAddProduct {
  id: number,
  name: string,
  amount: string,
}

export interface IgetProducts extends IAddProduct {
  orderId: number | null
}

export interface IUser {
  username: string,
  classe: string,
  level: number,
  password: string
}

export interface IOrder {
  id: number,
  userId: number,
  productsIds: Array<number>
}