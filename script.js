const music = document.getElementById("bgMusic");
let heartsStarted = false;

function startLove() {
    music.play();

    document.getElementById("final").style.display = "block";

    if (!heartsStarted) {
        startHearts();
        heartsStarted = true;
    }

    document.getElementById("final")
        .scrollIntoView({ behavior: "smooth" });
}

function revealPhotos() {
    document.getElementById("photos").style.display = "block";
    document.getElementById("secretText").style.display = "block";

    document.getElementById("photos")
        .scrollIntoView({ behavior: "smooth" });
}

function startHearts() {
    const container = document.querySelector(".hearts");

    setInterval(() => {
        const heart = document.createElement("span");
        heart.innerHTML = Math.random() > 0.5 ? "💖" : "💕";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = 14 + Math.random() * 20 + "px";
        heart.style.animationDuration = 4 + Math.random() * 4 + "s";

        container.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
    }, 300);
}
