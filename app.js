// Add JavaScript code here
let clickMe = document.getElementById('btn');
let myPop = document.getElementById('pop1');
let popBg = document.getElementById('myBg');
let myBall1 = document.getElementById('ball1');
let myBall2 = document.getElementById('ball2');

function displayPop() {
    clickMe.classList.add('hidden');
    setTimeout(() => {
        console.log("Delayed for 1 second.");
    }, "500");
    myPop.classList.remove('hidden');
    popBg.classList.remove('hidden');
    myBall1.classList.add('blur');
    myBall2.classList.add('blur');
}

function closePop() {
    myPop.classList.add('hidden');
    popBg.classList.add('hidden');
    myBall1.classList.remove('blur');
    myBall2.classList.remove('blur');
    clickMe.classList.remove('hidden');
}
