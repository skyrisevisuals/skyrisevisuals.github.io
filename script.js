// ================= RANDOM FEATURED PHOTOS =================

fetch("photos.json")

.then(response => {


    if(!response.ok){

        throw new Error("photos.json failed to load");

    }


    return response.json();


})


.then(photos => {



    // Randomize photos

    photos.sort(() => Math.random() - 0.5);




    const featured = document.getElementById("featured");



    if(!featured){

        console.error("Featured container not found");

        return;

    }





    // Pick 3 random photos

    const selected = photos.slice(0,3);





    featured.innerHTML = `



    <img

    class="feature-photo left"

    src="images/portfolio/${selected[0]}"

    alt="SkyRise Visuals Photography">





    <img

    class="feature-photo center"

    src="images/portfolio/${selected[1]}"

    alt="SkyRise Visuals Photography">





    <img

    class="feature-photo right"

    src="images/portfolio/${selected[2]}"

    alt="SkyRise Visuals Photography">



    `;





    // Wait for images to load

    const images = featured.querySelectorAll("img");


    let loaded = 0;



    images.forEach(img => {



        img.onload = () => {


            loaded++;



            if(loaded === images.length){


                featured.classList.add("show");


            }


        };



        img.onerror = () => {


            console.error(
                "Missing image:",
                img.src
            );


        };



    });



})


.catch(error => {


    console.error(

        "Featured gallery error:",

        error

    );


});
