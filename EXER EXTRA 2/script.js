function verificar(){
    var n1 = Number(window.prompt('Escolha um número'))
    var n2 = Number(window.prompt('Escolha outro número'))
    var res = document.getElementById('result')
      if(n1>n2){
        res.innerHTML = `<p>O valor ${n1} é maior que o valor ${n2}.</p>`
      } else if (n2>n1){
        res.innerHTML = `<p>O valor ${n2} é maior que o valor ${n1}.</p>`
      } else{
        res.innerHTML = `<p>O valor ${n2} e o valor ${n1} são iguais.</p>`
      }
}