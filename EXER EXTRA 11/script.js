function gerar(){
    var num = 2
    var res = document.getElementById('result')
    res.innerHTML = '<h2><strong>Números pares de 1 até 10!</strong></h2>'
    
    while(num<=10){
        res.innerHTML += `${num} &#x1F449`
        num+=2
    }  
   
    res.innerHTML += '	&#x1F3C1'          
}   

