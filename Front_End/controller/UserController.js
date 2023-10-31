$('#btnAddCus').click(function () {
    saveCustomer();
});

function saveCustomer() {
    let username=$("#exampleInputUsername2").val();
    let password=$("#exampleInputPassword2").val();
    let nic=$("#customerNic").val();
    let nicImage1=$("#customerNicImageShowFront").attr("src");
    let nicImage2=$("#customerNicImageShowBack").attr("src");
    let license=$("#customerLicense").val();
    let licenseImage1=$("#customerLicenseImageShowFront").attr("src");
    let licenseImage2=$("#customerLicenseImageShowBack").attr("src");
    let name=$("#customerName").val();
    let contact=$("#customerContact").val();
    let address=$("#customerAddress").val();
    let email=$("#customerEmail").val();
    customerAll={
        "username_Customer":username,
        "password_Customer":password,
        "nic_No":nic,
        "nic_Image_One":nicImage1,
        "nic_Image_Two":nicImage2,
        "license_No":license,
        "license_Image_One":licenseImage1,
        "license_Image_Two":licenseImage2,
        "verify_State":null,
        "name":name,
        "contact":contact,
        "address":address,
        "email":email
    }
    $.ajax({
        url:"http://localhost:8080/Back_End_war/customer",
        method: "post",
        contentType:"application/json",
        data:JSON.stringify(customerAll),
        success: function (resp) {
            alert(resp.message);
            clearPersonalDetailInputFields();
            console.log(resp);
        }
        ,
        error: function (error) {
            alert(error.responseJSON.message);
            clearPersonalDetailInputFields();
        }
    });
}