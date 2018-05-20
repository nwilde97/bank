export class Transaction {
  amount: number;
  purpose: string;
  date: string = new Date().toISOString();
}
