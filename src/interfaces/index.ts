export interface ICreditCard {
  number: string,
  name: string,
  month: string,
  year: string,
  cvv: string,
}

export interface IContextCreditCard {
  data: ICreditCard,
  update(data: ICreditCard): void,
  showBack: boolean,
  updateShowBack(value: boolean): void
}