let valores = [8,1,4,5,7,9]
valores.sort()
/*for(let pos= 0; pos<valores.length;pos++){
    console.log (`A posiçao ${pos} tem valor ${valores[pos]}`)
}*/
for(let pos in valores){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}