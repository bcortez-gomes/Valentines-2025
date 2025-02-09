AOS.init();

const dataDoEvento = new Date("Feb 14, 2025 20:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000)

    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = '0 minutes';
    }
}, 1000);


document.addEventListener("DOMContentLoaded", function () {
    function getImages() {
        if (window.innerWidth <= 390) {
            return document.querySelectorAll(".part3__carousel__img--mobile");
        } else {
            return document.querySelectorAll(".part3__carousel__img");
        }
    }

    let images = getImages();
    let index = 0;

    function nextSlide() {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
        index = (index + 1) % images.length;
    }

    nextSlide();
    setInterval(nextSlide, 3000);

    window.addEventListener("resize", () => {
        images = getImages();
        index = 0;
        nextSlide();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("noButton");
    const yesButton = document.querySelector(".yes");
    const container = document.querySelector(".part1__parts");

    function moveButton() {
        const maxX = container.clientWidth - noButton.clientWidth;
        const maxY = container.clientHeight - noButton.clientHeight;

        let newX = Math.random() * maxX;
        let newY = Math.random() * maxY;

        noButton.style.transform = `translate(${newX}px, ${newY}px)`;
    }

    if (window.innerWidth <= 390) { 
        noButton.addEventListener("click", moveButton);
    } else {
        noButton.addEventListener("mouseover", moveButton);
    }

    window.addEventListener("resize", setInitialPosition);
});


document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.querySelector(".yes");

    yesButton.addEventListener("click", function () {
        console.log("button clicked");
        showConfetti();
    });

    function showConfetti() {
        for (let i = 0; i < 50; i++) {
            let confetti = document.createElement("div");
            confetti.classList.add("confetti");

            let colorIndex = Math.floor(Math.random() * 6) + 1;
            confetti.classList.add(`confetti-${colorIndex}`);

            document.body.appendChild(confetti);

            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.top = `${Math.random() * 100}vh`;
            confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;

            setTimeout(() => confetti.remove(), 5000);
        }
    }
});