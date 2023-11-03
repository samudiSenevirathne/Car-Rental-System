function  addBookValidation() {

    const DATE_REGEX = /^[0-9]{4}(.)[0-9]{2}(.)[0-9]{2}$/;
    const COUNT_REGEX = /^[0-9]{1,}$/;

    let arrayBook = new Array();
    arrayBook.push({field: $(".txtDate1"), regEx: DATE_REGEX});
    arrayBook.push({field: $(".txtDate2"), regEx: DATE_REGEX});
    arrayBook.push({field: $(".monthCount"), regEx: COUNT_REGEX});
    arrayBook.push({field: $(".dayCount"), regEx: COUNT_REGEX});

    function clearInputFieldsBook() {
        $(".txtDate1,.txtDate2,.monthCount,.dayCount").val("");
        $(".txtDate1,.txtDate2,.monthCount,.dayCount").css("border", "1px solid #ced4da");
        $(".txtDate1").focus();
        $(".btnConfirm").prop("disabled", true);
    }

    setBtnBook();

//disable tab
    $(".txtDate1,.txtDate2,.monthCount,.dayCount").on("keydown keyup", function (e) {

        //get the index number of data input fields indexNo
        let indexNo = arrayBook.indexOf(arrayBook.find((c) => c.field.attr("id") == e.target.id));

        //Disable tab key
        if (e.key == "Tab") {
            e.preventDefault();
        }

        //check validations
        checkValidations(arrayBook[indexNo]);
        setBtnBook();

    });

    function setBtnBook() {
        $("#btnConfirm").prop("disabled", true);
        $(".drivercheck").prop('disabled', true);
        if (checkAllBook()) {
            $("#btnConfirm").prop("disabled", false);
            $(".drivercheck").prop('disabled', false);
        } else {
            $("#btnConfirm").prop("disabled", true);
            $(".drivercheck").prop('disabled', true);
        }
    }

    function checkAllBook() {
        for (let i = 0; i < arrayBook.length; i++) {
            if (!checkValidations(arrayBook[i])) return false;
        }
        return true;
    }
}