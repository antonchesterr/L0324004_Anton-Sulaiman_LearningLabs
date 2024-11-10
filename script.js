// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const nav = document.querySelector("nav");

  mobileMenuButton.addEventListener("click", function () {
    const mobileMenu = document.createElement("div");
    mobileMenu.className = "mobile-menu active md:hidden";
    mobileMenu.innerHTML = `
          <a href="index.html" class="block py-2">Beranda</a>
          <a href="content.html" class="block py-2">Market</a>
          <a href="feedback.html" class="block py-2">Feedback</a>
      `;

    const existingMenu = document.querySelector(".mobile-menu");
    if (existingMenu) {
      existingMenu.remove();
    } else {
      nav.appendChild(mobileMenu);
    }
  });
});

// Feedback form handling
const feedbackForm = document.getElementById("feedbackForm");
if (feedbackForm) {
  feedbackForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(feedbackForm);
    const data = Object.fromEntries(formData);

    // Show success message
    alert("Terima kasih atas feedback Anda!");
    feedbackForm.reset();
  });
}

// Random price updates for demo purposes
function updatePrices() {
  const priceElements = document.querySelectorAll(".crypto-price");
  priceElements.forEach((element) => {
    const currentPrice = parseFloat(
      element.textContent.replace("$", "").replace(",", "")
    );
    const change = (Math.random() - 0.5) * 100;
    const newPrice = currentPrice + change;
    element.textContent =
      "$" +
      newPrice.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  });
}

// Update prices every 5 seconds
setInterval(updatePrices, 5000);
