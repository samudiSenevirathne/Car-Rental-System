function addBookValidation() {
    const DATE_REGEX = /^[0-9]{4}(.)[0-9]{2}(.)[0-9]{2}$/;
    const COUNT_REGEX = /^[0-9]{1,}$/;

    let arrayBook = new Array();
    arrayBook.push({field: $(".txtDate1"), regEx: DATE_REGEX});
    arrayBook.push({field: $(".txtDate2"), regEx: DATE_REGEX});
    arrayBook.push({field: $(".monthCount"), regEx: COUNT_REGEX});
    arrayBook.push({field: $(".dayCount"), regEx: COUNT_REGEX});

    function clearInputFieldsBook() {
        $(".txtDate1, .txtDate2, .monthCount, .dayCount").val("");
        $(".txtDate1, .txtDate2, .monthCount, .dayCount").css("border", "1px solid #ced4da");
        $(".txtDate1").focus();
        $(".btnConfirm").prop("disabled", true);
    }

    setBtnBook();

    // Disable tab
    $(".txtDate1, .txtDate2, .monthCount, .dayCount").on("keydown keyup", function (e) {
        // Get the index number of the data input fields indexNo
        let indexNo = arrayBook.findIndex((c) => c.field.is($(e.target)));

        // Disable tab key
        if (e.key == "Tab") {
            e.preventDefault();
        }

        // Check validations
        checkValidationNew(arrayBook[indexNo]);
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
            if (!checkValidationNew(arrayBook[i])) return false;
        }
        return true;
    }
}

    function checkValidationNew(object) {
        if (object && object.regEx && object.field && object.field.val()) {
            if (object.regEx.test(object.field.val())) {
                setBorderNew(true, object);
                return true;
            }
        }
        setBorderNew(false, object);
        return false;
    }

    function setBorderNew(isValid, ob) {
        if (ob.field.val().length >= 1) {
            if (isValid) {
                ob.field.css("border", "2px solid green");
            } else {
                ob.field.css("border", "2px solid red");
            }
        } else {
            ob.field.css("border", "1px solid #ced4da");
        }
    }

