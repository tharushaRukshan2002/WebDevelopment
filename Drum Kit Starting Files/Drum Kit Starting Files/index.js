var buttonList = document.getElementsByTagName("button")
console.log(buttonList);

for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener('click', function (evt) {
        console.log(evt);
        var text = this.textContent;
        makeSoundFunc(text);
        buttonAnimation(text);
    });
}

document.addEventListener("keypress", (event) => {
    var text = event.key;
    makeSoundFunc(text);
    buttonAnimation(text);
});

function makeSoundFunc(textContent) {
    switch (textContent) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log("No Events");
            break;
    }

}

function buttonAnimation(currentKey) {
    var currentBtn = document.querySelector("." + currentKey);
    currentBtn.classList.toggle("pressed");

    setTimeout(function () {
        currentBtn.classList.toggle("pressed");
    }, 100)
}