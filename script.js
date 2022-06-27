// traversing the dom
// const btns = document.querySelectorAll(".quention-btn");
// const lines = document.querySelectorAll(".line")

// btns.forEach(function(btn) {
//     btn.addEventListener("click", function(e) {
//         const question = e.currentTarget.parentElement.parentElement;
        
//         question.classList.toggle("show-text");
//     })  
// });

// using selector inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    // selecciona el btn de el question de cada uno de los articles
    const btn = question.querySelector(".quention-btn");
    console.log(btn);
    
    btn.addEventListener("click",function () {
        questions.forEach(function (item) {
            // si el item del article no es igual al question del
            // article original al precional el boton, revome "show-tex"
            if (item !== question) {
                item.classList.remove("show-text");
            }
        })
        
        question.classList.toggle("show-text");
    });
});
