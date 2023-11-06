home();
function home() {
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
    $("#addMng").css('display', 'none');
    $("#managerPath").css('display', 'none');
    $("#footer").css('display', 'block');
}

var type="";

$("#home").click(function () {
    if ($("#home>a").text() == "Dashboard") {
        managerAfterLoginBasic();
    }else{
        home();
    }
});

$("#customer").click(function () {
    if ($("#customer>a").text() == "Car") {
        $("#btnAddCar").prop("disabled", true);
        carPage();
    }else if($("#customer>a").text() == "Booking") {
            bookHandle();
    }else if($("#customer>a").text() == "Schedule") {
           viewSchedule();
    }else {
        type = "customer";
        $("#panal > h1:nth-child(1)").text('Car Rentals - Customer Panel');
        $("#panalAddCus > h1:nth-child(2)").text('Get Started by creating customer account');
        $("#customerLicenseNumber,#customerLicenseFile,#customerLicenseImageShow").css("visibility", "visible");
        same();
    }
});

$("#employee").click(function () {
    if ($("#employee>a").text() == "Maintenance") {
        viewManagerPath();
        maintenaceGo();
    }else if($("#employee>a").text() == "MyBook") {
        bookMy();
    }else if ($("#employee>a").text() == "Logout") {
             $("#home>a").text('Home');
             $("#customer>a").text('Customer');
            $("#employee>a").text('Employee');
            $("#driver>a").text('Driver');
            home();
    }else {
        type = "employee";
        $("#panal > h1:nth-child(1)").text('Car Rentals - Employee Panel');
        $("#panalAddCus > h1:nth-child(2)").text('Get Started by creating employee account');
        $("#customerLicenseNumber,#customerLicenseFile,#customerLicenseImageShow").css("visibility", "hidden");
        same();
    }
});

$("#driver").click(function () {
    if ($("#driver>a").text() == "Logout") {
        $("#home>a").text('Home');
        $("#customer>a").text('Customer');
        $("#employee>a").text('Employee');
        $("#driver>a").text('Driver');
        home();
    }else if ($("#driver>a").text() == "F&Q") {
        $("#driver>a").prop("disabled", true);
    }else {
        type = "driver";
        $("#panal > h1:nth-child(1)").text('Car Rentals - Driver Panel');
        $("#panalAddCus > h1:nth-child(2)").text('Get Started by creating driver account');
        $("#customerLicenseNumber,#customerLicenseFile,#customerLicenseImageShow").css("visibility", "visible");
        same();
    }
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
    $("#addMng").css('display', 'none');
    $("#managerPath").css('display', 'none');
    $("#footer").css('display', 'block');
}


    var count1 = 0;
    $("section>section>section>div>div:nth-child(4)").click(function () {
        count1++;
        if (count1 == 1) {
            $("section>section>section>div>div:nth-child(3)").css("visibility", "visible");
            $("section>section>section>div>div:nth-child(4)").css("bottom", "-160px");
        } else if (count1 == 2) {
            $("section>section>section>div>div:nth-child(3)").css("visibility", "hidden");
            $("section>section>section>div>div:nth-child(4)").css("bottom", "-39px");
            $("#header").css('display', 'block');
            $("#homeContent").css('display', 'none');
            $("#login").css('display', 'none');
            $("body").css('height', 'calc(100vh * 1.3)');
            $("#addCus").css('display', 'none');
            $("#afterLoggingBook").css('display', 'block');
            $("#addBook").css('display', 'none');
            $("#addPayment").css('display', 'none');
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
            count1 = 0;
        }
    });

function bookHandle() {
    $("#header").css('display', 'block');
    $("#homeContent").css('display', 'none');
    $("#login").css('display', 'none');
    $("body").css('height', 'calc(100vh * 1.3)');
    $("#addCus").css('display', 'none');
    $("#afterLoggingBook").css('display', 'block');
    $("#addBook").css('display', 'none');
    $("#addPayment").css('display', 'none');
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