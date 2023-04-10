function gerar(){
    var n1 = Number (window.prompt('Primeiro valor:'))  
    var n2 = Number (window.prompt('Segundo valor:'))
    var op= Number(window.prompt(`O número escolhido é ${n1} e ${n2}.
                                    \nO que vamos fazer?
                                    \n[1] Somar
                                    \n[2] Subtrair
                                    \n[3] Multiplicar
                                    \n[4] Dividir`))
    var res = document.getElementById('result')
    res.innerHTML ='Calculando...'
    switch(op) {
            case 1:
                res.innerHTML+=`<p>${n1}+${n2}=<mark>${n1+n2}</mark></p>`
            break
            case 2:
                res.innerHTML+=`<p>${n1}-${n2}=<mark>${n1-n2}</mark></p>`
            break
            case 3:
                res.innerHTML+=`<p>${n1}*${n2}=<mark>${n1*n2}</mark></p>`
            break
            case 4:
                res.innerHTML+=`<p>${n1}/${n2}=<mark>${n1/n2}</mark></p>`
            break
            default:
                res.innerHTML += '<p>Esse número <strong>não é válido</strong>!!!</p>' 
            break
    }
}