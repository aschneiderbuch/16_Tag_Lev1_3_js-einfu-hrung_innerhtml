// 3 figure tags mit .innerHTML erstellen

let letHtmlGallery = document.getElementById("gallery");
console.log(letHtmlGallery);

letHtmlGallery.innerHTML += "<figure> </figure>"
console.log(letHtmlGallery)

let gallery = document.getElementById("gallery");
console.log(gallery);
gallery.innerHTML += "test";
console.log(gallery);

gallery.innerHTML += "<figure><img src="./assets/img/bild.jpg" alt="Bild"></figure> + <figure><img src="./assets/img/bild.jpg" alt="Bild"></figure> + <figure><img src="./assets/img/bild.jpg" alt="Bild"></figure>"
gallery.innerHTML += "<figure> test3</figure>"
gallery.innerHTML += "<figure> test4</figure>"

gallery.style.backgroundColor = "green"         // section gallery wird von rot auf grün 
console.log(gallery)


let figureOne = document.querySelector("figure:nth-of-type(1)");
console.log(figureOne);
figureOne.style.backgroundColor = "red" 
console.log(figureOne)
figureOne.innerHTML += "test22"
