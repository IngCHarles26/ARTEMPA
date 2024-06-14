export function widthStyle(width:string,minWidth:any){
  const w   = `w-${width}`
  const mW  = 'min-w-'+minWidth

  return ` ${w} ${mW}`
}

export function aliText(align:string){
  const al = `text-${align}`

  return `${al}`
}

function arraySteps(arr:any[],key:string){
  let ans = []
  for( let i=0 ; i<arr.length ; i++ ){
    const val = `${key}-${arr[i]}`
    ans.push(val)
  }
  return ans
}


export const tailWidth    = ( arr:string[] ) => arraySteps( arr,'w' )

export const tailMinWidht = ( arr:number[] ) => arraySteps( arr,'min-w' )

