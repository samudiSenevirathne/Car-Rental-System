$("#loginForm > h1:nth-child(8)").hover(function() {
    $("#loginForm > div:nth-child(9)").css("visibility", "visible");
}, function() {
    $("#loginForm > div:nth-child(9)").css("visibility", "hidden");
});

$("#loginForm>h1:nth-child(8)").click(function() {
    $("#header").css('display', 'block');
    $("#homeContent").css('display', 'none');
    $("#login").css('display', 'none');
    $("body").css('height', 'calc(100vh * 2)');
    $("#addCus").css('display', 'block');
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
});

