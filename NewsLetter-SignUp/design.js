var btn = document.getElementById('btn-enivar');
var input = document.getElementsByTagName('input')[0];
var error = document.getElementById('error');
var email = document.getElementById('email');
var container = document.getElementById('container');
var success = document.getElementById('success');
var dismiss = document.getElementById('dismiss');
var image = document.getElementById('image');

const enviar = () =>{
    if(input.value === ''){
        error.classList.remove('hidden');
        input.style.border = '1px solid red';
    }else{
        input.style.border = '1px solid rgb(255, 198, 92)';
        error.classList.add('hidden');
        container.classList.add('hidden');
        success.classList.remove('hidden');
        email.innerHTML = input.value;
    }
}

btn.addEventListener('click', enviar);

const cerrar = () =>{
    success.classList.add('hidden');
    container.classList.remove('hidden');
    input.value = '';
}


dismiss.addEventListener('click', cerrar);

// cuando el tamaño de la pantalla sea menor a 600px se cambia la ruta de la imagen 
const cambiarImagen = () =>{
    console.log(image);
    if(window.innerWidth < 600){
        image.src = './assets/images/illustration-sign-up-mobile.svg';
    }else{
        image.src = 'assets/images/illustration-sign-up-desktop.svg';
    }
}

window.addEventListener('resize', cambiarImagen);