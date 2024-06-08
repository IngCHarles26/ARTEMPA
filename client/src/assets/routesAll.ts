const base = 'localhost:5173'

const appRoutes = {
  global: (rt:string)=>base+`/${rt}`,
  
  home: 'home',
  
  auth: (rt:string)=>`auth/${rt}`,
  login: 'login',
  register: (tk:string)=>`register/${tk}`,
  
  admin: (rt:string)=>`admin/${rt}`,
    personnel_data: 'personnel_data',
    create_account: 'create_account',
    edit_password: 'edit_password',
    
  accountant: (rt:string)=>`accountant/${rt}`,
    purchases  : 'purchases' ,
    sales : 'sales',
    results : 'results',
    clients_data : 'clients_data',
    suppliers_data : 'suppliers_data',
    statements : 'statements',
    
  office: (rt:string)=>`office/${rt}`,
    inventory : 'inventory',
    requirements : 'requirements',
    services_register : 'services_register',
    services_status : 'services_status',
    data_base : 'data_base',
  budget : (id:string)=>`budget/${id}`,
    service_data: (id:string)=>`service_data/${id}`,
    
  technician: (rt:string)=>`technician/${rt}`,
    assignments : 'assignments',
    requests : 'requests',
}

export default appRoutes

export const tituloRutas = {
  // global: (rt:string)=>base+`/${rt}`,
  home: 'home',
  // auth: (rt:string)=>`auth/${rt}`,
  login: 'login',
  // register: (tk:string)=>`register/${tk}`,
  // admin: (rt:string)=>`admin/${rt}`,
  personnel_data: 'personal',
  create_account: 'nuevo usuario',
  edit_password: 'editar contraseña',
  // accountant: (rt:string)=>`accountant/${rt}`,
  purchases  : 'compras' ,
  sales : 'ventas',
  results : 'resultados',
  clients_data : 'clientes',
  suppliers_data : 'proveedores',
  statements : 'estados',
  // office: (rt:string)=>`office/${rt}`,
    inventory : 'inventario',
    requirements : 'requerimientos',
    services_register : 'registro',
    services_status : 'avance',
    data_base : 'base datos',
  // budget : (id:string)=>`budget/${id}`,
    // service_data: (id:string)=>`service_data/${id}`,
  // technician: (rt:string)=>`technician/${rt}`,
    assignments : 'asignaciones',
    requests : 'solicitudes',
}


export interface RouteMenu {
  image: (h:boolean)=>JSX.Element,
  name: string,
  route: keyof typeof tituloRutas | any,
}
