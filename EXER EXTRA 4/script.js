function verificar(){
    var agora = new Date
    var hora = agora.getHours
    var res = document.getElementById('result')
    res.innerHTML = (`O que recebi no sistema foi <mark>${agora}</mark>`)
}