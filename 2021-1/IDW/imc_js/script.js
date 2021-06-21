function imcPessoa(){

    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);

    var imc = parseFloat(peso/(altura*altura));

    if(imc < 18.5){
        document.getElementById('imc').innerHTML = 'Abaixo do peso ideal | Seu IMC é '+imc; 
    }
    else if(imc >= 18.5 && imc<25){
        document.getElementById('imc').innerHTML = 'No peso ideal | Seu IMC é '+imc;
    }
    else if(imc > 25 && imc<30){
       document.getElementById('imc').innerHTML = 'Acima do peso ideal | Seu IMC é '+imc; 
    }
    
    else if(imc > 30){
        document.getElementById('imc').innerHTML = 'Obeso | Seu IMC é '+imc;  
    } 
}