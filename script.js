function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()  
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 6 && hora < 12){
        //manha
        img.src = "fotos/manha.jpg"
        document.body.style.background = "#82ebd9"
    }else if(hora >= 12 && hora < 18){
        //tarde
        img.src = "fotos/tarde.webp"
        document.body.style.background = "#809bec"
    }else if (hora >=18 && hora > 0){
        //anoitecer
        img.src = "fotos/anoitecer.jpeg"
        document.body.style.background = "#245697"
    }else if(hora >=0 && hora <6){
        //noite
        img.src = "fotos/noite.webp"
        document.body.style.background = "#031f44"
    }

}

function recarregarPagina(){
    return location.reload()
}