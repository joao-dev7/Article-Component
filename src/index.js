const balao = document.getElementById("balao");
const seta = document.querySelector('svg');

seta.addEventListener('click', () => {
    if (balao.style.display != "none") {
        balao.style.display = "none";
        seta.classList.remove("ativado");
    } 
    else if (balao.style.display != "grid") {
        balao.style.display = "grid";
        seta.classList.add("ativado");
    }
})