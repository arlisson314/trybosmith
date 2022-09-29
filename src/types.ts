export interface Idexsable {
  id: number,
}

export interface IAddProduct extends Idexsable {
  name: string,
  amount: string,
}

export interface IgetProducts extends IAddProduct {
  orderId: number | null
}

export interface IUser extends Idexsable {
  username: string,
  classe?: string,
  level?: number,
  password: string
}

export interface IOrder extends Idexsable {
  userId: number,
  productsIds: Array<number>
}