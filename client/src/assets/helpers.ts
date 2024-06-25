export const transformInfo = (data:object[])=>{
  const titles = Object.keys(data[0])
  let values = []
  for(let i=0;i<data.length;i++){
    values.push(Object.values(data[i]))
  }
  return {titles,values}
}

export const transformInfo2Obj = (titles:string[],values:any[])=>{
  let ans = {}
  for(let i=0;i<titles.length;i++){
    //@ts-ignore
    ans[titles[i]] = values[i]
  }
  return ans
}

export const fDiv = (a:number,b:number)=> Math.floor(a/b)


export const monthToText = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];