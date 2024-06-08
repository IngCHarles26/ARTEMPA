import appRoutes, { RouteMenu } from "../../../assets/routesAll";

const {personnel_data,inventory,requirements,services_register,services_status} = appRoutes

export const offMenu:RouteMenu[] = [
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
      <svg xmlns="http://www.w3.org/2000/svg" className={"icon icon-tabler icon-tabler-forklift w-full transition-all "
        +( hover ? 'stroke-cyan-500' : 'stroke-neutral-500' )
      } viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M14 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M7 17l5 0" />
        <path d="M3 17v-6h13v6" />
        <path d="M5 11v-4h4" />
        <path d="M9 11v-6h4l3 6" />
        <path d="M22 15h-3v-10" />
        <path d="M16 13l3 0" />
      </svg>
      ),
    name: 'inventario',
    route: inventory,
  },
  {
    image: (hover:boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={"icon icon-tabler icon-tabler-report-money w-full transition-all "
        +( hover ? 'stroke-cyan-500' : 'stroke-neutral-500' )
      } viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M13 9l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385" />
        <path d="M6.66 15.66l-3.32 -3.32a1.25 1.25 0 0 1 .42 -2.044l3.24 -1.296l6 -6l3 3l-6 6l-1.296 3.24a1.25 1.25 0 0 1 -2.044 .42z" />
      </svg>
      ),
    name: 'requerimientos',
    route: requirements,
  },
  {
    image: (hover:boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={"icon icon-tabler icon-tabler-report-money w-full transition-all "
        +( hover ? 'stroke-cyan-500' : 'stroke-neutral-500' )
      } viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" />
        <path d="M19 16h-12a2 2 0 0 0 -2 2" />
        <path d="M9 8h6" />
      </svg>
      ),
    name: 'cuaderno ot',
    route: services_register,
  },
  {
    image: (hover:boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={"icon icon-tabler icon-tabler-report-money w-full transition-all "
        +( hover ? 'stroke-cyan-500' : 'stroke-neutral-500' )
      } viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10 17l4 -4" />
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
        <path d="M10 13h.01" />
        <path d="M14 17h.01" />
      </svg>
      ),
    name: 'avance',
    route: services_status,
  },
]