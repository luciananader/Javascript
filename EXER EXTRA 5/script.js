function calcular(){
        var nasc = Number(window.prompt('Em que ano você nasceu?'))
        var res = document.querySelector('div#result')
        var agora = new Date
        var anohoje = agora.getFullYear()
        id = anohoje-nasc

        res.innerHTML = (`Quem nasceu em ${nasc} vai completar ${id} anos em ${anohoje}.`)
}