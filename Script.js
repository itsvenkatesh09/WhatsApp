// JavaScript source code
function openWhatsapp() {
    var countryCode = document.getElementById("countryCode");
    var phoneNumber = document.getElementById("phoneNumber");
    window.open("https://api.whatsapp.com/send?phone=" + countryCode + phoneNumber);
}