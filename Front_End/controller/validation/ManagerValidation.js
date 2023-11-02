//add validations mng
let pArrayMng = new Array();
pArrayMng.push({field: $("#exampleInputUsername3"), regEx: USERNAME_REGEX});
pArrayMng.push({field: $("#exampleInputPassword3"), regEx: PASSWORD_REGEX});
pArrayMng.push({field: $("#mngName"), regEx: NAME_REGEX});
pArrayMng.push({field: $("#mngContact"), regEx: CONTACT_REGEX});
pArrayMng.push({field: $("#mngAddress"), regEx: ADDRESS_REGEX});
pArrayMng.push({field: $("#mngEmail"), regEx: EMAIL_REGEX});
pArrayMng.push({field: $("#mngNic"), regEx: NIC_NO_REGEX});

var intervalIdMng;

function clearPersonalDetailInputFieldsMng() {
    $("#exampleInputUsername3,#exampleInputPassword3,#mngName,#mngContact,#mngAddress,#mngEmail,#mngNic,#mngNicImage").val("");
    $("#mngNicImageShowFrontSpan>button").click();
    $("#mngNicImageShowFrontSpan>button").click();
    imageArrayMng = [];
    countMng=0;
    $("#exampleInputUsername3,#exampleInputPassword3,#mngName,#mngContact,#mngAddress,#mngEmail,#mngNic").css("border", "1px solid #ced4da");
    $("#exampleInputUsername3").focus();
    $("#btnAddMng").prop("disabled", true);
}

setBtnMng();

//disable tab
$("#exampleInputUsername3,#exampleInputPassword3,#mngName,#mngContact,#mngAddress,#mngEmail,#mngNic").on("keydown keyup", function (e) {

    //get the index number of data input fields indexNo
    let indexNo = pArrayMng.indexOf(pArrayMng.find((c) => c.field.attr("id") == e.target.id));

    //Disable tab key
    if (e.key == "Tab") {
        e.preventDefault();
    }

    //check validations
    checkValidations(pArrayMng[indexNo]);
    setBtnMng();

});


$("#mngNicImage").click(function () {
    intervalIdMng=setInterval(function(){
        imageCheckMng();
    },6000);
});

function stopIntervalMng() {
    clearInterval(intervalIdMng);
}

function imageCheckMng() {
    if($('#mngNicImageShowFront').attr("src") !== "") {
        $('#mngNicImageShowFront').css("border", "1px solid #ced4da");
        if ($('#mngNicImageShowBack').attr("src") !== "") {
            $('#mngNicImageShowBack').css("border", "1px solid #ced4da");
                $("#btnAddMng").prop("disabled", false);
                stopIntervalMng();
        } else {
            $('#mngNicImageShowBack').css("border", "2px solid red");
            $("#btnAddMng").prop("disabled", true);
        }
    }else{
        $("#btnAddMng").prop("disabled", true);
     }
}


function setBtnMng() {
    $("#btnAddMng").prop("disabled", true);
    $("#mngNicImage").prop("disabled", true);
    if (checkAllMng()) {
        $("#mngNicImage").prop("disabled", false);
    } else {
        $("#btnAddMng").prop("disabled", true);
        $("#mngNicImage").prop("disabled", true);

    }
}

function checkAllMng() {
    for (let i = 0; i < pArrayMng.length; i++) {
        if (!checkValidations(pArrayMng[i])) return false;
    }
    return true;
}
