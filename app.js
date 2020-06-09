const container = document.querySelector('.container');
const text = document.getElementById('text');

const totatlTime = 7500;
const breatheTime = (totatlTime / 5) * 2;
const holdTime = totatlTime / 5;

breatheAnimation();

function breatheAnimation() {
    text.innerHTML = 'Breathe In!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold!';

        setTimeout(() => {
            text.innerText = 'Breathe Out!'
            container.className = 'container shrink'
        }, holdTime)
    }, breatheTime)
}

setInterval(breatheAnimation, totatlTime);