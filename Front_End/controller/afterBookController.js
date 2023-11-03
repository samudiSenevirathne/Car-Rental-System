$("#btnBooking").prop("disabled", true);
$(".type").click(function () {
    let type = "";
    if ($(this).attr('id') === 'General') {
        type = 'General';
    } else if ($(this).attr('id') === 'Premium') {
        type = 'Premium';
    } else if ($(this).attr('id') === 'Luxury') {
        type = 'Luxury';
    }
    $.ajax({
        url: "http://localhost:8080/Back_End_war/car?type=" + type,
        method: "get",
        success: function (resp) {
            console.log(resp.message);
            $("#panelAfterBookAside2>aside").empty();
            $("#AfterBookDetail>section").empty();
            $("#panelAfterBookAside2>aside").css('width', 'calc(100% * 0.3)' );
            let countWidth=0;
            for (let car of resp.data) {
                countWidth++;
            }
            let originalWidth=$("#panelAfterBookAside2>aside").css("width")
            let originalWidthOnlyNum=parseFloat(originalWidth);
             let width = originalWidthOnlyNum * countWidth;
            $("#panelAfterBookAside2>aside").css('width',width );
            let sameBrands = [];
            for (let car of resp.data) {
                if (!sameBrands.includes(car.brand)) {
                    let h1 = `<h1>${car.brand}</h1>`;
                    $("#panelAfterBookAside2>aside").append(h1);
                    sameBrands.push(car.brand);
                }
            }
            loadDetails();
        },
        error: function (error) {
            alert(error.responseJSON.message);
            $("#panelAfterBookAside2>aside").empty();
            $("#AfterBookDetail>section").empty();
            console.log(error);
        }
    });
});


function loadDetails() {
    $("#panelAfterBookAside2>aside").on('click', 'h1', function () {
        let brand = $(this).text();
            $.ajax({
                url: "http://localhost:8080/Back_End_war/car?brand=" + brand,
                method: "get",
                success: function (resp) {
                    console.log(resp.message);
                    $("#AfterBookDetail>section").empty();
                    $("#AfterBookDetail>section").css('height', '50%');
                    let countHeightNext = 0;
                    for (let car of resp.data) {
                        countHeightNext++;
                    }
                    let originalHeightNext = $("#AfterBookDetail>section").css("height")
                    let originalHeightOnlyNumNext = parseFloat(originalHeightNext);
                    let HeightNext = originalHeightOnlyNumNext * countHeightNext;
                    $("#AfterBookDetail>section").css('height', HeightNext);
                    for (let car of resp.data) {
                        let div = `<div>
                       <img src="${car.front_View}">
                        <div>
                            <div>
                                <div>
                                <h1>Brand  :  ${car.brand}</h1>
                                <h1>seat   :  ${car.passenger_Count}</h1>
                                <h1>Fuel   :  ${car.fuel_Type}</h1>
                                <h1>NumberPlate  :  ${car.registration_Number}</h1>
                                <h1>Color  :  ${car.color}</h1>
                                <h1>Transmission  :  ${car.transmission_Type}</h1>
                                <h1>DailyRate   :  ${car.rent_Price_Day}</h1>
                                <h1>MonthlyRate  :  ${car.rent_Price_Month}</h1>
                                <h1>ExtraKmPrice  :  ${car.price_Extra_Km}</h1>
                                </div>
                                <div>
                                    <label class="form-check-label">Select</label>
                                    <input class="form-check-input gridCheck1" onclick="pushBook();" type="checkbox">
                                </div>
                            </div>
                            <div>
                                  <img src="${car.front_View}">
                                  <img src="${car.back_View}">
                                  <img src="${car.side_View}">
                                   <img src="${car.interior}">
                            </div>
                        </div>
                    </div>`
                        $("#AfterBookDetail>section").append(div);
                    }
                },
                error: function (error) {
                    alert(error.responseJSON.message);
                    $("#AfterBookDetail>section").empty();
                    console.log(error);
                }
            });
        });
}

function pushBook() {
    let forBook = [];
    var x=$('.gridCheck1').is(':checked');
    if(x==true) {
        forBook.push(car.registration_Number);
        $("#btnBooking").prop("disabled", false);
    }
}