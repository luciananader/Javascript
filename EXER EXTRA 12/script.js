function gerar(){
    var num = 10
    var res = document.getElementById('result')
    res.innerHTML = '<h2><strong>Contagem regressiva de 10 até 1!</strong></h2>'
    
    while(num>=1){
        res.innerHTML += `${num} &#x1F449`
        num=num-1
    }  
   
    res.innerHTML += '	&#x1F3C1'          
}   

