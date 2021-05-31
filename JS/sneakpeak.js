const slides = document.querySelector(".carousel").children
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const si = document.querySelector(".si")
const linkinfo = document.querySelector(".link-info")
const icon = document.querySelector(".fa-sort-down")
const bars = document.querySelector(".bars")
const links = document.querySelector(".links")
const logo = document.querySelector(".logo")
const inputs = document.querySelectorAll(".input")

si.addEventListener("click",menu)
function menu(){
    si.classList.toggle("show")
    icon.classList.toggle("show")
}

bars.addEventListener("click",navbar)
function navbar(){
    bars.classList.toggle("show")
    links.classList.toggle("show")
    logo.classList.toggle("show")
}

for(let i=0;i<inputs.length;i++){
    inputs[i].addEventListener("blur",check)
}


var er = document.querySelectorAll(".error"),
ph = document.querySelectorAll(".placeholder")
console.log(ph)

var ind

function check(e){
    if(!e.target.value){
        this.style.borderColor = "red"
        if(this == inputs[0]){
            error('Enter your name',1)
            ind = 0
        }

        if(this == inputs[1]){
            console.log('hi')
            error('Enter your mail id',2)
            ind = 1
        }

        if(this == inputs[2]){
            error('Enter your phone no',3)
            ind = 2
        }
    }

    else if(this == inputs[0]){
        if(e.target.value){
            ph[0].style.color = "black"
            er[0].style.display = "none"
            this.style.borderColor = "#36363624"
        }
    }

    else if(this == inputs[1]){
        ind = 1
        let em = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        if(!e.target.value.match(em)){
            error('Valid Email',2)
            console.log('Error')
            this.style.borderColor = "red"
        }
        else{
            console.log('clear')
            this.style.borderColor = "#36363624"
            error('',4)
            ph[1].style.color = "black"
            er[1].style.display = "none"
        }
    }

    else if(this == inputs[2]){
        ind = 2
        let val = /\d[0-9]{9,}$/
        if((e.target.value).length < 10){
            error('Valid Mobile number',3)
            console.log('Invalid ')
            this.style.borderColor = "red"
        }

        else if(!e.target.value.match(val)){
            error('Mobile number',3)
            console.log('Invalid ')
            this.style.borderColor = "red"
        }

        else{
            console.log('clear')
            this.style.borderColor = "#36363624"
            error('',4)
            ph[2].style.color = "black"
            er[2].style.display = "none"
        }
    }

    else{
        this.style.borderColor = "#36363624"
        er[ind].style.display = "none"
        ph[ind].style.color = "black"
    }
    e.target.value
    console.log(e)
}

function validate(){
    var x = document.forms["sp"]["entry.97082565"].value

    var y = document.forms["sp"]["entry.794792051"].value

    var z = document.forms["sp"]["entry.1095862919"].value
    console.log("hi")
    let valid = true
    let ze= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    let ph = /\d[0-9]{9,}$/
    if(!y.match(ze)){
        inputs[1].style.borderColor = "red"
        error('Enter valid Email',2)
        return valid = false
    }

    if(!z.match(ph) || z.length < 10){
        inputs[2].style.borderColor = "red"
        error('Valid Mobile Number',3)
        return valid = false
    }

    else{
        return valid
    }
}


function error(err,i){
    if(i==1){
        er[i-1].style.display ="block"
        er[i-1].innerHTML = err
        ph[0].style.color = "red"
    }

    else if(i==2){
        er[i-1].style.display ="block"
        er[i-1].innerHTML = err
        ph[1].style.color = "red"
    }

    else if(i==3){
        er[i-1].style.display ="block"
        er[i-1].innerHTML = err
        ph[2].style.color = "red"
    }
}

let index = 0;
slides[slides.length - 3].classList.add("prev");

function autoPlay(){
    nextslide();
}

function nextslide(){
    if(index == slides.length - 3){
        index = 0;
    }
    else{
        index++;
    }
    changeslide();
    console.log(index)
}

function changeslide(){
    for(let i=0;i<=slides.length - 3;i++){
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
    }

    if(index == 0){
        slides[index].classList.add("active");
        slides[slides.length - 3].classList.add("prev");
    }

    else{
        slides[index-1].classList.add("prev");
        slides[index].classList.add("active");
    }
}

let timer = setInterval(autoPlay,5000);

function prevslide(){
    if(index == 0){
        index = slides.length - 3;
    }

    else{
        index--;
    }
    changeslide();
}

prev.addEventListener("click",function(){
    prevslide();
    resetTimer();
})

next.addEventListener("click",function(){
    nextslide();
    resetTimer();
})

function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoPlay,5000);
}