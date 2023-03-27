function calcular(){
    var num = document.getElementById('numero')
    var tab = document.getElementById('tabuada')
    if(num.value.length == 0){
        window.alert('Erro! Escolha um número!')
    } else {
        var n = Number(num.value)
        var c = 0
        tab.innerHTML =''
        while (c<=10){
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild (item)
            c++
        }

    }

}