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
  "Me debes un millón de masajes",
  "Espero que tengas un lindo dia",
  "si lees esto me tienes que comprar un jueguito"
  "espero que estes trabajando muy duro y feliz"
];

function createTextBubble() {
  const bubble = document.createElement("div");
  bubble.className = "text-bubble";
  bubble.innerText = messages[Math.floor(Math.random() * messages.length)];
  bubble.style.position = "absolute";
  document.getElementById("bubbles-text").appendChild(bubble);

  // Esperar a que se renderice para calcular tamaño
  requestAnimationFrame(() => {
    const width = bubble.offsetWidth;
    const height = bubble.offsetHeight;

    const maxLeft = window.innerWidth - width - 10;
    const maxTop = window.innerHeight - height - 10;

    const left = Math.random() * maxLeft;
    const top = Math.random() * maxTop;

    bubble.style.left = `${left}px`;
    bubble.style.top = `${top}px`;
  });

  setTimeout(() => {
    bubble.remove();
  }, 10000);
}

setInterval(createTextBubble, 1000);
