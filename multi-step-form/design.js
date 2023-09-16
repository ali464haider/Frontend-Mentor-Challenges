var first_form = document.getElementById("first_form");
var second_f = document.getElementById("second_form");
var third_f = document.getElementById("third_form");
var opacidad = true;
var span1 = document.querySelector(".periodo span:nth-child(1)");
var span2 = document.querySelector(".periodo span:nth-of-type(2)");
var li = document.querySelectorAll(".side-bar ul li");

first_form = true;
let second_form = false;
let third_form = false;

function primerenvio(){
    if(first_form){
    span1.style.opacity = "1";
    document.getElementById("first_form").style.display = "none";
    document.getElementById("second_form").style.display = "flex";
    document.getElementById("second_form").style.flexDirection = "column";
    li[0].querySelector("span").classList.remove("active");
    li[1].querySelector("span").classList.add("active");
    console.log(li[1].querySelector("span"));
    first_form = false;
    }else{
        span2.style.opacity = "1";
        document.getElementById("second_form").style.display = "none";
        document.getElementById("first_form").style.display = "flex";
        document.getElementById("first_form").style.flexDirection = "column";
        li[1].querySelector("span").classList.remove("active");
        li[0].querySelector("span").classList.add("active");
        first_form = false;
        first_form = true;
        cambiarPeriodo();
        second_form = false;
    }
}

function segundoenvio(){
    if(first_form == false && second_form == false && third_form == false){
        second_f.style.display = "none";
        third_f.style.display = "flex";
        third_f.style.flexDirection = "column";
        second_form = true;
        li[1].querySelector("span").classList.remove("active");
        li[2].querySelector("span").classList.add("active");
    }else{
        third_f.style.display = "none";
        second_f.style.display = "flex";
        second_f.style.flexDirection = "column";
        first_form = false;
        second_form = true;
        li[2].querySelector("span").classList.remove("active");
        li[1].querySelector("span").classList.add("active");
    }
}

window.onload = function(){
    // ponemos display none de todos los formularios
    document.getElementById("first_form").style.display = "flex";
    document.getElementById("first_form").style.flexDirection = "column";
    document.getElementById("second_form").style.display = "none";
    third_f.style.display = "none";
    //document.getElementById("third_form").style.display = "none";
    //document.getElementById("fourth_form").style.display = "none";
}



function cambiarPeriodo(){
    if(opacidad){
        span1.style.opacity = ".6";
        span2.style.opacity = "1";
        opacidad = false;
    }else{
        span1.style.opacity = "1";
        span2.style.opacity = ".6";
        opacidad = true;
    }
}