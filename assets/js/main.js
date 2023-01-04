// 3 figure tags mit .innerHTML erstellen

let letHtmlGallery = document.getElementById("gallery");
console.log(letHtmlGallery);

letHtmlGallery.innerHTML += "<figure> </figure>"
console.log(letHtmlGallery)

let gallery = document.getElementById("gallery");
console.log(gallery);
gallery.innerHTML += "test";
console.log(gallery);

gallery.innerHTML += `<figure><img src="./assets/img/bild.jpeg" alt="Bild"> <figcaption>Fig.1</figcaption> </figure>`
    + `<figure><img src="./assets/img/bild.jpeg" alt="Bild"> <figcaption>Fig.2</figcaption> </figure>`
    + `<figure><img src="./assets/img/bild.jpeg" alt="Bild"> <figcaption>Fig.3</figcaption> </figure>`

console.log(gallery);

gallery.style.display = "flex";
console.log(gallery)
gallery.style.flexDirection = "row";
console.log(gallery)
gallery.style.justifyContent = "center";
gallery.style.flexWrap = "wrap";
console.log(gallery)

