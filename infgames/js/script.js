function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth" 
        });
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); 
            const target = this.getAttribute("href");
            smoothScroll(target);
        });
    });
});
function Cpf(){
    document.getElementById("l1").style="background-color: #e05e69;"
    document.getElementById("l2").style="background-color: #ffbcbf;"
}
function Cnpj(){
    document.getElementById("l1").style="background-color: #ffbcbf;"
    document.getElementById("l2").style="background-color: #e05e69;"
}
function Male(){
    document.getElementById("g1").style="background-color: #e05e69;"
    document.getElementById("g2").style="background-color: #ffbcbf;"
    document.getElementById("g3").style="background-color: #ffbcbf;"
}
function Female(){
    document.getElementById("g1").style="background-color: #ffbcbf;"
    document.getElementById("g2").style="background-color: #e05e69;"
    document.getElementById("g3").style="background-color: #ffbcbf;"
}
function Feiki(){
    document.getElementById("g1").style="background-color: #ffbcbf;"
    document.getElementById("g2").style="background-color: #ffbcbf;"
    document.getElementById("g3").style="background-color: #e05e69;"
}