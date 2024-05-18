let inputImage = document.getElementById('input-image');
let inputName = document.getElementById('input-field');
let inputPara = document.getElementById('input-para');
let addImageButton = document.getElementById('add-image');
let imageContainer = document.getElementById('image-container');

let imagesData = []; // Array to store image data

inputImage.onchange = (event) => {
    let imgPath = event.target.files[0];
    let path = URL.createObjectURL(imgPath);

}