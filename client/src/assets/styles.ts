// animations

export const hoverAnim = 'hover:scale-125 transition-all'


export const tableComponent = {
  div: 'flex-grow flex flex-col justify-start overflow-x-scroll md:overflow-x-auto',

  form: 'flex justify-start items-center md:border-b-2 border-stone-100 h-10',

  msg: 'text-center p-1 bg-neutral-700 placeholder:text-white outline-none text-neutral-200 uppercase font-bold h-full hover:opacity-90 md:border-b-2 border-stone-100',

  buttonP: '',
  
  input: 'text-center p-1 bg-neutral-700 placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold h-full hover:opacity-90 md:border-b-2 border-stone-100',

  formContainer: 'flex flex-col',
}

export const rowFormTable = {
  form: 'flex h-full',

  button: 'hover:scale-125 transition-all z-0 text-center',

  input: 'border-gray-500 border-b-2 py-0.5 relative',

  popUp: 'uppercase absolute left-3 -bottom-8 bg-slate-500 text-white px-2 py-1 rounded text-sm w-auto text-nowrap font-bold z-50',
}

export const rowFormTableColor = {
  selected: 'bg-yellow-400',
  unselected: 'bg-transparent hover:bg-slate-400',
  hover: 'bg-slate-400'
}