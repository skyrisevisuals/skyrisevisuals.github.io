// ================= SCROLL FADE ANIMATIONS =================


const hiddenElements = document.querySelectorAll(
    ".hidden, .hidden-left, .hidden-right"
);



if ("IntersectionObserver" in window) {


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



} else {


    // Fallback for older browsers

    hiddenElements.forEach((el)=>{


        el.classList.add("show");


    });


}
