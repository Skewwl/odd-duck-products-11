'use strict';

//variables
const imgSectionEl = document.getElementById('imagedisplay');
const imgFileArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'unicorn.jpg', 'water-can.jpg'];
let constructedImages = [];

//constructor function
function ImageConstructor (name, imgFile){
    this.name = name;
    this.imgFile = `./imgs/${imgFile}`;
    this.timesClicked = 0;
    this.timesShown = 0;
};

//put constructor function objects in array
for (let i = 0; i < imgFileArray.length; i++){
    let newlyMadeImg = new ImageConstructor (imgFileArray[i].slice(0, imgFileArray[i].length - 4), imgFileArray[i]);
    constructedImages.push(newlyMadeImg);
};
console.log(constructedImages);

//find a random image to grab
function getRandomIndex (){
    return Math.floor(Math.random() * constructedImages.length);
}

//create function to render images
function renderImages(){
    //use document to put images in their html section
    let img1El = document.getElementById('image1');
    let img2El = document.getElementById('image2');
    let img3El = document.getElementById('image3');
    //set images from array to a variable
    let img1 = constructedImages[getRandomIndex()];
    let img2 = constructedImages[getRandomIndex()];
    let img3 = constructedImages[getRandomIndex()];
    while (img1 === img2 || img1 === img3 || img2 === img3){
        img1 = constructedImages[getRandomIndex()];
        img2 = constructedImages[getRandomIndex()];
        img3 = constructedImages[getRandomIndex()];
    };
    img1.timesShown++;
    img2.timesShown++;
    img3.timesShown++;
    //asign img elements a src & name
    img1El.src = img1.imgFile;
    img2El.src = img2.imgFile;
    img3El.src = img3.imgFile;
    img1El.name = img1.name;
    img2El.name = img2.name;
    img3El.name = img3.name;
}

//click event handler
function handleClick(clickEvent){
    let imageName = clickEvent.target.name;
    constructedImages.forEach(function (searchArrayFor){
        if (searchArrayFor.name === imageName){
            searchArrayFor.timesClicked++;
        }
    })
    renderImages();
};



imgSectionEl.addEventListener('click', handleClick);

renderImages();