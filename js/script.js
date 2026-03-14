function direcionar(p){
    window.location.href = p
}

function scrollSecao(secao){

document.getElementById(secao).scrollIntoView({
behavior:"smooth"
})

}


async function estalogado(){
    let res = await fetch("http://localhost:3000/usuario/session",{
        credentials:"include"
    })
    let data = await res.json()
    let area = document.getElementById("userArea")
    if (data.logado){
        area.innerHTML=`<img src="/img/user.png" style="width:30px;vertical-align:middle">
        <span>${data.nome}</span>
        <button onclick="logout()">Logout</button>`
    }
}

async function logout(){
    await fetch("http://localhost:3000/usuario/logout",{
        credentials:"include"
    })
    location.reload()
}

estalogado()