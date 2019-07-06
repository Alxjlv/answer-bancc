function previewFile1(){
    var preview = document.querySelector('#img1'); //selects the query named img
    var file    = document.querySelector('#input1[type=file]').files[0]; //sames as here
    var reader = new FileReader();

    console.log(preview);
    console.log(file);
    console.log(reader);

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        preview.src = "";
    }
}

function previewFile2(){
    var preview = document.querySelector('#img2'); //selects the query named img
    var file    = document.querySelector('#input2[type=file]').files[0]; //sames as here
    var reader  = new FileReader();

    console.log(preview);
    console.log(file);
    console.log(reader);

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        preview.src = "";
    }
}

function previewFile3(){
    var preview = document.querySelector('#img3'); //selects the query named img
    var file    = document.querySelector('#input3[type=file]').files[0]; //sames as here
    var reader  = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        preview.src = "";
    }
}