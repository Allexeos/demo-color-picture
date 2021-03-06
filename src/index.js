import { getAverageRGBA } from "color-picture";

const dropZone = document.querySelector('#drop_zone');
const fileInput = document.body.querySelector('#file-inpur');
const header = document.body.querySelector('header');

fileInput.addEventListener('change', readURL);
dropZone.addEventListener('drop', handleDrop, false);
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults, false)
});


function preventDefaults (e) {
    e.preventDefault();
    e.stopPropagation()
}

function handleDrop(e) {
    let dt = e.dataTransfer;
    if (dt.files && dt.files[0]) {
        let files = dt.files;
        uploadFile(files[0])
    }
}

function uploadFile(file) {
    var reader = new FileReader();
    reader.onload = onloadImage;
    reader.readAsDataURL(file);
}


function readURL(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
        uploadFile(input.files[0])
    }
}

function load(event) {
    const backgr = getAverageRGBA(event.target);
    dropZone.style.boxShadow = `0 16px 32px -8px ${backgr}`;
    dropZone.style.border = 'none'
    header.style.backgroundColor = backgr;
    header.style.boxShadow = ` 0 16px 24px -12px ${backgr}`;
    setTimeout(()=>{
        dropZone.style.boxShadow = ``;
        header.style.backgroundColor = '';
        header.style.boxShadow = ``;
        dropZone.style.backgroundImage = ``;

    },1500)
}

function onloadImage(event) {
    const image = new Image();
    image.src =  event.target.result;

    dropZone.style.backgroundImage = `url('${event.target.result}')`;
    image.addEventListener('load', load);

}

