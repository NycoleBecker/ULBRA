
function calculadora(){
    var valor1 = parseFloat(document.getElementById('valor1').value);
    
    var valor2 = parseFloat(document.getElementById('valor2').value);
    
    var operacao = (document.getElementById('operacao').value);

    var resultado;

    switch(operacao){
        case '+':
            resultado = valor1 + valor2;
            break;

        case '-':
            resultado = valor1 - valor2;
            break;

        case '*':
            resultado = valor1 * valor2;
            break;

        case '/':
            resultado = valor1 / valor2
            break;
    }
    document.getElementById('resultado').value = resultado;
}

function contaDeLuz(){

    var quantidadeKwh = parseFloat(document.getElementById('quantidadeKwh').value);
    
    var valorKwh = parseFloat(document.getElementById('valorKwh').value);
  
    var aumentoKwh50 = parseFloat((valorKwh*0.50)/0.25);
    var aumentoKwh25 = parseFloat((valorKwh*0.25)/0.20); 

    if(quantidadeKwh>=100 & quantidadeKwh<200){
        let resultadoAumento25=(parseFloat(quantidadeKwh)*parseFloat(aumentoKwh25));
        document.getElementById('resultadoAumento25').innerHTML = 'Teve 25% de aumento de juros. O valor ficou R$' + resultadoAumento25;
    }
    else if(quantidadeKwh<100){
        let resultadoSemAumento = parseFloat(quantidadeKwh * valorKwh);  
        document.getElementById('resultadoSemAumento').innerHTML = 'Não teve aumento de juros. O valor ficou R$' + resultadoSemAumento;
        }

    else if(quantidadeKwh>=200){
        let resultadoAumento50=(parseFloat(quantidadeKwh)*parseFloat(aumentoKwh50));
        document.getElementById('resultadoAumento50').innerHTML = 'Teve 50% de aumento de juros. O valor ficou R$' + resultadoAumento50;
    }
}

function verificarIdades(){
    var idades = document.getElementById('idades').value;
    idades = idades.split(',');
    var i, maior = 0, menor = 0, igual = 0;

    for(i=0; i < idades.length; i++){
        if(idades[i] < 18){
            menor++;
        }
        else if(idades[i] > 18){
            maior++
        }
        else if(idades[i] == 18){
            igual++
        }
    }
        document.getElementById('resultadoIdades').innerHTML = 
        'Menores que 18: ' + menor + 
        '<br> Iguais a 18: ' + igual + 
        '<br> Maiores que 18: '+ maior +'<br><br>';
}

function verificarNumeros(){
    var numeros = document.getElementById('numeros').value;
    numeros = numeros.split(',');
    var i, maior=0;

    for(i=0; i<numeros.length; i++){
        if(numeros[i] > maior){  
            maior=numeros[i]
        }
    }
        document.getElementById('resultadoNumeros').innerHTML = '<br>O maior número é o ' + maior;
}