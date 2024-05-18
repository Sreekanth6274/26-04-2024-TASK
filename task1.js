
let inputImage  = document.getElementById('input-image');
let  inputName = document.getElementById('input-field');
let  inputPara = document.getElementById('input-para');
let outputImage = document.getElementById('output-image');
let  outputName = document.getElementById('output-name');
let  outputPara = document.getElementById('output-para');

inputImage.onchange = (academy) => {

    let imgPath = academy.target.files[0];
    let path = URL.createObjectURL(imgPath);

    
    outputName.innerHTML = inputName.value; 
    outputImage.src = path
    inputName.value = ''

    outputPara.innerHTML = inputPara.value;
    outputImage.src = path
    inputPara.value = ''
};


// Description : At Career Sure Academy, Our Mission is To Empower Individuals
//  By Providing High-Quality Education Consultation Services, Promoting Lifelong Learning. 
// Ensuring Professional Growth, And Guiding Them Towards A Prosperous Career Path.