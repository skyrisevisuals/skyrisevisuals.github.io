const hiddenElements = document.querySelectorAll(
    ".hidden, .hidden-left, .hidden-right"
);


const observer = new IntersectionObserver((entries)=>{


    entries.forEach((entry)=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


            observer.unobserve(entry.target);


        }


    });


},{

    threshold:.15

});



hiddenElements.forEach((el)=>{

    observer.observe(el);

});
