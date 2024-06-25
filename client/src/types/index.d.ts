type Company = 'abm' | 'mega';

//ACCOUNTANT

export interface PurchasesData {
  company:      Company,
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
  company:      Company, // abm o mega
  date:         number,
  serie:        string,
  number:       number,
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

export interface MonthStatements {
  company:      Company,                  
  year:         number,
  month:        number,
  link:         string,
}


