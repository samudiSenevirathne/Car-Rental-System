function bankSlip() {
    $(document).ready(function () {
        $(".bankSlipImage").on("change", function () {
            const files = this.files;
            if (files.length > 0) {
                $(".bankSlipImageShow").attr("src", URL.createObjectURL(files[0]));
            }
        });
    });
}

function setPayment() {
    $("#addPayment>section>section>section").css('width', '100%');
    let originalWidthNext = $("#addPayment>section>section>section").css("width")
    let originalWidthOnlyNumNext = parseFloat(originalWidthNext);
    let WidthNext = originalWidthOnlyNumNext * bookingDetails.length;
    $("#addPayment>section>section>section").css('width', WidthNext);

    for (var i = 0; i < arra.length; i++) {
        let div = `<form>
                  <h1>Payment   :  ${arra[i].registration_No}</h1>
                  <div>
                      <div>
                          <h1>Loss Damage Waiver : </h1>
                          <h1>${arra[i].loss_Damage_Waiver}</h1>
                          <h1>Renal Fee : </h1>         <!--According day count get calculate in js and show-->
                          <h1>${arra[i].rental_Fee}</h1>
                      </div>
                      <aside></aside>
                      <div>
                          <h1>Amount : </h1>
                          <h1>${arra[i].loss_Damage_Waiver + arra[i].rental_Fee}</h1>
                      </div>
                      <aside></aside>
                      <aside></aside>
                 </div>
                  <div>
                      <div>
                      <label class="form-label bankSlipImageId">Bank Slip</label>
                      <input type="file" class="form-control bankSlipImage" accept="image/png, image/jpeg, image/jpg">
                      </div>
                      <div>
                      <img src="" class="form-control bankSlipImageShow" alt="Selected Image">
                      </div>
                  </div>
                  <div></div>
                  <div>
                      <div>
                         <h1>bank:sampath bank-panadura</h1>
                         <h1>Account Name:Easy car rental (pvt) Ltd</h1>
                         <h1>Account Number:1247654456776</h1>
                      </div>
                  </div>
            </form>     `

        $("#addPayment>section>section>section").append(div);

    }
    bankSlip();
}

$("#btnPayment").click(function() {
    saveBook();
});

function saveBook(){
    bookAll={
        "bookDetails":arra
    }
    $.ajax({
        url: "http://localhost:8080/Back_End_war/book",
        method: "post",
        contentType: "application/json",
        data: JSON.stringify(bookAll),
        success: function (resp) {
            alert(resp.message);
            console.log(resp);
            invoicePage();
            setInvoice();
            // clearData();
            // clearDataAddBook();
        }
        ,
        error: function (error) {
            alert(error.responseJSON.message);
            //  clearDataAddBook();
            // clearData();
        }
    });


}

function invoicePage(){
    $("#header").css('display', 'block');
    $("#homeContent").css('display', 'none');
    $("#login").css('display', 'none');
    $("body").css('height', 'calc(100vh * 1)');
    $("#addCus").css('display', 'none');
    $("#afterLoggingBook").css('display', 'none');
    $("#addBook").css('display', 'none');
    $("#addPayment").css('display', 'none');
    $("#invoice").css('display', 'block');
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