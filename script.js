// ================= LOAD PHOTOS =================

fetch("./photos.json")

.then(response => {

    if(!response.ok){

        throw new Error("photos.json failed");

    }

    return response.json();

})


.then(photos => {


    if(!photos.length){

        throw new Error("No photos found");

    }



    // ================= RANDOM FUNCTION =================


    function randomPhoto(){

        return photos[
            Math.floor(Math.random() * photos.length)
        ];

    }






    // ================= RANDOM HEADER BACKGROUND =================


    const header = document.querySelector("header");


    if(header){


        const headerImage = randomPhoto();



        header.style.backgroundImage = `

        linear-gradient(

            rgba(0,0,0,.75),

            rgba(0,0,0,.75)

        ),

        url("./images/portfolio/${headerImage}")

        `;


    }








    // ================= RANDOM HERO BANNER =================


    const hero = document.querySelector(".hero");


    if(hero){


        const heroImage = randomPhoto();



        hero.style.backgroundImage = `

        linear-gradient(

            rgba(0,0,0,.5),

            rgba(0,0,0,.85)

        ),

        url("./images/portfolio/${heroImage}")

        `;


    }








    // ================= RANDOM FEATURED PHOTOS =================


    const featured = document.getElementById("featured");



    if(featured){



        let shuffled = [...photos];


        shuffled.sort(() => Math.random() - .5);



        const selected = shuffled.slice(0,3);




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





        const images = featured.querySelectorAll("img");


        let loaded = 0;




        function reveal(){


            loaded++;


            if(loaded >= images.length){


                featured.classList.add("show");


            }


        }





        images.forEach(img=>{


            img.onload = reveal;



            img.onerror = ()=>{


                console.error(
                    "Missing image:",
                    img.src
                );


                reveal();


            };


        });



    }



})



.catch(error=>{


    console.error(

        "Website image error:",

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
