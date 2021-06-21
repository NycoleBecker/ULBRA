function AloMundo(){
    alert("Oii");
}

function clicBotao(){
    var nome = document.getElementById('nome').value;
    var sobreNome = document.getElementById('sobreNome').value;
    var resultado = document.getElementById('resultado').innerHTML;
     
    // var sobreNome = document.getElementById('sobreNome').value; //1

    document.getElementById('resultado').innerHTML = resultado + ' '+ nome + ' ' + sobreNome; 
}
// function bemVindo(){
//     alert('Bem-vindo');
// }

function adeus(){
    alert('Tchau');
}

function emCima(){
    alert('Em cima do link');

}

function fora(){
    alert('Fora do link');
}

