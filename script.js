var spanTip = document.getElementById("server-tip");
var spanTotal = document.getElementById("total");
var divSlider = document.getElementById("slider-val");
var percentage = document.getElementById("percentage");
var userBill = document.getElementById("user-bill");
var userSplit = document.getElementById("user-split");

function sum() {
    var serverTip = percentage.value / 100 * userBill.value;
    parseInt(userBill.value) + serverTip;    
    divSlider.innerText = percentage.value + "%";
    spanTip.innerText = "£" + parseFloat(serverTip);
    spanTotal.innerText = "£" + (parseInt(userBill.value) + serverTip) / userSplit.value;
}
