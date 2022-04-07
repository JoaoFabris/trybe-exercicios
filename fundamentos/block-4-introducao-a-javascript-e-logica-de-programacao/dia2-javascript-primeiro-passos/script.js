//exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(numbers[5]);
console.log(numbers[6]);
console.log(numbers[7]);
console.log(numbers[8]);
console.log(numbers[9]);
//exercicio 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for(let index = 0; numbers.length > index; index += 1){
    soma = soma + numbers[index]
}
console.log(soma)
//exercicio 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mediaAritmetrica = 0
let soma = 0
cont = 0
for (let index = 0; numbers.length > index; index += 1){
    soma = soma + numbers[index]
    cont += 1
}   mediaAritmetrica = soma/cont
console.log(mediaAritmetrica)
//exercicio 4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mediaAritmetrica = 0
let soma = 0
cont = 0
for (let index = 0; numbers.length > index; index += 1){
    soma = soma + numbers[index]
    cont += 1
}   mediaAritmetrica = soma/cont
if (mediaAritmetrica > 20){
    console.log("valor maior que 20")   
}   else {
    console.log("valor menor ou igual a 20")
} 
//exercicio 5 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
maiorValor = 0
for (let index = 0; numbers.length > index; index += 1){
   if ( maiorValor < numbers[index] ){
       maiorValor = numbers[index]
   }
}   console.log(maiorValor)
// exercicio 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
cont = 0 
for (let index = 0; numbers.length > index; index += 1){
   if (numbers[index]%2 != 0){
       cont += 1
   } 
}   console.log(cont)
// exercicio 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
menorValor = numbers[0]
    for(let index = 0; numbers.length > index; index += 1){
        if (menorValor < numbers.length[index])
        menorValor = numbers.length[index]
    }   console.log(menorValor)
    //exercicio 8

let lista = []
for (let index = 0; index <= 25; index += 1){
 lista.push(index);
}   
console.log(lista);
//exercicio 9
cont = 0
let lista = []
for (let index = 0; index <= 25; index += 1){
    cont = index/2 
    lista.push(cont);
}   
console.log(lista);