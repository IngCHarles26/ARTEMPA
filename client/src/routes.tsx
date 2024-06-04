import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import { Login, Register, Auth } from './components/auth'
import { HomeAdmin , Admin , DataPersonnel , CreateAccount , EditPassword } from './components/admin'
import { Accountant, HomeAccountant } from './components/accountant'
import { Purchases , Sales , Results , ClientsData , SuppliersData } from './components/accountant-office'
import { Office, HomeOffice, ServicesRegister, Inventory, ServicesStatus, Budget, Requirements }  from './components/office'
import { DataBase, ServiceData } from './components/technician-office'
import { Technician, HomeTechnician, Assignments, Requests } from './components/technician'


export const routes = {
  'home': 'home',
  
  auth: (rt:string)=>`auth/${rt}`,
  login: 'login',
  register: (tk:string)=>`register/${tk}`,
  
  admin: (rt:string)=>`admin/${rt}`,
  'personnel-data': 'personnel-data',
    'create-account': 'create-account',
    'edit-password': 'edit-password',
    
  accountant: (rt:string)=>`accountant/${rt}`,
    'purchases'  : 'purchases' ,
    'sales' : 'sales',
    'results' : 'results',
    'clients-data' : 'clients-data',
    'suppliers-data' : 'suppliers-data',
    
  office: (rt:string)=>`office/${rt}`,
    'inventory' : 'inventory',
    'requirements' : 'requirements',
    'services-register' : 'services-register',
    'services-status' : 'services-status',
    'data-base' : 'data-base',
  budget : (id:string)=>`budget/${id}`,
    'service-data': (id:string)=>`service-data/${id}`,
    
  technician: (rt:string)=>`technician/${rt}`,
    'assignments' : 'assignments',
    'requests' : 'requests',
}



export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      { path: 'auth/',
        element: <Auth />,
        children:[
          { path: 'login',              element: <Login />},  // acceso a la aplicacion
          { path: 'register/:token',    element: <Register />}, // creacion de contraseña y confirmacion de datos necesarios
        ]},
      { path: 'admin/',
        element: <Admin />,
        children:[
          { path: 'home',               element: <HomeAdmin />}, // menu de accesos directos para ADMIN
          { path: 'personnel-data',     element: <DataPersonnel />}, // lista filtrable de datos de personal
          { path: 'create-account',     element: <CreateAccount />}, // crear una cuenta de un usuario nuevo
          { path: 'edit-password',      element: <EditPassword />}, // Genera un enlace para que el usuario edite su contraseña
        ]},
      { path: 'accountant',
        element: <Accountant />,
        children: [
          { path: 'home',               element: <HomeAccountant />},  // menu de accesos directos apra CONTADOR
          { path: 'purchases',          element: <Purchases />}, // lista filtrable de compras y la opcion de añadir una nuevas compras
          { path: 'sales',              element: <Sales />}, // lista filtrable de ventas y la opcion de añadir una nuevas ventas
          { path: 'results',            element: <Results />}, // resultados mensuales o anuales de compras y ventas, ventas por cliente, compras por proveedor
          { path: 'clients-data',       element: <ClientsData />}, // lista filtrable de clientes y la opcion de añadir un cliente
          { path: 'suppliers-data',     element: <SuppliersData />}, // lista filtrable de proveedores y la opcion de añadir un proveedor
          
        ]},
        { path: 'office',
        element: <Office />,
        children: [
          { path: 'home',               element: <HomeOffice />}, // menu de accesos directos para OFICINA
          { path: 'purchases',          element: <Purchases />}, // lista filtrable de compras y la opcion de añadir nuevas compras
          { path: 'sales',              element: <Sales />}, // lista filtrable de ventas y la opcion de añadir nuevas ventas
          { path: 'results',            element: <Results />}, // resultados mensuales o anuales de compras y ventas, por cliente, proveedor o totales
          { path: 'inventory',          element: <Inventory />}, // lista filtrable y editable de los repuestos en stock, con la opcion de agregar consumos
          { path: 'requirements',       element: <Requirements />}, // Lista de servicios, insumos o repuestos requeridos por el personal con la opcion de marcar como atendido       
          { path: 'clients-data',       element: <ClientsData />}, // lista filtrable de clientes y la opcion de añadir un cliente
          { path: 'suppliers-data',     element: <SuppliersData />}, // lista filtrable de proveedores y la opcion de añadir un proveedor
          { path: 'services-register',  element: <ServicesRegister />}, // lista filtrable del cuaderno de datos de trabajo y la opcion de añadir un nuevo servicio
          { path: 'services-status',    element: <ServicesStatus />}, // lista filtrable para visualizar el estado de avance de los servicios
          { path: 'data-base',          element: <DataBase />}, // Lista filtrable de todos los servicios realizados
          { path: 'budget/:id',         element: <Budget />}, // Formato para crear un presupuesto y/o editarlo
          { path: 'service-data/:id',   element: <ServiceData /> }, // Menu de opciones para ingresar a los datos de un servicio en proceso o realizado          
        ]},
        { path: 'technician',
        element: <Technician />,
        children: [
          { path: 'home',               element: <HomeTechnician />}, // menu de accesos directos para TECNICO
          { path: 'data-base',          element: <DataBase />}, // Lista filtrable de todos los servicios realizados
          { path: 'assignments',        element: <Assignments />}, // menu de servicios asignados
          { path: 'service-data/:id',   element: <ServiceData /> }, // Menu de opciones para ingresar a los datos de un servicio en proceso o realizado          
          { path: 'requests',           element: <Requests />}, // formulario para solicitar algun repuesto, insumo o servicio      
        ]},
    ],
    errorElement: <p>holi</p>
  }
])