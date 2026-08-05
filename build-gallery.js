const fs = require("fs");
const path = require("path");


const folder = "./images/portfolio";


const photos = fs.readdirSync(folder)
.filter(file =>
    file.endsWith(".jpg") ||
    file.endsWith(".JPG") ||
    file.endsWith(".jpeg") ||
    file.endsWith(".png")
);



fs.writeFileSync(
    "photos.json",
    JSON.stringify(photos, null, 2)
);


console.log("Gallery created!");
console.log(`${photos.length} photos added.`);
