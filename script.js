const dino = document.querySelector('.dino');

function ligarKeyUp(event) {
    if (event.KeyCode === 32) {
        console.log('Pressionou espaço!');
    }


}

function Jump(){
    let position = 0;

    let upInterval = setInterval(() => {
       
        
    },20 );
}

document.addEventListener('keyup', ligarKeyUp);
