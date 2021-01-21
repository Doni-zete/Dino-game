const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isjumping = false;
let position = 0;


function handleKeup(event) {
    if (event.keyCode === 32) {
        if (!isjumping) {
            jump();
        }
    }
}  

function jump() {


    isjumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);


            let downinterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downinterval);
                    isjumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }

            }, 20);
        } else {

            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactos() {
    const cactos = document.createElement('div');
    let cactosPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactos.classList.add('cactos');
    cactos.style.left = 1000 + 'px';
    background.appendChild(cactos);

    let leftInterval = setInterval(() => {
        if (cactosPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactos);
        } else if (cactosPosition > 0 && cactosPosition < 60 && position <60) {
            //GAME OVER
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class= "game-over">Fim de jogo</h1>';
        } else {
            cactosPosition -= 10;
            cactos.style.left = cactosPosition + 'px';
        }
    }, 20);

    setTimeout(createCactos, randomTime);
}

createCactos();
document.addEventListener('keyup', handleKeup);
