export interface Account {
  owner: string;
  balance: number;
  transactions?: Transaction[];
}

export interface Transaction {
  category?: string;
  amount?: number;
  description?: string;
  date: string;
}
