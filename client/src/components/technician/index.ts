import { TechOffMenu } from '../technician-office/mini-components/TechOffMenu'
import { techMenu } from './mini-components/TechMenu'

export { default as Assignments } from './Assignments'
export { default as HomeTechnician } from './HomeTechnician'
export { default as Requests } from './Requests'
export { default as Technician } from './Technician'


export const TechMenu = [
  ...techMenu,
  ...TechOffMenu,
]