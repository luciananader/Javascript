function gerar(){
    var num = 1
    var res = document.getElementById('result')
    res.innerHTML = '<h2><strong>Contando de 1 até 10, marcando os pares!</strong></h2>'
    
    while(num<=10){
            if(num%2==0){
                res.innerHTML += `<mark>${num}</mark> &#x1F449`
            } else {
            res.innerHTML += `${num} &#x1F449`
            }
            num++
    }  
   
    res.innerHTML += '	&#x1F3C1'          
}   

