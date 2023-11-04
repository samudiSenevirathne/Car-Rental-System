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

var total_KM=[];
var maintain_Status=[];
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
var startDate="";
var endDate="";
var dayCount="";
var monthCount="";
var startVenue="";
var endVenue="";
var checkedDriver="";

var  checkedDriverRandom="";
function addArraay() {
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

            getTotalKm();
           let totalDay=free_Km_Day[i] * dayCount;
           let totalMonth=free_Km_Month[i] * monthCount;
              kmAll=total_KM [i] + totalDay + totalMonth;
             if(kmAll % 50000 == 0){
                 mainStateNow="yes";
             }else{
                 mainStateNow="no";
             }

        arra.push({
            carNumber: bookingDetails[i],
            startDate: startDate,
            endDate: endDate,
            dayCount: dayCount,
            monthCount: monthCount,
            randomDriver: checkedDriverRandom,
            startVenue: startVenue,
            endVenue: endVenue,
            rentalFee:rental_Fee,
            lossDamageWaiver:loss_Damage_Waiver,
            // payIdd:payIdd,
            // bookIdd:bookIdd,
            payIdd:"PID-001",
            bookIdd:"BID-001",
            totalKM:kmAll,
            mainStateNow:mainStateNow
        });

        alert(arra[i].carNumber); //as checking
        alert(arra[i].startDate); //as checking
        alert(arra[i].endDate); //as checking
        alert(arra[i].dayCount); //as checking
        alert(arra[i].monthCount); //as checking
        alert(arra[i].randomDriver); //as checking
        alert(arra[i].startVenue); //as checking
        alert(arra[i].endVenue); //as checking
        alert(arra[i].rentalFee); //as checking
        alert(arra[i].lossDamageWaiver); //as checking
        alert(arra[i].payIdd); //as checking
        alert(arra[i].bookIdd); //as checking
        alert(arra[i].totalKM); //as checking
        alert(arra[i].mainStateNow); //as checking
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
            console.log(resp.message);
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

// generateBookId();
let bookIdd;
function generateBookId(){
    var bid="";
    $.ajax({
        url: "http://localhost:8080/Back_End_war/book",
        success: function (resp) {
            for (let b of resp.data) {
                for (var i = 0; i < bookingDetails.length; i++) {
                    if (bookingDetails[i] == b.registration_No) {

                    }
                }
            }

            for (let b of resp.data) {
                bid=b.book_Id;
            }
            let split =  bid.split('-');
            let num =(+split[1])+1;
            bookIdd=('BID-' + (String(num).padStart(3,'0')));
        }
    });
}

// generatePayId();
let payIdd;
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
            payIdd=('PID-' + (String(num).padStart(3,'0')));
        }
    });
}


function getTotalKm() {
    for (var i = 0; i < bookingDetails.length; i++) {
        let registrationNo = bookingDetails[i];
        $.ajax({
            url: "http://localhost:8080/Back_End_war/book?registrationNo=" + registrationNo,
            method: "get",
            success: function (resp) {
                alert(resp.message);//for check
                for (let book of resp.data) {
                    total_KM.push(book.total_KM);
                    maintain_Status.push(book.maintain_Status);
                }
            }
            ,
            error: function (error) {
                alert(error.responseJSON.message);
                clearLoginInputFields();
            }
        });
    }
}

function clearDataAddBook(){

}