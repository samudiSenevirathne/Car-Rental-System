$("#loginForm > h1:nth-child(9)").hover(function() {
    $("#loginForm > div:nth-child(10)").css("visibility", "visible");
}, function() {
    $("#loginForm > div:nth-child(10)").css("visibility", "hidden");
});

$("#loginForm>h1:nth-child(9)").click(function() {
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

    const passwordField1 = $('#exampleInputPassword1');
    const togglePassword1 = $('#togglePassword1');
    const eyeIcon1 = $('#eyeIcon1');

    togglePassword1.click(function() {
        if (passwordField1.attr('type') === 'password') {
            passwordField1.attr('type', 'text');
            eyeIcon1.removeClass('fa-solid fa-eye').addClass('fa-solid fa-eye-slash');
        } else {
            passwordField1.attr('type', 'password');
            eyeIcon1.removeClass('fa-solid fa-eye-slash').addClass('fa-solid fa-eye');
        }
    });