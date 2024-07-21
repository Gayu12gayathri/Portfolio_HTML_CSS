const projectModals= document.querySelectorAll(".project-modal");
const imgCards = document.querySelectorAll(".img-card");
const windowClose= document.querySelectorAll(".window-close");

var projectModal= function(modalClick){
    projectModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCards, i) => {
    imgCards.addEventListener("click",() =>{
        modal(i);
    });
});

windowClose.forEach((windowClose) =>{
    windowClose.addEventsListener("click",() =>{
        projectModals.forEach((projectModalsView)=>{
            modalView.classList.remove("active");
        });
    });

});