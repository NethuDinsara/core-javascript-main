const cardBtn = document.querySelector(".card-btn");
const card = document.querySelector(".card");

cardBtn.addEventListener("click",  ()=>{
    console.log("Hello");
    card.classList.toggle("selected")
})