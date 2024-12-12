document.querySelector(".burger").addEventListener("click", function (){
    this.classList.toggle("active");
    document.querySelector("nav").classList.toggle("active");
    document.querySelector("body").classList.toggle("lock");
})