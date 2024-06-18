import appRoutes, { RouteMenu } from "../../../assets/routesAll";

const {assignments,requests} = appRoutes

export const techMenu:RouteMenu[] = [

  {
    image: (hover:boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={"w-9 transition-all "
        +( hover ? 'stroke-yellow-300 stroke-[1.5]' : 'stroke-white' )
      } viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" />
      </svg>
      ),
    name: 'asignaciones',
    route: assignments,
  },
  {
    image: (hover:boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={"w-9 transition-all "
        +( hover ? 'stroke-yellow-300 stroke-[1.5]' : 'stroke-white' )
      } viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M11 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /> <path d="M6 16l3 2" /> <path d="M12 17l8 -12" /> <path d="M17 10l2 1" /> <path d="M9.592 4.695l3.306 2.104a1.3 1.3 0 0 1 .396 1.8l-3.094 4.811a1.3 1.3 0 0 1 -1.792 .394l-3.306 -2.104a1.3 1.3 0 0 1 -.396 -1.8l3.094 -4.81a1.3 1.3 0 0 1 1.792 -.394z" />
      </svg>
      ),
    name: 'solicitud insumos',
    route: requests,
  },

]