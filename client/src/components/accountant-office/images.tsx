export const AccOffMenu = [
  {
    image: (hover:boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={"icon icon-tabler icon-tabler-report-money w-full transition-all "
        +( hover ? 'stroke-cyan-500' : 'stroke-neutral-500' )
      } viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 17h-11v-14h-2" />
        <path d="M6 5l14 1l-1 7h-13" />
      </svg>
      ),
    name: 'compras',
    route: '/accountant/purchases',
  },
  {
    image: (hover:boolean) => (
        <svg xmlns="http://www.w3.org/2000/svg" className={"icon icon-tabler icon-tabler-report-money w-full transition-all "
          +( hover ? 'stroke-cyan-500' : 'stroke-neutral-500' )
        }  viewBox="0 0 24 24" strokeWidth="1"  fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
          <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
          <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
          <path d="M12 17v1m0 -8v1" />
        </svg>
      ),
    name: 'ventas',
    route: '/accountant/sales',
  },
  {
    image: (hover:boolean) => (
        <svg xmlns="http://www.w3.org/2000/svg" className={"icon icon-tabler icon-tabler-report-money w-full transition-all "
          +( hover ? 'stroke-cyan-500' : 'stroke-neutral-500' )
        }  viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
          <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
          <path d="M9 17v-5" />
          <path d="M12 17v-1" />
          <path d="M15 17v-3" />
        </svg>
      ),
    name: 'resultados',
    route: '/accountant/results',
  },
  {
    image: (hover:boolean) => (
        <svg xmlns="http://www.w3.org/2000/svg" className={"icon icon-tabler icon-tabler-report-money w-full transition-all "
          +( hover ? 'stroke-cyan-500' : 'stroke-neutral-500' )
        } viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
        </svg>
      ),
    name: 'clientes',
    route: '/accountant/clients-data',
  },
  {
    image: (hover:boolean) => (
        <svg xmlns="http://www.w3.org/2000/svg" className={"icon icon-tabler icon-tabler-report-money w-full transition-all "
          +( hover ? 'stroke-cyan-500' : 'stroke-neutral-500' )
        }  viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M14 8a2 2 0 0 0 -2 -2" />
          <path d="M6 8a6 6 0 1 1 12 0c0 4.97 -2.686 9 -6 9s-6 -4.03 -6 -9" />
          <path d="M12 17v1a2 2 0 0 1 -2 2h-3a2 2 0 0 0 -2 2" />
        </svg>
      ),
    name: 'proveedores',
    route: '/accountant/suppliers-data',
  },
  
]