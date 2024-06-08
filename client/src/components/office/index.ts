import { AccOffMenu } from '../accountant-office/mini-components/AccOffMenu'
import { TechOffMenu } from '../technician-office/mini-components/TechOffMenu'
import { offMenu } from './mini-components/OffMenu'

export { default as Budget} from './Budget'
export { default as HomeOffice} from './HomeOffice'
export { default as Inventory} from './Inventory'
export { default as Office} from './Office'
export { default as Requirements} from './Requirements'
export { default as ServicesRegister} from './ServicesRegister'
export { default as ServicesStatus} from './ServicesStatus'


export const OffMenu = [
  ...offMenu,
  ...TechOffMenu,
  ...AccOffMenu,
]