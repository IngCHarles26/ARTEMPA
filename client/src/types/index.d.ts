export interface ClientsData {
  ruc:          number,
  name:         string,
  address:      string,
  mega:         boolean,
  abm:          boolean,
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

export interface SalesData {
  serie:        string,
  number:       number,
  date:         number,
  ot:           number,
  client:       string,
  os:           string,
  import:       number,
  days:         number,
  expiration:   number,
  netAmount:    number,
  netOP:        number,
  detraction:   number | 'NA',
  detOP:        boolean,
}