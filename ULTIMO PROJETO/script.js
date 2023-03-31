function adicionar (){
var num = document.getElementById('numero')
var add = document.getElementById('valor')
var res = document.getElementById('result')
var valores =[]
var n = Number (num.value)
    if (num.value.length == 0){
        window.alert('ERRO! Escolha um número!')
    } else if (num.value <= 0 || num.value >100){
        window.alert('ERRO! Necessário colocar um núemro entre 1 e 100')
    } else {
        var item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        add.appendChild (item)     
        res.innerHTML =''
    }
    num.value =''
    num.focus()

} 
function final(){
    var tot = valores.length
    res.innerHTML= ''
    res.innerHTML += `<p>O total de valores adicionados é ${tot}</p>`

}       