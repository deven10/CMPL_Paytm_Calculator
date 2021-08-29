
//Variables declaration
let vendorPrice = document.querySelector("#vendorprice");
let percentage = document.querySelector("#percentage");
let shippingamount = document.querySelector("#shippingamount");
let sellingprice = document.querySelector("#sellingprice");


//Button declaration
let btnwithGST = document.querySelector("#btnwithGST");
let btnwithoutGST = document.querySelector("#btnwithoutGST");

//outputs declaration
let withGST = document.querySelector("#withgst");
let paytmfees = document.querySelector("#paytmfees");
let ourprofit = document.querySelector("#ourprofit");


btnwithGST.addEventListener("click", () => {
   let vP = +vendorPrice.value;
   let percent = +percentage.value;
   let shipamt = +shippingamount.value;
   let sellprice = +sellingprice.value;
   let closingFee = +15;

   withGST.innerHTML = "";

   //calculating tds 1 percent of sell price
   const tds = +(sellprice*0.01);
   let tdswithoutgst = +((tds/118)*100).toFixed(2);
   
   //calculating paytm fees
   let fees = +((sellprice*percent)/100);

   // calculating GST amount
   let a = ((closingFee*118)/100);
   let aa = +(a - closingFee);
   let b = ((fees*118)/100);
   let bb = +(b - fees);
   let c = ((shipamt*118)/100);
   let cc = +(c - shipamt);
   let gst = aa + bb +cc;

   //total deductions
   let deductions = (closingFee + tdswithoutgst + fees + shipamt + gst).toFixed(2);
   paytmfees.innerHTML = deductions;

   //paytm profit
   let paytmProfit = sellprice - deductions;

   //actual profit
   let profit = (paytmProfit - vP).toFixed(2);
   ourprofit.innerHTML = profit;
})

btnwithoutGST.addEventListener("click", () => {
    
    //outputting vendor's gst amount..
    let vP = +vendorPrice.value;
    const  value = +((vP*18)/100);
    const  gstValue = (vP + value).toFixed(2);
    withGST.innerHTML = gstValue;

   let percent = +percentage.value;
   let shipamt = +shippingamount.value;
   let sellprice = +sellingprice.value;
   let closingFee = +15;

   //calculating tds 1 percent of sell price
   const tds = +(sellprice*0.01);
   let tdswithoutgst = +((tds/118)*100).toFixed(2);
   
   //calculating paytm fees
   let fees = +((sellprice*percent)/100);

   // calculating GST amount
   let a = ((closingFee*118)/100);
   let aa = +(a - closingFee);
   let b = ((fees*118)/100);
   let bb = +(b - fees);
   let c = ((shipamt*118)/100);
   let cc = +(c - shipamt);
   let gst = aa + bb +cc;

   //total deductions
   let deductions = (closingFee + tdswithoutgst + fees + shipamt + gst).toFixed(2);
   paytmfees.innerHTML = deductions;

   //paytm profit
   let paytmProfit = sellprice - deductions;

   //actual profit
   let profit = (paytmProfit - gstValue).toFixed(2);
   ourprofit.innerHTML = profit;
})

