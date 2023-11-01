generateRegisterId();

$('#btnAddCus').click(function () {
    saveCustomer();
});

let registerId;

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

let registerDetailCus=[];
let registerDetailDri=[];
let registerDetailMng=[];


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
    registerDetailCus.push({
        r_Id:registerId,
        type:type,
        nic_No_Customer:nic
    });
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
        "registerDetail":registerDetailCus
    }
        $.ajax({
            url: "http://localhost:8080/Back_End_war/customer",
            method: "post",
            contentType: "application/json",
            data: JSON.stringify(customerAll),
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
        if(type=="driver") {
            registerDetailDri.push({
                r_Id:registerId,
                type:type,
                nic_No_Driver:nic
            });
            driverAll={
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
                "registerDetail":registerDetailDri
            }
            $.ajax({
                url: "http://localhost:8080/Back_End_war/driver",
                method: "post",
                contentType: "application/json",
                data: JSON.stringify(driverAll),
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
}