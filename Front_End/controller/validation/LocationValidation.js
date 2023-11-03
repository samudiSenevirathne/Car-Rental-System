function locationValidation() {

    const PLACE_REGEX = /^[A-z]{3,}$/;

    let arrayPlace = new Array();
    arrayPlace.push({field: $(".startVenue"), regEx: PLACE_REGEX});
    arrayPlace.push({field: $(".endVenue"), regEx: PLACE_REGEX});

    function clearInputFieldsPlace() {
        $(".startVenue,.endVenue").val("");
        $(".startVenue,.endVenue").css("border", "1px solid #ced4da");
    }

//disable tab
    $(".startVenue,.endVenue").on("keydown keyup", function (e) {

        //get the index number of data input fields indexNo
        let indexNo = arrayPlace.indexOf(arrayPlace.find((c) => c.field.attr("id") == e.target.id));

        //Disable tab key
        if (e.key == "Tab") {
            e.preventDefault();
        }

        //check validations
        checkValidations(arrayPlace[indexNo]);
        setBtnPlace();

    });

    function setBtnPlace() {
        if (checkAllPlace()) {
            $("#btnConfirm").prop("disabled", false);
        } else {
            $("#btnConfirm").prop("disabled", true);
        }
    }

    function checkAllPlace() {
        for (let i = 0; i < arrayPlace.length; i++) {
            if (!checkValidations(arrayPlace[i])) return false;
        }
        return true;
    }
}