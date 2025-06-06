// IF/ELSE

// definir um fluxo para somar ou multiplicar dois números usando if/else

const num1 = 2;
const num2 = 4;
const operação = 'multiplicação';

if (operação === 'soma') {
 console.log(num1+num2);
} 
else if (operação === 'multiplicação') {
    console.log(num1 * num2); 
}
else {
    console.log('operação não identificada');
}

// localizar o nivel de bônus de acordo com a faixa salarial 
// ex: $11000 e acima: 3% de bônus 
// $10999 a $7000: 5% de bônus 
// $ 6999 a $4008: 7% de bônus 
// $3999 p baixo: 9% de bônus 

const salarіо = 7000;

if (salarіо >= 11000){
    console.log('3% de bônus ');
    } else if (salarіо > 11000 && salarіо >= 7000){
        console.log('5% de bônus ');
    } else if (salarіо > 7000 && salarіо >= 4000){
        console.log('7% de bônus');
    } else {
        console.log('9% de bônus ');
    }
