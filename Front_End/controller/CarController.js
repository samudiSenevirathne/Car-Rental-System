//Car's Image Add Part

let imageArrayCar = [];
let inputCar = document.getElementById("carImage");
let countCar=0;


inputCar.addEventListener("change", function () {
    const files = inputCar.files;
    L3 : for (var i = 0; i < files.length; i++) {
        if (countCar == 4) {
            break L3;
        }
        imageArrayCar.push(files[i]);
        console.log(imageArrayCar);//for checking
        console.log(files.length);//for checking
        console.log(countCar);//for checking
        countCar++;
        console.log(countCar);//for checking
    }
    displayImageCar();
});

function displayImageCar() {
    var imageFront = document.getElementById("frontView");
    var imageFrontSpan = document.getElementById("frontViewSpan");
    var imageBack = document.getElementById("backView");
    var imageBackSpan = document.getElementById("backViewSpan");
    var imageSide = document.getElementById("sideView");
    var imageSideSpan = document.getElementById("sideViewSpan");
    var imageInterior = document.getElementById("interior");
    var imageInteriorSpan = document.getElementById("interiorSpan");

    if (imageArrayCar.length > 0) {
        imageFront.src = URL.createObjectURL(imageArrayCar[0]);
        imageFrontSpan.innerHTML = `<button onclick="deleteImageCar(0)">&times;</button>`;
    } else {
        imageFront.src = ""; // Clear the image source if no image is present.
        imageFrontSpan.innerHTML = "";
    }

    if (imageArrayCar.length > 1) {
        imageBack.src = URL.createObjectURL(imageArrayCar[1]);
        imageBackSpan.innerHTML = `<button onclick="deleteImageCar(1)">&times;</button>`;
    } else {
        imageBack.src = ""; // Clear the image source if no image is present.
        imageBackSpan.innerHTML = "";
    }

    if (imageArrayCar.length > 2) {
        imageSide.src = URL.createObjectURL(imageArrayCar[2]);
        imageSideSpan.innerHTML = `<button onclick="deleteImageCar(2)">&times;</button>`;
    } else {
        imageSide.src = ""; // Clear the image source if no image is present.
        imageSideSpan.innerHTML = "";
    }

    if (imageArrayCar.length > 3) {
        imageInterior.src = URL.createObjectURL(imageArrayCar[3]);
        imageInteriorSpan.innerHTML = `<button onclick="deleteImageCar(3)">&times;</button>`;
    } else {
        imageInterior.src = ""; // Clear the image source if no image is present.
        imageInteriorSpan.innerHTML = "";
    }
}

function deleteImageCar(index) {
    imageArrayCar.splice(index, 1);
    countCar--;
    displayImageCar();
}


$('#btnAddCar').click(function () {
    saveCar();
});

var carType="";

function setCarType() {
    if ($("#type1").is(':checked')) {
        carType = $("#type1").attr("value");
    }
    if ($("#type2").is(':checked')) {
        carType = $("#type2").attr("value");
    }
    if ($("#type3").is(':checked')) {
        carType = $("#type3").attr("value");
    }
}

var transmissionType="";

function setCarTransmissionType() {
    if ($("#typeAuto").is(':checked')) {
        transmissionType = $("#typeAuto").attr("value");
    }
    if ($("#typeManual").is(':checked')) {
        transmissionType = $("#typeManual").attr("value");
    }
}


function saveCar() {
    setCarType() ;
    setCarTransmissionType();
    let registrationNumber=$("#registrationNumber").val();
    let brand=$("#brand").val();
    let color=$("#color").val();
    let passengerCount=$("#passengerCount").val();
    let fuelType=$("#fuelType").val();
    let priceExtra=$("#priceExtra").val();
    let rentPriceDay=$("#rentPriceDay").val();
    let freeKmDay=$("#freeKMDay").val();
    let rentPriceMonth=$("#rentPriceMonth").val();
    let freeKmMonth=$("#freeKMMonth").val();
    let carImage1=$("#frontView").attr("src");
    let carImage2=$("#backView").attr("src");
    let carImage3=$("#sideView").attr("src");
    let carImage4=$("#interior").attr("src");
        carAll={
            "registration_Number":registrationNumber,
            "brand":brand,
            "type":carType,
            "rent_Price_Day":rentPriceDay,
            "rent_Price_Month":rentPriceMonth,
            "free_Km_Day" : freeKmDay,
            "free_Km_Month":freeKmMonth,
            "price_Extra_Km":priceExtra,
            "color":color,
            "front_View":carImage1,
            "back_View":carImage2,
            "side_View":carImage3,
            "interior":carImage4,
            "passenger_Count":passengerCount,
            "transmission_Type":transmissionType,
            "fuel_Type":fuelType,
            "nic_No_Manager":mngNicForCar
        }
        $.ajax({
            url: "http://localhost:8080/Back_End_war/car",
            method: "post",
            contentType: "application/json",
            data: JSON.stringify(carAll),
            success: function (resp) {
                alert(resp.message);
                clearPersonalDetailInputFieldsCar();
                console.log(resp);
            }
            ,
            error: function (error) {
                alert(error.responseJSON.message);
                clearPersonalDetailInputFieldsCar();
            }
        });
    }

