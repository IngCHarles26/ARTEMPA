export interface ClientsData {
  ruc:          number,
  name:         string,
  address:      string,
}

export interface SuppliersData {
  ruc:          number,
  name:         string,
  address:      string,
  phone:        number,
  email:        string,
  bankAccount:  string
}

export interface PurchasesData {
  company:      'abm' | 'mega',
  date:         number,
  ruc:          number,
  name:         string,
  serial:       string,
  number:       number,
  amount:       number,
  paid:         boolean,
  paidMethod:   'cash' | number,
  detraction:   'na' | number,
}