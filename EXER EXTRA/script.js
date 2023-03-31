function calcular(){
    var nom = window.prompt('Qual o nome do aluno? ')
    var n1 = Number(window.prompt(`Qual a primeira nota de ${nom}? `))
    var n2 = Number(window.prompt(`Qual a segunda nota de ${nom}? `))
    med=(n1+n2)/2

    
    var msg
    if(med<7){
        msg = `Você foi REPROVADO!!`
    } else {
        msg = `Você foi APROVADO!!`
    }
    
    var res = document.getElementById('result')
    res.innerHTML = `<p>Calculando a média final de ${nom}.</p>`
    res.innerHTML += `<p>As notas obtidas de ${nom} foram ${n1} e ${n2}.</p>`
    res.innerHTML += `<p>A média geral de ${nom} será ${med}.</p>`
    res.innerHTML += `<p>A mensagem que temos para ${nom} é ${msg}.</p>`
}