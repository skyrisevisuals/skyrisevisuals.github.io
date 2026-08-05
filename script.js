<script>


// ================= RANDOM FEATURED PHOTOS =================


fetch("photos.json")


.then(response => response.json())


.then(photos => {



    // Randomize photos every page load

    photos = photos.sort(() => Math.random() - 0.5);



    const featured = document.getElementById("featured");



    if (!featured) {

        console.error("Featured container missing");

        return;

    }



    // Select 3 photos

    const selectedPhotos = photos.slice(0,3);



    featured.innerHTML = `



        <img

        class="feature-photo left"

        src="images/portfolio/${selectedPhotos[0]}"

        alt="SkyRise Visuals Photography">





        <img

        class="feature-photo center"

        src="images/portfolio/${selectedPhotos[1]}"

        alt="SkyRise Visuals Photography">





        <img

        class="feature-photo right"

        src="images/portfolio/${selectedPhotos[2]}"

        alt="SkyRise Visuals Photography">



    `;



    // Fade featured photos in

    setTimeout(() => {


        featured.classList.add("show");


    },200);



})


.catch(error => {


    console.error(

        "Featured photo loading error:",

        error

    );


});









// ================= SCROLL FADE ANIMATIONS =================



const hiddenElements = document.querySelectorAll(

    ".hidden, .hidden-left, .hidden-right"

);





const revealOnScroll = new IntersectionObserver((entries)=>{



    entries.forEach((entry)=>{



        if(entry.isIntersecting){



            entry.target.classList.add("show");



            revealOnScroll.unobserve(entry.target);



        }



    });



},{

    threshold:0.15

});






hiddenElements.forEach((element)=>{



    revealOnScroll.observe(element);



});



</script>
