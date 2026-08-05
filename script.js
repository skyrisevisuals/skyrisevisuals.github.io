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



    // shuffle photos

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



    const images = featured.querySelectorAll("img");


    let loaded = 0;



    images.forEach(img => {



        img.onload = () => {


            loaded++;


            if(loaded >= images.length){


                featured.classList.add("show");


            }


        };



        img.onerror = () => {


            console.error(
                "Missing image:",
                img.src
            );


            // prevent page getting stuck

            loaded++;


            if(loaded >= images.length){


                featured.classList.add("show");


            }


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




    hiddenElements.forEach(el=>{


        observer.observe(el);


    });



}else{



    hiddenElements.forEach(el=>{


        el.classList.add("show");


    });



}
