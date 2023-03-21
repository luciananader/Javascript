function carregar(){
    var txt = document.getElementById('txt')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    txt.innerHTML = `Agora são ${hora} horas.`
}
