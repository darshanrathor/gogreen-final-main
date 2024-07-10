export function FormatingCurrency(number) {
  return new Intl.NumberFormat().format(number);
}

export function Percentage(value1, value2) {
  return 100 - (value1 * 100) / value2;
}



export function BlurBackground(){

  return(
      <div className="fixed z-30 bg-gray-700 opacity-70 w-full h-full top-0 left-0">

      </div>
  )
}


export function ProductBackground(array,i) {
  if(i > array.length-1){
      i=0;
      return array[i];
  }
  else{
      return array[i];
  }
  }


  export const color = ["bg-fuchsia-50 group-hover:bg-fuchsia-100", "bg-blue-50 group-hover:bg-blue-100", "bg-slate-50 group-hover:bg-slate-100", "bg-lime-50 group-hover:bg-lime-100", "bg-rose-50 group-hover:bg-rose-100", "bg-gray-50 group-hover:bg-gray-100", "bg-pink-50 group-hover:bg-pink-100", "bg-violet-50 group-hover:bg-violet-100", "bg-sky-50 group-hover:bg-sky-100", "bg-green-50 group-hover:bg-green-100", "bg-indigo-50 group-hover:bg-indigo-100", "bg-purple-50 group-hover:bg-purple-100", "bg-orange-50 group-hover:bg-orange-100", "bg-yellow-50 group-hover:bg-yellow-100"]
