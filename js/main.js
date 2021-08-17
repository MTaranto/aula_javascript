
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<i>Obrigado por clicar!</i>"
 
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://globallab.org/")
    // window.open.href = "https://globallab.org/";
}

function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
   elemento.innerHTML = "Obrigado por passar o mouse"
   //alert("trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse de novo"
    elemento.innerHTML = "Passe o mouse aqui"
 
}
function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
function soma(n1,n2){
    return n1+n2;
}

function validarIdade(idade){
    var validar
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual a sua idade?")
console.log(validarIdade(idade))

//alert(soma(5,10))


var d = new Date()

alert(d)
alert(d.getDay())
alert(d.getHours())
alert(d.getFullYear())
var count
for(count=0; count<=5; count++){
    alert(count)
}

var count = 0
while (count <= 5){
    console.log(count)
    count++
}

var idade = prompt("Qual é a sua idade?")
if (idade>=18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
};

var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);

var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome)
alert(fruta.cor)
*/
//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista)
//console.log(lista.toString())
//console.log(lista.join(" - "))

//console.log (lista.length);
//console.log (lista.reverse())

//var nome = "Márcio Taranto";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor país do mundo"
//alert(nome+" tem "+idade+" anos");
//alert(idade+idade2)
//console.log(nome);
//console.log(n1*n2);
//console.log(frase.toUpperCase());