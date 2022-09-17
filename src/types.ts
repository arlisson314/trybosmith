export interface Id {
  id: number,
}

export interface IAddProduct extends Id {
  name: string,
  amount: string,
}

export interface IgetProducts extends IAddProduct {
  orderId: number | null
}

export interface IUser extends Id {
  username: string,
  classe: string,
  level: number,
  password: string
}

export interface IOrder extends Id {
  userId: number,
  productsIds: Array<number>
}