// ================= RANDOM FEATURED PHOTOS =================

fetch("photos.json")

.then(response => response.json())

.then(photos => {


    // Randomize photos

    photos.sort(() => Math.random() - 0.5);



    const featured = document.getElementById("featured");



    if(!featured){

        console.error("Featured container not found");

        return;

    }



    // Select 3 photos

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



    featured.classList.add("show");



})


.catch(error => {


console.error(
"Featured gallery error:",
error
);


});
