const messages = [
    "Te amo muchisimo ❤️",
    "Antes de que digas nada yo masssss",
    "Eres mi todo",
    "Eres la persona más especial para mí",
    "Siempre estaré aquí para ti",
    "Eres la razón por la que sonrío todos los días",
    "Eres mi sol en los días nublados",
    "Eres mi razón de ser",
    "Si lees esto me debes el chiquito",
    "Eres la persona más increíble que he conocido",
    "Eres mi mejor amiga y mi amor",
    "Siempre estaré a tu lado",
    "Eres mi compañera de vida",
    "Eres la persona que me hace feliz",
    "Eres mi razón de vivir",
    "Amo cada parte de ti",
    "si lees esto te debo una follada que te tambaleen las piernas jijiji",
    "Eres la persona que me hace sentir completo",
    "aunque seas mala jugando te amo mucho",
    "la puta madre",
    "Me voy a bañar ahora vuelvo",
    "si lees esto me tienes que comprar un jueguito",
];

function createTextBubble() {
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

    const left = Math.random() * 80 + 10;
    const top = Math.random() * 80 + 10;

    bubble.getElementsByTagName.position = "absolute";
    bubble.style.left = left + "vw";
    bubble.style.top = top + "vh";

    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);

    setTimeout(() => {
        const rect = bubble.getBoundingClientRect();

        if (rect.right > window.innerWidth) {
            const newleft = window.innerWidth - rect.width - 10;
            bubble.style.left = '${newleft}px';
        }

        if (rect.bottom > window.innerHeight) {
            const newTop = window.innerHeight - rect.height - 10;
            bubble.style.top = `${newTop}px`;
        }

         if (rect.left < 0) {
            bubble.style.left = "10px";
        }

        if (rect.top < 0) {
            bubble.style.top = "10px";
        }
    }, 10);

    setTimeout(() => {
        bubble.remove();
    }, 5000);
}

setInterval(createTextBubble, 1000);
