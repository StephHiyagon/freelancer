var h1=document.getElementsByTagName('h1')[0];
var header=document.getElementsByTagName('header')[0];
var enlace=document.getElementsByClassName('js-enlace');


function moveScroll(event){
  var scroll=window.pageYOffset || document.body.scrollTop;
  if(scroll>3){
    console.log(header);
    header.classList.add("js-hup");
    h1.classList.add("js-up");
    console.log(scroll);
  }

  if(scroll>767){
    enlace[0].classList.add("js-active");
  }else{
    enlace[0].classList.remove("js-active");
  }

  if(scroll>1647){
    enlace[0].classList.remove("js-active");
    enlace[1].classList.add("js-active");
  }else{
    enlace[1].classList.remove("js-active");
  }

  if(scroll>2150){
    enlace[1].classList.remove("js-active");
    enlace[2].classList.add("js-active");
  }else if (scroll<2150) {
    enlace[2].classList.remove("js-active");
  }

  if(scroll<=3){
    header.classList.remove("js-hup");
    h1.classList.remove("js-up");
  }

}

window.addEventListener('scroll',moveScroll);

enlace[0].addEventListener("click", function(){
    window.scrollTo(0,768);
    // enlace[0].classList.add("js-active");
})

enlace[1].addEventListener("click", function(){
    window.scrollTo(0,1648);
    // enlace[1].classList.add("js-active");
})

enlace[2].addEventListener("click", function(){
    window.scrollTo(0,2151);
    // enlace[2].classList.add("js-active");
})

var images=document.getElementsByClassName('fotos')[0];
// var images=document.getElementsByClassName('js-img')[0];
var span = document.getElementById("close");
var modal = document.getElementById('myModal');
var body=document.getElementsByTagName('body')[0];
var btclose=document.getElementsByClassName('js-btclose')[0];

//images.onclick=function captura(e){
images.addEventListener('click',function (e){
  e.preventDefault();
  console.log(e.target);
  console.log(e.target.nextElementSibling);
  console.log(e.currentarget);
  // colocar condicional para solo seleccionar la img
  if(e.target.className == "icono"){
    // console.log(images);
    var modalImg = document.getElementById("img01");
    body.style.overflow="hidden";
    // var captionText = document.getElementById("caption");
    modal.style.display="block";
    modalImg.src = e.target.nextElementSibling.src;
    // captionText.innerHTML = e.target.nextElementSibling.alt;
  }
});

function cerrar (event){
  event.preventDefault();
  // console.log(event.target);
    modal.style.display="none";
    body.style.overflow="visible";
  }

span.addEventListener('click',cerrar);
btclose.addEventListener('click',cerrar);

var input=document.getElementsByTagName('input');
var textarea=document.getElementsByTagName('textarea')[0];

function numero(e){
  var key=e.keyCode;
  console.log(key);
  var teclado=String.fromCharCode(key).toLowerCase();
  console.log(teclado);
  var numeros="0123456789";
  var especiales="8-37-38-46-164";
  var teclado_especial=false;
  for (var i in especiales){
    if(key==especiales[i]){
      teclado_especial=true;
      break;
    }
  }
  if(numeros.indexOf(teclado)==-1 && !teclado_especial){
    return false;
  }
}

function letras(e){
  var key=e.keyCode;
  console.log(key);
  var teclado=String.fromCharCode(key).toLowerCase();
  console.log(teclado);
  var letras=" abcdefghijklmnopqrstuvwxyz";
  var especiales="8-37-38-46-164";
  var teclado_especial=false;
  for (var i in especiales){
    if(key==especiales[i]){
      teclado_especial=true;
      break;
    }
  }
  if(letras.indexOf(teclado)==-1 && !teclado_especial){
    return false;
  }
}

function correo(event){
  var correo=input[1].value;
  console.log(correo);
  if(!(/[\w]+@{1}[\w]+\.[a-z]{2,3}/.test(correo)) || correo==""){
    this.nextElementSibling.style.display="block";

  }else{
    this.nextElementSibling.style.display="none";

  }
}

function valida(event){
  if(this.value==""){
    this.nextElementSibling.style.display="block";

  }else{
    this.nextElementSibling.style.display="none";

  }
}

function clear(){
  for(var i=0;i<3;i++){
    input[i].value="";
  }
  textarea.value="";
}

function validaT(event){
  event.preventDefault();
  for(var i=0; i<3;i++){
  if( input[i].value==""){
    input[i].nextElementSibling.style.display="block";
  }else{
    input[i].nextElementSibling.style.display="none";
  }
}
  if (textarea.value=="") {
    textarea.nextElementSibling.style.display="block";
  }else{
    textarea.nextElementSibling.style.display="none";
  }

  if(input[0].value!="" && input[1].value!="" && input[2].value!="" && textarea.value!=""){
    clear();
  }
}

input[0].onkeypress=letras;
input[2].onkeypress=numero;
input[0].onblur=valida;
input[1].onblur=correo;
input[2].onblur=valida;
textarea.onblur=valida;
input[3].onclick=validaT;
