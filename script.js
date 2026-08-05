// ================= RANDOM HEADER BACKGROUND =================

fetch("./photos.json")

.then(response => {

    if(!response.ok){

        throw new Error("photos.json failed");

    }

    return response.json();

})


.then(photos => {


    const header = document.querySelector("header");


    if(header && photos.length > 0){


        const randomPhoto =
        photos[Math.floor(Math.random() * photos.length)];



        header.style.backgroundImage =

        `linear-gradient(
            rgba(0,0,0,.75),
            rgba(0,0,0,.75)
        ),
        url("./images/portfolio/${randomPhoto}")`;



    }


})

.catch(error => {


    console.error(

        "Header background error:",

        error

    );


});









// ================= RANDOM FEATURED PHOTOS =================


fetch("./photos.json")


.then(response => {


    if(!response.ok){

        throw new Error("photos.json failed");

    }


    return response.json();


})


.then(photos => {


    const featured = document.getElementById("featured");



    if(!featured){

        console.error("Featured container missing");

        return;

    }





    // Shuffle photos randomly

    photos.sort(() => Math.random() - 0.5);



    const selected = photos.slice(0,3);




    featured.innerHTML = `



    <img

    class="feature-photo left"

    src="./images/portfolio/${selected[0]}"

    alt="SkyRise Visuals Photography">





    <img

    class="feature-photo center"

    src="./images/portfolio/${selected[1]}"

    alt="SkyRise Visuals Photography">





    <img

    class="feature-photo right"

    src="./images/portfolio/${selected[2]}"

    alt="SkyRise Visuals Photography">



    `;






    // Reveal after images load


    const images = featured.querySelectorAll("img");


    let loaded = 0;




    function imageLoaded(){


        loaded++;


        if(loaded === images.length){


            featured.classList.add("show");


        }


    }





    images.forEach(img => {



        img.onload = imageLoaded;



        img.onerror = () => {


            console.error(

                "Missing image:",

                img.src

            );


            imageLoaded();


        };



    });



})



.catch(error => {


    console.error(

        "Featured gallery error:",

        error

    );


});












// ================= SCROLL ANIMATION =================


const hiddenElements = document.querySelectorAll(

    ".hidden, .hidden-left, .hidden-right"

);





if("IntersectionObserver" in window){



    const observer = new IntersectionObserver((entries)=>{


        entries.forEach(entry=>{


            if(entry.isIntersecting){


                entry.target.classList.add("show");


                observer.unobserve(entry.target);


            }


        });


    },{


        threshold:.15


    });





    hiddenElements.forEach(element=>{


        observer.observe(element);


    });



}else{



    hiddenElements.forEach(element=>{


        element.classList.add("show");


    });



}
