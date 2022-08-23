// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas.
//  “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.
// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. 
// Quando a resposta não for **sim**, devemos imprimir o valor total da conta.

// let desejaCoxinha = prompt(`você deseja mais coxinhas?\ns: sim\nn: não`).toUpperCase();
// let conta = 0

// while(desejaCoxinha !== 'N'|| desejaCoxinha === 'S') {

//     desejaCoxinha === 'S' ? conta+=2.50: alert('digito invalido')
//     desejaCoxinha = prompt(`você deseja mais coxinhas?\ns: sim\nn: não`).toUpperCase();
// }
// alert(`o tatal da conta é: ${conta}`)
// console.log(conta)
// question === 'S' ? count += 2.5 : console.log('Dígito inválido.')

// let conta = 0
// let ans = null

// while(ans !== 'SAIR'){
//     ans = prompt('Você deseja comer mais uma coxinha?' + 
//     'Digite S para sim N para não.Caso deseje sair digite Sair.').toUpperCase()
//     if(ans === 'S'){
//         conta += 2.5
//     }else if(ans === 'N'){
//         console.log(`Conta Parcial: R$ ${conta}`)
//     }else if(ans === 'SAIR'){
//         console.log(`Conta Finalizada: R$ ${conta}. Bye!`)
//     }else {
//         console.log('Entrada Inválida!')
//     }
// }

