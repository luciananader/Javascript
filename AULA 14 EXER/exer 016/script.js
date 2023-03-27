function contar() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let pass = document.getElementById('passo')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        window.alert('Erro!! Faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    } else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if(i<f){
            for(let c = i;c <=f; c+=p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else{
            for(let c = i;c >= f;c-=p){
            res.innerHTML += ` ${c} \u{1F449}`
            }
        }
    res.innerHTML += `\u{1F3C1}`
    } 
 }
