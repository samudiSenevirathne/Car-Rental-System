const REGISTER_NUMBER_REGEX = /^[A-z0-9]{4,}$/;
const PASSENGER_COUNT_REGEX = /^[0-9]{1,}$/;
const PRICE_EXTRA_REGEX = /^-?\d+(\.\d+)?$/;
const RENT_PRICE_DAY_REGEX =  /^-?\d+(\.\d+)?$/;
const FREE_KM_DAY_REGEX =  /^-?\d+(\.\d+)?$/;

//add validations mng
let pArrayCar = new Array();
pArrayCar.push({field: $("#registrationNumber"), regEx: REGISTER_NUMBER_REGEX});
pArrayCar.push({field: $("#brand"), regEx: NAME_REGEX});
pArrayCar.push({field: $("#color"), regEx: NAME_REGEX});
pArrayCar.push({field: $("#passengerCount"), regEx: PASSENGER_COUNT_REGEX});
pArrayCar.push({field: $("#fuelType"), regEx: NAME_REGEX});
pArrayCar.push({field: $("#priceExtra"), regEx: PRICE_EXTRA_REGEX});
pArrayCar.push({field: $("#rentPriceDay"), regEx: RENT_PRICE_DAY_REGEX});
pArrayCar.push({field: $("#freeKMDay"), regEx: FREE_KM_DAY_REGEX});
pArrayCar.push({field: $("#rentPriceMonth"), regEx: RENT_PRICE_DAY_REGEX});
pArrayCar.push({field: $("#freeKMMonth"), regEx: RENT_PRICE_DAY_REGEX});

var intervalIdCar;

function clearPersonalDetailInputFieldsCar() {
    $("#registrationNumber,#brand,#color,#passengerCount,#fuelType,#priceExtra,#rentPriceDay,#freeKMDay,#rentPriceMonth,#freeKMMonth,#carImage").val("");
    $("#frontViewSpan>button,#backViewSpan>button,#sideViewSpan>button,#interiorSpan>button").click();
    $("#frontViewSpan>button,#backViewSpan>button,#sideViewSpan>button,#interiorSpan>button").click();
    $("#frontViewSpan>button,#backViewSpan>button,#sideViewSpan>button,#interiorSpan>button").click();
    x = false;
    y=false;
    imageArrayCar = [];
    countCar=0;
    $("#registrationNumber,#brand,#color,#passengerCount,#fuelType,#priceExtra,#rentPriceDay,#freeKMDay,#rentPriceMonth,#freeKMMonth").css("border", "1px solid #ced4da");
    $("#registrationNumber").focus();
    $("#btnAddCar").prop("disabled", true);
}

//disable tab
$("#registrationNumber,#brand,#color,#passengerCount,#fuelType,#priceExtra,#rentPriceDay,#freeKMDay,#rentPriceMonth,#freeKMMonth").on("keydown keyup", function (e) {

    //get the index number of data input fields indexNo
    let indexNo = pArrayCar.indexOf(pArrayCar.find((c) => c.field.attr("id") == e.target.id));

    //Disable tab key
    if (e.key == "Tab") {
        e.preventDefault();
    }

    //check validations
    checkValidations(pArrayCar[indexNo]);
    setBtnCar();

});


$("#carImage").click(function () {
    intervalICar=setInterval(function(){
        imageCheckCar();
    },6000);
});

function stopIntervalCar() {
    clearInterval(intervalIdCar);
}

function imageCheckCar() {
    if($('#frontView').attr("src") !== "") {
        $('#frontView').css("border", "1px solid #ced4da");
        if ($('#backView').attr("src") !== "") {
            $('#backView').css("border", "1px solid #ced4da");
            if ($('#sideView').attr("src") !== "") {
                $('#sideView').css("border", "1px solid #ced4da");
                if ($('#interior').attr("src") !== "") {
                      $('#interior').css("border", "1px solid #ced4da");
                          var x = $("#type1,#type2,#type3").is(':checked');
                             if (x == true){
                                   var y = $("#typeAuto,#typeManual").is(':checked');
                                    if (y == true){
                                         $("#btnAddCar").prop("disabled", false);
                                          stopIntervalCar();
                                    }else{
                                        $("#btnAddCar").prop("disabled", true);
                                    }
                          }else{
                                 $("#btnAddCar").prop("disabled", true);
                             }
                }else{
                    $('#interior').css("border", "2px solid red");
                    $("#btnAddCar").prop("disabled", true);
                }
        }else{
                $('#sideView').css("border", "2px solid red");
                $("#btnAddCar").prop("disabled", true);
            }
        }else{
            $('#backView').css("border", "2px solid red");
            $("#btnAddCar").prop("disabled", true);
        }
    }else{
        $("#btnAddCar").prop("disabled", true);
    }
}

function setBtnCar() {
    $("#btnAddCar").prop("disabled", true);
    $("#carImage").prop("disabled", true);
    if (checkAllCar()) {
        $("#carImage").prop("disabled", false);
    } else {
        $("#btnAddCar").prop("disabled", true);
        $("#carImage").prop("disabled", true);
    }
}

function checkAllCar() {
    for (let i = 0; i < pArrayCar.length; i++) {
        if (!checkValidations(pArrayCar[i])) return false;
    }
    return true;
}