generateRegisterId();

$('#btnAddCus').click(function () {
    saveCustomer();
});

$('#btnAddMng').click(function () {
    saveMng();
});

var registerId="";

function generateRegisterId(){
    var rid="";
    $.ajax({
        url: "http://localhost:8080/Back_End_war/register",
        success: function (resp) {
            for (let r of resp.data) {
                rid=r.r_Id;
            }
            let split =  rid.split('-');
            let num =(+split[1])+1;
            registerId=('RID-' + (String(num).padStart(3,'0')));
        }
    });
}


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
    if(type=="customer") {
    customerAll={
        "username":username,
        "password":password,
        "nic_No":nic,
        "nic_Image_One":nicImage1,
        "nic_Image_Two":nicImage2,
        "license":license,
        "license_Image_One":licenseImage1,
        "license_Image_Two":licenseImage2,
        "name":name,
        "contact":contact,
        "address":address,
        "email":email,
        "r_Id":registerId,
        "type":type
    }
        $.ajax({
            url: "http://localhost:8080/Back_End_war/customer",
            method: "post",
            contentType: "application/json",
            data: JSON.stringify(customerAll),
            success: function (resp) {
                alert(resp.message);
                clearPersonalDetailInputFields();
                generateRegisterId();
                console.log(resp);
            }
            ,
            error: function (error) {
                alert(error.responseJSON.message);
                clearPersonalDetailInputFields();
            }
        });
    }
        if(type=="driver") {
            driverAll = {
                "username": username,
                "password": password,
                "nic_No": nic,
                "nic_Image_One": nicImage1,
                "nic_Image_Two": nicImage2,
                "license": license,
                "license_Image_One": licenseImage1,
                "license_Image_Two": licenseImage2,
                "name": name,
                "contact": contact,
                "address": address,
                "email": email,
                "r_Id":registerId,
                "type": type
            }
            $.ajax({
                url: "http://localhost:8080/Back_End_war/driver",
                method: "post",
                contentType: "application/json",
                data: JSON.stringify(driverAll),
                success: function (resp) {
                    alert(resp.message);
                    clearPersonalDetailInputFields();
                    generateRegisterId();
                    console.log(resp);
                }
                ,
                error: function (error) {
                    alert(error.responseJSON.message);
                    clearPersonalDetailInputFields();
                }
            });
        }
}

function saveMng() {
    let usernameMng=$("#exampleInputUsername3").val();
    let passwordMng=$("#exampleInputPassword3").val();
    let nicMng=$("#mngNic").val();
    let nicImage1Mng=$("#mngNicImageShowFront").attr("src");
    let nicImage2Mng=$("#mngNicImageShowBack").attr("src");
    let nameMng=$("#mngName").val();
    let contactMng=$("#mngContact").val();
    let addressMng=$("#mngAddress").val();
    let emailMng=$("#mngEmail").val();
        managerAll={
            "username":usernameMng,
            "password":passwordMng,
            "nic_No":nicMng,
            "nic_Image_One":nicImage1Mng,
            "nic_Image_Two":nicImage2Mng,
            "name":nameMng,
            "contact":contactMng,
            "address":addressMng,
            "email":emailMng,
            "r_Id":registerId,
            "type": type
        }
        $.ajax({
            url: "http://localhost:8080/Back_End_war/manager",
            method: "post",
            contentType: "application/json",
            data: JSON.stringify(managerAll),
            success: function (resp) {
                alert(resp.message);
                clearPersonalDetailInputFieldsMng();
                generateRegisterId();
                console.log(resp);
            }
            ,
            error: function (error) {
                alert(error.responseJSON.message);
                clearPersonalDetailInputFieldsMng();
            }
        });
}