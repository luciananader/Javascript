function gerar(){
    var mes = window.prompt('Digite o mês em extenso. (ex: setembro)')
    var res = document.getElementById('result')
    var estacao

    switch (mes){
    case'janeiro': case 'dezembro': case'fevereiro' : case'março': case 'Janeiro': case'Dezembro': case'Fevereiro': case'Março': 
    estacao ='Verão'
    break
       
    case'junho': case'julho': case'agosto': case'setembro': case'Junho': case'Julho': case'Agosto': case'Setembro':
    estacao='Inverno'
    break
       
    case'outubro': case'novembro': case'Outubro': case'Novembro':
    estacao = 'Primavera'
    break

    case'abril': case'maio': case'Abril': case'Maio':
    estacao = 'Outono'
    break
        
    default: 
    estacao = 'estação indefinida!'
    break
    }   
    
    res.innerHTML = `No mês de <strong>${mes}</strong>, estamos no(a) <strong>${estacao}</strong>!`
    
}
