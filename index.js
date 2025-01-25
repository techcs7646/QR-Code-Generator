document.getElementById("generate-btn").addEventListener("click", function () {
  let text = document.getElementById("text-input").value;
  if (text) {
    let qrCodeContainer = document.getElementById("qr-code");
    let apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
      text
    )}`;

    // Clear previous QR code
    qrCodeContainer.innerHTML = `<img id="qr-image" src="${apiUrl}" alt="QR Code">`;

    // Show download button
    document.getElementById("download-btn").style.display = "inline-block";
    document
      .getElementById("download-btn")
      .addEventListener("click", function () {
        let link = document.createElement("a");
        link.href = apiUrl;
        link.download = "qr-code.png";
        link.click();
      });
  } else {
    alert("Please enter text or URL to generate QR Code!");
  }
});
