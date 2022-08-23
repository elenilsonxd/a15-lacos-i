
// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** 
// do número, de 1 a 10.

let num =Number(prompt(`digite um numero: `))

for(let i = 1; i <=10 ; i++){
    let numero1 = num*i
    console.log(`o ${num} x ${i} é = ${numero1}`);
}