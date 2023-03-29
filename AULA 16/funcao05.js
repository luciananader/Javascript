function fatorial (n){
    if (n ==1){
        return 1
    } else {
        return n*fatorial(n-1)
    }
}
console.log(fatorial(5))


/*
fatorial (5) = 5*4*3*2*1
ou
fatorial (5) = 5*4!

ou 

fatorail (n) = n * (n-1)!
fatorial (1) = 1
*/

