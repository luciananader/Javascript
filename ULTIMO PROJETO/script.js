function adicionar (){
var num = document.getElementById('numero')
var add = document.getElementById('valor')
var res = document.getElementById('result')
var n = Number (num.value)
    if (num.value.length == 0){
        window.alert('ERRO! Escolha um número!')
    } else if (num.value <= 0 || num.value >100){
        window.alert('ERRO! Necessário colocar um núemro entre 1 e 100')
    } else {
        var item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        add.appendChild (item)     
    }

}        