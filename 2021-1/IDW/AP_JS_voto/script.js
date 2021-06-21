function botao(){

    var naoEleitor=0;
    var eleitorFacultativo=0;
    var eleitorObrig=0;
    var i=-1
    var idade=0

    do{
       var idade=prompt("Digite a idade desejada, caso não tenha mais idade, digite 0: ");
        i++;

        if(idade!=0){
            if(idade>=16 && idade<18){
                alert("Com "+idade+ " anos você não tem a obrigatoriedade de votar");
                eleitorFacultativo++;
            }

            else if(idade>=70){
                alert("Com "+idade+ " anos você não tem a obrigatoriedade de votar");
                eleitorFacultativo++;
            }
    
            else if(idade<=15){
                alert("Com "+idade+ " anos você ainda não pode votar");
                naoEleitor++
            }
       
            else{
            alert("Com "+idade+ " anos você é obrigado a votar");
                eleitorObrig++
        }
    }             
    }
    
    while(idade!=0)

    alert("\nO total de eleitores é "+i);
    alert("\nO total de eleitores obrigatórios é "+eleitorObrig);
    alert("\nO total de eleitores com voto facultativo é "+eleitorFacultativo);
    alert("\nO total de não eleitores é "+naoEleitor);
}