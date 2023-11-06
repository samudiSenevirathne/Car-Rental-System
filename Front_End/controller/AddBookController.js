function driverCheckBoxSet() {
    $(".drivercheck").on("change", function () {
            let isChecked = $(this).is(":checked");
                    if (isChecked) {
                        if (bookingDetails.length == 1) {
                            $(".drivercheck").prop("disabled", false);
                            $(".divSix").css("visibility", "visible");
                        } else {
                            for (var i = 0; i < bookingDetails.length; i++) {
                                for (var j = bookingDetails.length - 1; j >= 0; j--) {
                                    if (bookingDetails[i] != bookingDetails[j]) {
                                        // $("#btnConfirm").prop("disabled", true);
                                        $(".drivercheck").prop("disabled", false);
                                        $(".divSix").css("visibility", "visible");
                                    } else {
                                        // $("#btnConfirm").prop("disabled", false);
                                        $(".drivercheck").prop("disabled", true);
                                        $(".divSix").css("visibility", "hidden");
                                    }
                                }
                            }
                        }
                    }else{
                        // $(".drivercheck").prop("disabled", true);
                        $(".divSix").css("visibility", "hidden");
                    }

     });
}

// var total_KM=[];
var free_Km_Day=[];
var free_Km_Month=[];
var rent_Price_Day=[];
var rent_Price_Month=[];
var typppe=[];
var loss_Damage_Waiver="";
var rental_Fee="";
var kmAll="";
var mainStateNow="";

function setBookDetails() {
    $.ajax({
        url: "http://localhost:8080/Back_End_war/car",
        success: function (resp) {
            console.log(resp.message);
            $("#addBook>section>div>div").empty();
            $("#addBook>section>div>div").css('width', '100%');
            let originalWidthNext = $("#addBook>section>div>div").css("width")
            let originalWidthOnlyNumNext = parseFloat(originalWidthNext);
            let WidthNext = originalWidthOnlyNumNext * bookingDetails.length;
            $("#addBook>section>div>div").css('width', WidthNext);
            for (let car of resp.data) {
                for(var i =0;i<bookingDetails.length;i++) {
                    if (bookingDetails[i] == car.registration_Number) {
                        let div = `    <div>      
                            <form>
                                <div>
                                    <h1>Selected Car : ${car.brand} </h1>
                                    <h1>Number Plate : ${car.registration_Number}</h1>
                                </div>
                                <div>
                                    <div>
                                        <label>Start Date :</label>
                                        <input class="form-control txtDate1" type="date">
                                    </div>
                                    <div>
                                        <label>End Date :</label>
                                        <input class="form-control txtDate2" type="date">
                                    </div>
                                </div>
                                <div>
                                    <h1>Fare & Fee : Daily Rate (Rs):${car.rent_Price_Day}</h1>
                                    <h1> Monthly Rate (Rs):${car.rent_Price_Month}</h1>
                                </div>
                                <div>
                                    <div>
                                        <label>month Count :</label>
                                        <input class="form-control monthCount" min="1" type="number">
                                    </div>
                                    <div>
                                        <label>day Count :</label>
                                        <input class="form-control dayCount" min="1" type="number">
                                    </div>
                                </div>
                                <aside>
                                    <label class="form-check-label">Driver</label>
                                    <input class="form-check-input drivercheck" type="checkbox">
                                    <!--<h1>(Driver charge Rs 1000 for each day )</h1>-->
                                </aside>
                                <div class="divSix">
                                    <div>
                                        <label class="form-label startVenueId">Start Venue
                                            :</label>
                                        <input type="text" class="form-control startVenue"
                                               placeholder="Ex:- Galle">
                                    </div>
                                    <div>
                                        <label  class="form-label endVenueId">End Venue
                                            :</label>
                                        <input type="text" class="form-control endVenue"
                                               placeholder="Ex:- NuwaraEliya">
                                    </div>
                                </div>
                            </form>
                            <aside>
                                <h1>Note: you will be charge with extra Rs ${car.price_Extra_Km} for each km the end of the day.</h1>
                                <h1>Note: you will be charge as loss Damage Waiver Rs 10000(G) | 15000(P) | 20000(L) according car type and If
                                    the vehicle is unharmed the Loss Damage Waiver will be returned you at the end of
                                    the day.</h1>
                            </aside>
                        </div>`
                        $("#addBook>section>div>div").append(div);
                        rent_Price_Day.push(car.rent_Price_Day);
                        rent_Price_Month.push(car.rent_Price_Month);
                        typppe.push(car.type);
                        free_Km_Month.push(car.free_Km_Month);
                        free_Km_Day.push(car.free_Km_Day);
                    }
                }
            }
            driverCheckBoxSet();
            addBookValidation();
            locationValidation();
            $("#btnConfirm").click(function() {
                addArraay();
                paymentPage();
                setPayment();
            });
        }
        ,error:function (error){
         alert(error.responseJSON.message);
          $("#addBook>section>div>div").empty();
         console.log(error);
      }
    });
}

var arra = [];
var arratemp = [];
var startDate="";
var endDate="";
var dayCount="";
var monthCount="";
var startVenue="";
var endVenue="";
var checkedDriver="";
var  bookIdd="";
var  payIdd="";

var  checkedDriverRandom="";
function addArraay() {
    var count=0;
    for (var i = 0; i < bookingDetails.length; i++) {
        var divValues = $("#addBook>section>div>div>div").eq(i);
        startDate = divValues.find('.txtDate1').val();
        endDate = divValues.find('.txtDate2').val();
        monthCount = divValues.find('.monthCount').val();
        checkedDriver= divValues.find('.drivercheck').is(':checked');
        dayCount = divValues.find('.dayCount').val();
        startVenue = divValues.find('.startVenue').val();
        endVenue = divValues.find('.endVenue').val();

        if(checkedDriver==true) {
            randomDriver="";
            selectRandomDrive();
            checkedDriverRandom = randomDriver;
        }else{
            checkedDriverRandom="";
        }

        let rentalD=dayCount * rent_Price_Day[i];
        let rentalM=monthCount * rent_Price_Month[i];
           rental_Fee=rentalD+rentalM;

           if(typppe[i]=='General') {
               loss_Damage_Waiver = 10000;
           }else if(typppe[i]=='Premium') {
               loss_Damage_Waiver = 15000;
           }else if(typppe[i]=='Luxury'){
               loss_Damage_Waiver = 20000;
           }

            // getTotalKm();
           let totalDay=free_Km_Day[i] * dayCount;
           let totalMonth=free_Km_Month[i] * monthCount;
              kmAll=total_KM [i] + totalDay + totalMonth;
             if(kmAll % 50000 == 0){
                 mainStateNow="yes";
             }else{
                 mainStateNow="no";
             }

        if(count==0) {
              bookIdd= bookIddd;
         }else{
            let split = bookIddd.split('-');
            let num = (+split[1]) + 1;
            bookIdd = ('BID-' + (String(num).padStart(3, '0')));
        }

        if(count==0) {
            payIdd= payIddd;
        }else{
            let split = bookIddd.split('-');
            let num = (+split[1]) + 1;
            payIdd = ('PID-' + (String(num).padStart(3, '0')));
        }

        arra.push({
            registration_No: bookingDetails[i],
            start_Date: startDate,
            end_Date: endDate,
            nic_No_Driver: checkedDriverRandom,
            startVenue: startVenue,
            endVenue: endVenue,
            rental_Fee:rental_Fee,
            loss_Damage_Waiver:loss_Damage_Waiver,
            pay_Id:payIdd,
            bookId:bookIdd,
            total_KM:kmAll,
            maintain_Status:mainStateNow,
            nic_No_Cus:cusNicForBook
        });
             arratemp.push({
                 dayCount: dayCount,
                 monthCount: monthCount,
                 })

        alert(arra[i].registration_No); //as checking
        alert(arra[i].start_Date); //as checking
        alert(arra[i].end_Date); //as checking
        alert(arratemp[i].dayCount); //as checking
        alert(arratemp[i].monthCount); //as checking
        alert(arra[i].nic_No_Driver); //as checking
        alert(arra[i].startVenue); //as checking
        alert(arra[i].endVenue); //as checking
        alert(arra[i].rental_Fee); //as checking
        alert(arra[i].loss_Damage_Waiver); //as checking
        alert(arra[i].pay_Id); //as checking
        alert(arra[i].bookId); //as checking
        alert(arra[i].total_KM); //as checking
        alert(arra[i].maintain_Status); //as checking
        alert(arra[i].nic_No_Cus); //as checking
        count++;
    }
}

function paymentPage(){
    $("#header").css('display', 'block');
    $("#homeContent").css('display', 'none');
    $("#login").css('display', 'none');
    $("body").css('height', 'calc(100vh * 1)');
    $("#addCus").css('display', 'none');
    $("#afterLoggingBook").css('display', 'none');
    $("#addBook").css('display', 'none');
    $("#addPayment").css('display', 'block');
    $("#invoice").css('display', 'none');
    $("#bookingTableCustomer").css('display', 'none');
    $("#workScheduleDriver").css('display', 'none');
    $("#managerDashBoard").css('display', 'none');
    $("#addCar").css('display', 'none');
    $("#addMaintenance").css('display', 'none');
    $("#addDamageService").css('display', 'none');
    $("#addMng").css('display', 'none');
    $("#managerPath").css('display', 'none');
    $("#footer").css('display', 'block');
}

getAllDrivers();
var drivers = [];
function getAllDrivers() {
    $.ajax({
        url:"http://localhost:8080/Back_End_war/driver",
        success: function (resp) {
            // console.log(resp.message);
            for(let driver of resp.data){
                  drivers.push(driver.nic_No);
                  console.log(driver.nic_No);
            }
        }
        ,error:function (error){
            alert(error.responseJSON.message);
            console.log(error);
        }
    });
}

var randomDriver="";
function selectRandomDrive() {
    var randomIndex = Math.floor(Math.random() * drivers.length);
    randomDriver = drivers[randomIndex];
    console.log("Selected Driver: " + randomDriver);
}

generateBookId();
generatePayId();

var bookIddd;
function generateBookId(){
    var bid="";
    $.ajax({
        url: "http://localhost:8080/Back_End_war/book",
        success: function (resp) {
            // for (let b of resp.data) {
            //     for (var i = 0; i < bookingDetails.length; i++) {
            //         if (bookingDetails[i] == b.registration_No) {
            //
            //         }
            //     }
            // }
            for (let b of resp.data) {
                bid=b.bookId;
            }
            let split =  bid.split('-');
            let num =(+split[1])+1;
            bookIddd=('BID-' + (String(num).padStart(3,'0')));
            // alert(bookIdd);
        }
    });
}

var payIddd;
function generatePayId(){
    var pid="";
    $.ajax({
        url: "http://localhost:8080/Back_End_war/payment",
        success: function (resp) {
            for (let p of resp.data) {
                pid=p.pay_Id;
            }
            let split =  pid.split('-');
            let num =(+split[1])+1;
            payIddd=('PID-' + (String(num).padStart(3,'0')));
            // alert(payIdd);
        }
    });
}


// function getTotalKm() {
//     for (var i = 0; i < bookingDetails.length; i++) {
//         let registrationNo = bookingDetails[i];
//         $.ajax({
//             url: "http://localhost:8080/Back_End_war/book?registrationNo=" + registrationNo,
//             method: "get",
//             success: function (resp) {
//                 alert(resp.message);//for check
//                     total_KM.push(resp.data);
//             }
//             ,
//             error: function (error) {
//                 alert(error.responseJSON.message);
//                 clearLoginInputFields();
//             }
//         });
//     }
// }

function clearDataAddBook(){
    total_KM=[];
    maintain_Status=[];
    free_Km_Day=[];
    free_Km_Month=[];
    rent_Price_Day=[];
     rent_Price_Month=[];
    typppe=[];
    loss_Damage_Waiver="";
    rental_Fee="";
    kmAll="";
    mainStateNow="";
    arra = [];
    startDate="";
    endDate="";
    dayCount="";
    monthCount="";
    startVenue="";
    endVenue="";
    checkedDriver="";
    checkedDriverRandom="";
    drivers = [];
    randomDriver="";
    bookIdd="";
    payIdd="";
    arratemp = [];
}

