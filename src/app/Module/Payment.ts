export enum PaymentWay{
  Bank_Transfer,
  Speices,
}
export class  Payment {
  paymentId!:number;
  amout!:number;
  dateOfPayment!: Date;
  paymentWay!: PaymentWay;
}
