$("#textOrNext").hover(function() {
    $("#addCusForm>div:last-child").css("visibility", "visible");
}, function() {
    $("#addCusForm>div:last-child").css("visibility", "hidden");
});

$("#textOrNext").click(function() {
   same();
});

// added Image of Nic's part

let imageArray = [];
let input = document.getElementById("customerNicImage");
let count=0;


input.addEventListener("change", function () {
    const files = input.files;
    L1 : for (var i = 0; i < files.length; i++) {
        if (count == 2) {
            break L1;
        }
        imageArray.push(files[i]);
        console.log(imageArray);//for checking
        console.log(files.length);//for checking
        console.log(count);//for checking
        count++;
        console.log(count);//for checking
    }
    displayImage();
});

function displayImage() {
    var image1 = document.getElementById("customerNicImageShowFront");
    var imagespan1 = document.getElementById("customerNicImageShowFrontSpan");
    var image2 = document.getElementById("customerNicImageShowBack");
    var imagespan2 = document.getElementById("customerNicImageShowBackSpan");

    if (imageArray.length > 0) {
        image1.src = URL.createObjectURL(imageArray[0]);
        imagespan1.innerHTML = `<button onclick="deleteImage(0)">&times;</button>`;
    } else {
        image1.src = ""; // Clear the image source if no image is present.
        imagespan1.innerHTML = "";
    }

    if (imageArray.length > 1) {
        image2.src = URL.createObjectURL(imageArray[1]);
        imagespan2.innerHTML = `<button onclick="deleteImage(1)">&times;</button>`;
    } else {
        image2.src = ""; // Clear the image source if no image is present.
        imagespan2.innerHTML = "";
    }
}

function deleteImage(index) {
    imageArray.splice(index, 1);
    count--;
    displayImage();
}


// // added Image of License's part

let imageArray2 = [];
let input2 = document.getElementById("customerLicenseImage");
let countTwo=0;


input2.addEventListener("change", function () {
    const files = input2.files;
    L2 : for (var i = 0; i < files.length; i++) {
        if (countTwo == 2) {
            break L2;
        }
        imageArray2.push(files[i]);
        console.log(imageArray2);//for checking
        console.log(files.length);//for checking
        console.log(countTwo);//for checking
        countTwo++;
        console.log(countTwo);//for checking
    }
    displayImage2();
});

function displayImage2() {
    var imageTwo1 = document.getElementById("customerLicenseImageShowFront");
    var imagespanTwo1 = document.getElementById("customerLicenseImageShowFrontSpan");
    var imageTwo2 = document.getElementById("customerLicenseImageShowBack");
    var imagespantwo2 = document.getElementById("customerLicenseImageShowBackSpan");

    if (imageArray2.length > 0) {
        imageTwo1.src = URL.createObjectURL(imageArray2[0]);
        imagespanTwo1.innerHTML = `<button onclick="deleteImageTwo(0)">&times;</button>`;
    } else {
        imageTwo1.src = ""; // Clear the image source if no image is present.
        imagespanTwo1.innerHTML = "";
    }

    if (imageArray2.length > 1) {
        imageTwo2.src = URL.createObjectURL(imageArray2[1]);
        imagespantwo2.innerHTML = `<button onclick="deleteImageTwo(1)">&times;</button>`;
    } else {
        imageTwo2.src = ""; // Clear the image source if no image is present.
        imagespantwo2.innerHTML = "";
    }
}

function deleteImageTwo(index) {
    imageArray2.splice(index, 1);
    countTwo--;
    displayImage2();
}

    const passwordField = $('#exampleInputPassword2');
    const togglePassword = $('#togglePassword2');
    const eyeIcon = $('#eyeIcon2');

    togglePassword.click(function() {
        if (passwordField.attr('type') === 'password') {
            passwordField.attr('type', 'text');
            eyeIcon.removeClass('fa-solid fa-eye').addClass('fa-solid fa-eye-slash');
        } else {
            passwordField.attr('type', 'password');
            eyeIcon.removeClass('fa-solid fa-eye-slash').addClass('fa-solid fa-eye');
        }
    });