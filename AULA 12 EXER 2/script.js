function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var texto = document.getElementById('texto')
    if (fano.value.length == 0 || Number(fano.value) >= ano){
        window.alert('[ERRO!] Verifique os dados e tente novamente!')
    } else{
        var sexo = document.getElementsByName('radio')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.getElementById('imagem')
            if (sexo[0].checked){
            genero = 'Mulher'
                if(idade<13){
                    img.setAttribute('src', 'menina.png')
                } else if(idade>=13 && idade <50){
                    img.setAttribute('src', 'moça.png') 
                } else {
                    img.setAttribute('src', 'senhora.png') 
                }
            } else{
            genero = 'Homem'
                if(idade<13){
                    img.setAttribute('src', 'menino.png')
                } else if (idade >= 13 && idade < 50) {
                    img.setAttribute('src', 'rapaz.png')
                } else{
                    img.setAttribute('src', 'senhor.png')
                }
            }   
    texto.style.textAlign = 'center'
    texto.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    texto.appendChild(img)
    }
}