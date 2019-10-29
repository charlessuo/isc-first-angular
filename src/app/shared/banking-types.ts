export interface Payee {
  id: string;
  version: number;
  payeeName: string;
  address: Address;
  categoryId: string;
  image: string;
  motto: string;
  active: boolean;
  category?: Category;
  transactions?: Transaction[];
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface Category {
  id: string;
  version: number;
  categoryName: string;
  categoryType: string;
  active: boolean;
}

export interface Transaction {
  id: string;
  version: number;
  payeeId: string;
  personId: string;
  categoryId: string;
  accountId: string;
  txType: string;
  txDate: string;
  amount: number;
  deleted: boolean;
  category?: Category;
  payee?: Payee;
  person?: Person;
}

export interface Person {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  id: string;
  version: number;
  address: Address;
  active: boolean;
  transactions?: Transaction[];
}
