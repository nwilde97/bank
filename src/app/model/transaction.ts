export class Transaction {
  amount: number = 0.00;
  purpose: string;
  date: string = new Date().toISOString();
}
