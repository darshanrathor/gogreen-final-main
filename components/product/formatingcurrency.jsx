export function FormatingCurrency(number){
    return new  Intl.NumberFormat().format(number);

}