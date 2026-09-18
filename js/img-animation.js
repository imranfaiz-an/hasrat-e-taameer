let cat = document.querySelector("img");
let angle = Math.PI / 2;

function animate(time, lastTime) {
    if (lastTime != null) {
    angle += (time - lastTime) * 0.001;
    }
    cat.style.top = (Math.sin(angle) * 20) + "px";
    cat.style.left = (Math.cos(angle) * 200) + "px";
    requestAnimationFrame(newTime => animate(newTime, time));
}
requestAnimationFrame(animate);

window.addEventListener("keydown", event => {
    if (event.key == "f") {
    document.body.style.background = "violet";
    }
});
window.addEventListener("keyup", event => {
    if (event.key == "f") {
    document.body.style.background = "";
    }
});