function handleCalcFunction(){
let valor = document.querySelector("#valor").value
let moeda = document.querySelector("select").value
let resultado = document.querySelector("#resultado")

switch(moeda){
  case 'dolar':
    calculo = valor * 5.14
    resultado.innerHTML = `$${valor} é igual à R$${calculo}`
    break
  case 'euro':
    calculo = valor * 5.60
    resultado.innerHTML = `€${valor} é igual à R$${calculo}`
    break
  case 'libra':
    calculo = valor * 6.34
    resultado.innerHTML = `£${valor} é igual à R$${calculo}`
    break
  case 'ienes':
    calculo = valor * 0.039
    resultado.innerHTML = `¥${valor} é igual à R$${calculo}`
    break
}
}