const NAME_REGEX = /^[A-z]{3,}$/;
const CONTACT_REGEX = /^([+94])[0-9]{11}$/;
const ADDRESS_REGEX = /^[A-z]{4,}$/;
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
const NIC_NO_REGEX = /^[0-9]{10,15}(v)?$/;
const LICENSE_NO_REGEX = /^[0-9]{10,15}?$/;

//add validations and text fields to the
let pArray = new Array();
pArray.push({field: $("#exampleInputUsername2"), regEx: USERNAME_REGEX});
pArray.push({field: $("#exampleInputPassword2"), regEx: PASSWORD_REGEX});
pArray.push({field: $("#customerName"), regEx: NAME_REGEX});
pArray.push({field: $("#customerContact"), regEx: CONTACT_REGEX});
pArray.push({field: $("#customerAddress"), regEx: ADDRESS_REGEX});
pArray.push({field: $("#customerEmail"), regEx: EMAIL_REGEX});
pArray.push({field: $("#customerNic"), regEx: NIC_NO_REGEX});
pArray.push({field: $("#customerLicense"), regEx: LICENSE_NO_REGEX});

var intervalId;

function clearPersonalDetailInputFields() {
    $("#exampleInputUsername2,#exampleInputPassword2,#customerName,#customerContact,#customerAddress,#customerEmail,#customerNic,#customerLicense,#customerNicImage,#customerLicenseImage").val("");
    $("#customerNicImageShowFrontSpan>button,#customerLicenseImageShowFrontSpan>button").click();
    $("#customerNicImageShowFrontSpan>button,#customerLicenseImageShowFrontSpan>button").click();
    imageArray2 = [];
    countTwo=0;
    imageArray = [];
    count=0;
    $("#exampleInputUsername2,#exampleInputPassword2,#customerName,#customerContact,#customerAddress,#customerEmail,#customerNic,#customerLicense").css("border", "1px solid #ced4da");
    $("#exampleInputUsername2").focus();
    $("#btnAddCus").prop("disabled", true);
}

setBtn();

//disable tab
$("#exampleInputUsername2,#exampleInputPassword2,#customerName,#customerContact,#customerAddress,#customerEmail,#customerNic,#customerLicense").on("keydown keyup click", function (e) {

        //get the index number of data input fields indexNo
        let indexNo = pArray.indexOf(pArray.find((c) => c.field.attr("id") == e.target.id));

        //Disable tab key
        if (e.key == "Tab") {
            e.preventDefault();
        }

        //check validations
        checkValidations(pArray[indexNo]);
        setBtn();


        // //If the enter key pressed cheque and focus
        // if (e.key == "Enter") {
        //
        //     if (e.target.id != pArray[pArray - 1].field.attr("id")) {
        //         //check validation is ok
        //         if (checkValidations(pArray[indexNo])) {
        //             pArray[indexNo + 1].field.focus();
        //         }
        //     } else {
        //         if (checkValidations(pArray[indexNo])) {
        //         }
        //     }
        // }
});


$("#customerNicImage,#customerLicenseImage").click(function () {
       intervalId=setInterval(function(){
        imageCheck();
    },6000);
});

function stopInterval() {
    clearInterval(intervalId);
}

function imageCheck() {
    if($('#customerNicImageShowFront').attr("src") !== "") {
        $('#customerNicImageShowFront').css("border", "1px solid #ced4da");
        if ($('#customerNicImageShowBack').attr("src") !== "") {
            $('#customerNicImageShowBack').css("border", "1px solid #ced4da");
            if ($('#customerLicenseImageShowFront').attr("src") !== "") {
                $('#customerLicenseImageShowFront').css("border", "1px solid #ced4da");
                  if ($('#customerLicenseImageShowBack').attr("src") !== "") {
                        $('#customerLicenseImageShowBack').css("border", "1px solid #ced4da");
                                  $("#btnAddCus").prop("disabled", false);
                                      stopInterval();
                  }else{
                      $('#customerLicenseImageShowBack').css("border", "2px solid red");
                  }
            }else{
                $('#customerLicenseImageShowFront').css("border", "2px solid red");
            }
        }else{
            $('#customerNicImageShowBack').css("border", "2px solid red");
        }
    }else{
    }
}


function setBtn() {
        $("#btnAddCus,#customerLicenseImage,#customerNicImage").prop("disabled", true);
    if (checkAll()) {
        $("#customerLicenseImage,#customerNicImage").prop("disabled", false);
    } else {
        $("#btnAddCus,#customerLicenseImage,#customerNicImage").prop("disabled", true);
    }
}

function checkAll() {
    for (let i = 0; i < pArray.length; i++) {
        if (!checkValidations(pArray[i])) return false;
    }
    return true;
}