const USERNAME_REGEX = /^[A-z0-9]{4,}$/;
const PASSWORD_REGEX = /^[A-z0-9]{5,}$/;

//add validations and text fields to the
let array = new Array();
array.push({field: $("#exampleInputUsername1"), regEx: USERNAME_REGEX});
array.push({field: $("#exampleInputPassword1"), regEx: PASSWORD_REGEX});

//disable tab
$("#exampleInputUsername1,#exampleInputPassword1").on("keydown keyup", function (e) {
    //get the index number of data input fields indexNo
    let indexNo = array.indexOf(array.find((c) => c.field.attr("id") == e.target.id));

    //Disable tab key
    if (e.key == "Tab") {
        e.preventDefault();
    }

    //check validations
    checkValidations(array[indexNo]);

});

function checkValidations(object) {
    if (object.regEx.test(object.field.val())) {
        setBorder(true, object)
        return true;
    }
    setBorder(false, object)
    return false;
}

function setBorder(bol, ob) {
    if (!bol) {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid red");
        } else {
            ob.field.css("border", "1px solid #ced4da");
        }
    } else {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid green");
        } else {
            ob.field.css("border", "1px solid #ced4da");
        }
    }
}