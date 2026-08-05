const gallery = document.getElementById("gallery");


// ================= SCROLL ANIMATION =================


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





// ================= LOAD PHOTOS =================


fetch("./photos.json")


.then(response=>{


if(!response.ok){

throw new Error("photos.json failed");

}


return response.json();


})


.then(photos=>{


photos.forEach((photo,index)=>{


const card = document.createElement("div");


card.className = "photo-card";



const img = document.createElement("img");


img.src = `./images/portfolio/${photo}`;


img.alt = "SkyRise Visuals Photography";


img.loading = "lazy";



const button = document.createElement("a");


button.href = `./images/portfolio/${photo}`;


button.download = "";


button.className = "download-btn";


button.textContent = "Download";



card.appendChild(img);

card.appendChild(button);



gallery.appendChild(card);




setTimeout(()=>{


observer.observe(card);


}, index * 120);



});


})


.catch(error=>{


console.error(
"Gallery loading error:",
error
);


});
