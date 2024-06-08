import appRoutes, { RouteMenu } from "../../../assets/routesAll";

const {personnel_data,create_account,edit_password} = appRoutes

export const admMenu:RouteMenu[] = [
  {
    image: (hover:boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={"icon icon-tabler icon-tabler-report-money w-full transition-all "
        +( hover ? 'stroke-cyan-500' : 'stroke-neutral-500' )
      } viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
        <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        <path d="M17 10h2a2 2 0 0 1 2 2v1" />
        <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
      </svg>
      ),
    name: 'personal',
    route: personnel_data,
  },
  {
    image: (hover:boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={"icon icon-tabler icon-tabler-report-money w-full transition-all "
        +( hover ? 'stroke-cyan-500' : 'stroke-neutral-500' )
      } viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path d="M16 19h6" />
        <path d="M19 16v6" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
      </svg>
      ),
    name: 'nuevo usuario',
    route: create_account,
  },
  {
    image: (hover:boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={"icon icon-tabler icon-tabler-report-money w-full transition-all "
        +( hover ? 'stroke-cyan-500' : 'stroke-neutral-500' )
      } viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10.17 6.159l2.316 -2.316a2.877 2.877 0 0 1 4.069 0l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.33 2.33" />
        <path d="M14.931 14.948a2.863 2.863 0 0 1 -1.486 -.79l-.301 -.302l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.863 2.863 0 0 1 -.794 -1.504" />
        <path d="M15 9h.01" />
        <path d="M3 3l18 18" />
      </svg>
      ),
    name: 'cambiar contraseña',
    route: edit_password,
  },
]