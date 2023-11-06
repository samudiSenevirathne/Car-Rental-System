function setInvoice() {
    $("#panelInvoiceForm>section").css('width', '100%');
    let originalWidthNext = $("#panelInvoiceForm>section").css("width")
    let originalWidthOnlyNumNext = parseFloat(originalWidthNext);
    let WidthNext = originalWidthOnlyNumNext * bookingDetails.length;
    $("#panelInvoiceForm>section").css('width', WidthNext);

    for (var i = 0; i < arra.length; i++) {
        let div = `  <div>
                    <div>
                        <h1>Invoice</h1>
                    </div>
                    <div>
                        <div>
                         <h1>Your Booking Number :  ${arra[i].bookId}</h1>
                         <h1>vehicle Name  :  ${arra[i].registration_No}</h1                
                         <h1>Booking End Date : ${arra[i].end_Date}</h1>
                          <h1>Booking Start Date : ${arra[i].start_Date}</h1>
                         <h1>Your NIC : ${arra[i].nic_No_Cus}</h1>   
                         <h1>Your Payment : ${arra[i].loss_Damage_Waiver + arra[i].rental_Fee}</h1>
                        </div>
                        <div>
                        <div></div>
                        </div>
                    </div>
                    </div>`

        $("#panelInvoiceForm>section").append(div);

    }

}