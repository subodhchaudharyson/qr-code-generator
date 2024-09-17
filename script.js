$(document).ready(function() {
    $('#generateBtn').click(function() {
        const qrText = $('#qrInput').val();
        if (qrText) {
            $('#qrCode').attr('src', '').hide(); // Clear previous QR code
            $('#downloadBtn').hide(); // Hide download button

            // Generate QR code
            $('#qrCodeContainer').empty();
            $('#qrCodeContainer').qrcode({
                text: qrText,
                width: 200,
                height: 200,
                render: "image"
            });

            // Set the QR code image source and show it
            const qrCodeImg = $('#qrCodeContainer img').attr('src');
            $('#qrCode').attr('src', qrCodeImg).show();
            $('#downloadBtn').attr('href', qrCodeImg).show();
        } else {
            alert("Please enter a text or URL.");
        }
    });
});