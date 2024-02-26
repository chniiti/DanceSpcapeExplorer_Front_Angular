import * as exp from "constants";

export enum TicketType{
  SPECTATOR_STANDARD,
  SPECTATOR_VIP,
}
export class Ticket{
  TicketId!:number;
  ticketType!:TicketType;
  price!:number;
  availability!:String;
}
