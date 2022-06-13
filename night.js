let click=document.querySelector('.btn')
let b=document.querySelector('.car');

function a(){
    if(b.classList.contains('carmoving')){
        b.classList.remove('carmoving')
    }else{
        b.classList.add('carmoving')
    }
}

click.addEventListener('click',a);