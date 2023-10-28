$("#header").css('display', 'block');
$("#homeContent").css('display', 'block');
$("#login").css('display', 'none');
$("body").css('height', 'calc(100vh * 4)');
$("#addCus").css('display', 'none');
$("#afterLoggingBook").css('display', 'none');
$("#addBook").css('display', 'none');
$("#addPayment").css('display', 'none');
$("#invoice").css('display', 'none');
$("#bookingTableCustomer").css('display', 'none');
$("#workScheduleDriver").css('display', 'none');
$("#managerDashBoard").css('display', 'none');
$("#addCar").css('display', 'none');
$("#addMaintenance").css('display', 'none');
$("#addDamageService").css('display', 'none');
$("#footer").css('display', 'block');

$("#customer").click(function () {
    $("#panal > h1:nth-child(1)").text('Car Rentals - Customer Panel');
    same();
});

$("#employee").click(function () {
    $("#panal > h1:nth-child(1)").text('Car Rentals - Employee Panel');
    same();
});

$("#driver").click(function () {
    $("#panal > h1:nth-child(1)").text('Car Rentals - Driver Panel');
    same();
});

function same() {
    $("#header").css('display', 'block');
    $("#homeContent").css('display', 'none');
    $("#login").css('display', 'block');
    $("body").css('height', 'calc(100vh * 1)');
    $("#addCus").css('display', 'none');
    $("#afterLoggingBook").css('display', 'none');
    $("#addBook").css('display', 'none');
    $("#addPayment").css('display', 'none');
    $("#invoice").css('display', 'none');
    $("#bookingTableCustomer").css('display', 'none');
    $("#workScheduleDriver").css('display', 'none');
    $("#managerDashBoard").css('display', 'none');
    $("#addCar").css('display', 'none');
    $("#addMaintenance").css('display', 'none');
    $("#addDamageService").css('display', 'none');
    $("#footer").css('display', 'block');
}

