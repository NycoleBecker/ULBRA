
function botao1(){

    var numero=prompt("Digite o número desejado: ");

        if(numero<10){
            alert('O número é menor que 10');
        }

        if(numero==10){
            alert("O número é igual a 10");
        }

        else{
            alert("O número é maior que 10");
        }
        
}

function botao2(){
    var numero1=prompt("Digite o primeiro número desejado: ");

    var numero2=prompt("Digite o segundo número desejado: ");

    var soma=(parseFloat(numero1)+parseFloat(numero2));

    alert("A soma do primeiro número com o segundo número é: "+ soma);
}

function botao3(){
    var numero1=prompt("Digite o primeiro número desejado: ");

    var numero2=prompt("Digite o segundo número desejado: ");

    var i=1;

    do{
        var escolha=prompt("Você quer somar(+), multiplicar(*), dividir(/) ou subtrair(-)? ");

        switch (escolha){
            case "+":
                let soma=(parseFloat(numero1)+parseFloat(numero2));
                alert("A soma do primeiro número com o segundo número é: "+ soma);
                var i=0;
                break;
    
            case "*":    
                let multiplicar=(parseFloat(numero1)*parseFloat(numero2));
                alert("A multiplicação do primeiro número com o segundo número é: "+ multiplicar);
                var i=0;
                break;
            
            case "/":    
                let divisao=(parseFloat(numero1)/parseFloat(numero2));
                alert("A divisão do primeiro número com o segundo número é: "+ divisao);
                var i=0;
                break;
               
            case "-":    
                let subtracao=(parseFloat(numero1)-parseFloat(numero2));
                alert("A subtração do primeiro número com o segundo número é: "+subtracao);
                var i=0;
                break; 
    
            default:
                i++;
                break;
        }
    }
    while (i!=0);       
}

function botao4(){
    var nome=prompt("Insira seu nome: ");

    var quantidade=prompt("Insira um número: ");

    for(i=0;i<quantidade;i++){
        alert("O nome "+(i+1)+ " é: "+nome);
    }
}

function botao5() {
    var nome=prompt("Insira seu nome: ");

    var endereco=prompt("Insira um endereco: ");

    var email=prompt("Insira um email: ");

    var contato=[nome,endereco,email];

    alert("ARRAY--- O nome é: "+contato[0]+"\nO endereço é: "+contato[1]+"\nO email: "+contato[2]);

    nome=prompt("Insira seu nome: ");

    endereco=prompt("Insira um endereco: ");

    email=prompt("Insira um email: ");

    var contato={nome: nome,endereco: endereco,email: email};

    alert("OBJETO--- O nome é: "+contato.nome+"\nO endereço é: "+contato.endereco+"\nO email: "+contato.email);
}

function botao6() {
    var numero1 = document.getElementById("numero1").value;

    var numero2 = document.getElementById("numero2").value;

    var func = document.getElementById("func").value;

    switch (func){
        case "+":
            let soma=(parseFloat(numero1)+parseFloat(numero2));
            alert("A soma do primeiro número com o segundo número é: "+ soma);
            var i=0;
            break;

        case "*":    
            let multiplicar=(parseFloat(numero1)*parseFloat(numero2));
            alert("A multiplicação do primeiro número com o segundo número é: "+ multiplicar);
            var i=0;
            break;
        
        case "/":    
            let divisao=(parseFloat(numero1)/parseFloat(numero2));
            alert("A divisão do primeiro número com o segundo número é: "+ divisao);
            var i=0;
            break;
           
        case "-":    
            let subtracao=(parseFloat(numero1)-parseFloat(numero2));
            alert("A subtração do primeiro número com o segundo número é: "+subtracao);
            var i=0;
            break; 

        default:
            i++;
            break;
    }
    
}
