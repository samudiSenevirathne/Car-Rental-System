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

//disable tab
$("#exampleInputUsername2,#exampleInputPassword2,#customerName,#customerContact,#customerAddress,#customerEmail,#customerNic,#customerLicense").on("keydown keyup", function (e) {
    //get the index number of data input fields indexNo
    let indexNo = pArray.indexOf(pArray.find((c) => c.field.attr("id") == e.target.id));

    //Disable tab key
    if (e.key == "Tab") {
        e.preventDefault();
    }

    //check validations
    checkValidations(pArray[indexNo]);

});

