let menu = document.getElementById('menu-bar');
let navbar = document.querySelector('.navbar');


function innerText(arg){
    if(arg == 'menu')return 'close'
    return 'menu'
}

menu.onclick = ()=>{
    menu.innerText = innerText(menu.innerText)
    navbar.classList.toggle('active')
}

window.onscroll = ()=>{

    menu.innerText = innerText(menu.innerText)
    navbar.classList.remove('active')

}

function loader(){
    document.querySelector('.loader-container').classList.add('fadeout');
    window.screenTop(0);
}

function fadeout(){
    setInterval(loader,2000);
}

window.onload =()=>{
    window.scrollTo(0, 0);
    fadeout();
} 
