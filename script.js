let hi = document.getElementById("hi");
let p4 = document.getElementById("p4");
let p3 = document.getElementById("p3");
let circle = document.getElementById("circle");
let i = 0;
let text = "I'm a Computer Science student with a deep passion for Graphic Design, where digital design and web development are my playgrounds. While I'm currently diving deep into my studies, I fuel my creativity by pursuing design projects out of sheer love for the craft. Though I'm focused on mastering my skills, I'm always on the lookout for exciting projects that offer the right challenge and opportunity.";
/*function swapColor() {
    hi.style.backgroundColor = "#8f2d56";
    hi.style.color = "#73d2de";
}*/
function centerZoom() {
  circle.style.display = "flex";
  circle.style.backgroundColor = "#cc2369";
  circle.style.transform = "scale(6)";
}

let speed = 30;
function typeWriter() {
  if (i < text.length) {
    p4.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}