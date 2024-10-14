function sendWhatsApp() {
    // جمع المعلومات من الحقول
    var productNumber = document.getElementById("product-number").value;
    var userName = document.getElementById("user-name").value;
    var userPhone = document.getElementById("user-phone").value;

    // نص الرسالة التي سيتم إرسالها
    var message = "مرحبا، أود طلب المنتج رقم: " + productNumber + "%0A" +
                  "اسمي: " + userName + "%0A" +
                  "رقم هاتفي: " + userPhone;

    // رابط WhatsApp مع الرسالة
    var whatsappUrl = "https://wa.me/رقم_الهاتف_مع_مفتاح_الدولة?text=" + message;

    // الانتقال إلى WhatsApp مع الرسالة المعبأة
    window.open(whatsappUrl, '_blank');
}