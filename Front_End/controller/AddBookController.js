function driverCheckBoxSet() {
    $(".drivercheck").click(function () {
        var x = $(this).is(':checked');
        if (x == true) {
            $("#btnConfirm").prop("disabled", true);
            $(".divSix").css("visibility", "visible");
        } else {
            $("#btnConfirm").prop("disabled", false);
            $(".divSix").css("visibility", "hidden");
        }
    });
}


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
                    }
                }
            }
            driverCheckBoxSet();
            addBookValidation();
            locationValidation();
        }
        ,error:function (error){
         alert(error.responseJSON.message);
          $("#addBook>section>div>div").empty();
         console.log(error);
      }
    });
}


$("#btnConfirm").click(function() {
    paymentPage();
});

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