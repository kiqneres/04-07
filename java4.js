var valor1 = document.getElementById("valor1");
var valor2 = document.getElementById("valor2");
var mostrarResultado = document.getElementById("result")


var valorParaSlide = document.getElementById("valor-slide")
var valorSlide = document.getElementById("slide1")

var divAnima = document.getElementById("anima")


function animacaoDiv(){
    var resultado = divAnima.value
    valorParaSlide.textContent = valorSlide.value
    
    

}

function meuSlide(){
    var resultado = valorSlide.value
    valorParaSlide.textContent = valorSlide.value

    if(resultado < 49){
        
        valorParaSlide.style.backgroundColor = "red"
      }
      else if( resultado > 50 && resultado < 149){
        
        valorParaSlide.style.backgroundColor = "blue"      
    }
      else if( resultado > 150 && resultado < 249){
      
        valorParaSlide.style.backgroundColor = "violet"      
    }
    
      else{
        valorParaSlide.style.backgroundColor = "green"
      }
    
}

function somar() {
  var resultado = Number(valor1.value) + Number(valor2.value);
  mostrarResultado.textContent = resultado;
}

function subtrair() {
  var resultado = Number(valor1.value) - Number(valor2.value);
  mostrarResultado.textContent = resultado;

  if(resultado < 0){
    console.log ("Primeiro if")
    mostrarResultado.style.color = "red"
  }
  else if( resultado > 50 && resultado < 100){
    console.log ("Else if")
    mostrarResultado.style.color = "blue"
  }
  else if( resultado > 100){
    console.log ("Else ")
    mostrarResultado.style.color = ""
  }

  else{
    mostrarResultado.style.color = "green"
  }

}

function multiplicar() {
  var resultado = Number(valor1.value) * Number(valor2.value);
  mostrarResultado.textContent = resultado;
}

function dividir() {
  var resultado = Number(valor1.value) / Number(valor2.value);
  mostrarResultado.textContent = resultado;
}