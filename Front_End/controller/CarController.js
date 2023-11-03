getAllCars();

function bindTrEvents() {
    let rows = $("#carTable").children().length;
    for (let i = 0; i < rows; i++) {
        $("#carTable").children().eq(i).click(function () {
            let registration_Number = $("#carTable").children().eq(i).children(":eq(0)").text();
            $.ajax({
                url: "http://localhost:8080/Back_End_war/car?registration_Number=" + registration_Number,
                method: "get",
                success: function (resp) {
                    console.log(resp.message);
                    console.log(resp.data);
                    $("#registrationNumber").val(resp.data.registration_Number);
                    $("#brand").val(resp.data.brand);
                    $("#color").val(resp.data.color);
                    $("#passengerCount").val(resp.data.passenger_Count);
                    $("#fuelType").val(resp.data.fuel_Type);
                    $("#priceExtra").val(resp.data.price_Extra_Km);
                    $("#rentPriceDay").val(resp.data.rent_Price_Day);
                    $("#freeKMDay").val(resp.data.free_Km_Day);
                    $("#rentPriceMonth").val(resp.data.rent_Price_Month);
                    $("#freeKMMonth").val(resp.data.free_Km_Month);
                    if (resp.data.type == "General") {
                        $("#type1").prop('checked', true);
                    } else if (resp.data.type == "Premium") {
                        $("#type2").prop('checked', true);
                    } else if (resp.data.type == "Luxury") {
                        $("#type3").prop('checked', true);
                    }
                    if (resp.data.transmission_Type == "Manual") {
                        $("#typeManual").prop('checked', true);
                    } else {
                        $("#typeAuto").prop('checked', true);
                    }
                    $("#frontView").attr('src', resp.data.front_View);
                    $("#backView").attr('src', resp.data.back_View);
                    $("#sideView").attr('src', resp.data.side_View);
                    $("#interior").attr('src', resp.data.interior);
                    $("#frontViewSpan").html(filenamenamespan1);
                    $("#backViewSpan").html(filenamenamespan2);
                    $("#sideViewSpan").html(filenamenamespan3);
                    $("#interiorSpan").html(filenamenamespan4);

                }
                , error: function (error) {
                    alert(error.responseJSON.message);
                    console.log(error);
                }
            });
        });
    }
}

function getAllCars() {
    $("#carTable").empty();
    $.ajax({
        url:"http://localhost:8080/Back_End_war/car",
        success: function (resp) {
            console.log(resp.message);
            for(let car of resp.data){
                let row =`<tr>
                            <td>${car.registration_Number}</td>
                            <td>${car.brand}</td>
                            <td>${car.rent_Price_Day}</td>
                            <td>${car.rent_Price_Month}</td>
                            <td>${car.free_Km_Day}</td>
                            <td>yes</td>
                            <td>
                             <button type="button" class="btn btn-outline-light btnRemoveFromCart">Remove</button>
                             <button type="button" class="btn btn-outline-light btnRemoveFromCart">Update</button>
                            </td>
                </tr>`;
                $("#carTable").append(row);
            }
            bindTrEvents();
        }
        ,error:function (error){
            alert(error.responseJSON.message);
            console.log(error);
        }
    });
}

$('#btnAddCar').click(function () {
    saveCar();
});

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
    let carImage1=filenamename1;
    let carImage2=filenamename2;
    let carImage3=filenamename3;
    let carImage4=filenamename4;
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
            getAllCars();
        }
        ,
        error: function (error) {
            alert(error.responseJSON.message);
            console.log(error.responseJSON.message);
            clearPersonalDetailInputFieldsCar();
        }
    });
}

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


//Car's Image Add Part

let imageArrayCar = [];
let inputCar = document.getElementById("carImage");
let countCar=0;
let filenamename1;
let filenamename2;
let filenamename3;
let filenamename4;
let filenamenamespan1;
let filenamenamespan2;
let filenamenamespan3;
let filenamenamespan4;

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
        filenamename1=URL.createObjectURL(imageArrayCar[0]);
        imageFront.src = URL.createObjectURL(imageArrayCar[0]);
        filenamenamespan1=`<button onclick="deleteImageCar(0)">&times;</button>`;
        imageFrontSpan.innerHTML = `<button onclick="deleteImageCar(0)">&times;</button>`;
    } else {
        imageFront.src = ""; // Clear the image source if no image is present.
        imageFrontSpan.innerHTML = "";
    }

    if (imageArrayCar.length > 1) {
        filenamename2=URL.createObjectURL(imageArrayCar[1]);
        imageBack.src = URL.createObjectURL(imageArrayCar[1]);
        filenamenamespan2=`<button onclick="deleteImageCar(1)">&times;</button>`;
        imageBackSpan.innerHTML = `<button onclick="deleteImageCar(1)">&times;</button>`;
    } else {
        imageBack.src = ""; // Clear the image source if no image is present.
        imageBackSpan.innerHTML = "";
    }

    if (imageArrayCar.length > 2) {
        filenamename3=URL.createObjectURL(imageArrayCar[2]);
        imageSide.src = URL.createObjectURL(imageArrayCar[2]);
        filenamenamespan3=`<button onclick="deleteImageCar(2)">&times;</button>`;
        imageSideSpan.innerHTML = `<button onclick="deleteImageCar(2)">&times;</button>`;
    } else {
        imageSide.src = ""; // Clear the image source if no image is present.
        imageSideSpan.innerHTML = "";
    }

    if (imageArrayCar.length > 3) {
        filenamename4=URL.createObjectURL(imageArrayCar[3]);
        imageInterior.src = URL.createObjectURL(imageArrayCar[3]);
        filenamenamespan4=`<button onclick="deleteImageCar(3)">&times;</button>`;
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