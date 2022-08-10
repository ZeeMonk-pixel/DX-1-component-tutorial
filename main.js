// document.getElementById('tomatodiv').style.background ="black"

// var seconddiv = document.getElementById('tomatodiv')

// seconddiv.addEventListener ('click', function (){
    // alert ('tomato div is clicked')
// })

// three ways to make javascript display on your browser

// console
// console.log('wecome, Gabriel, this works!!!')

// console.log(document)

// alert
// alert('welcome to my first day with javascript')

// innerHTML
// document.querySelector('.right-holder').innerHTML = "Supper Cool, it works!!!"

function popsomething() {
    alert('Welcome, box 1 is clicked')
}

var rightdiv = document.querySelector('#right-holder')
// console.log(rightdiv)

// function changeToOrange() {
//     rightdiv.style.background = "#ffa800"
// }

// function changeToTomato() {
//     rightdiv.style.background = "tomato"
// }

// function changeToSkyblue() {
//     rightdiv.style.background = "skyblue"
// }

// method 2 {using parameters and arguments}

function printsomething(yourwriteup) {
    console.log(yourwriteup)
}

printsomething('say my name')
printsomething('call me zaddy')
printsomething('where is my agbado')

function ChangeColor(particularcolor) {
    rightdiv.style.background = particularcolor
}

var hamburgermenuholder = document.querySelector('.menubar-holder')
console.log(hamburgermenuholder)

function changeclass() {
    hamburgermenuholder.classList.toggle('purplemenu')   
}

