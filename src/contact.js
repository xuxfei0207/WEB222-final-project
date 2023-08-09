document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission to perform validation

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const typeOfProperty = document.getElementById('typeOfProperty').value;
        const numOfBedrooms = document.getElementById('numOfBedrooms').value;
        const numOfBathrooms = parseInt(document.getElementById('numOfBathrooms').value, 10);
        const priceRange = document.getElementById('priceRange').value;
        const comments = document.getElementById('comments').value;

        // Regular expressions for validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        // Validation checks
        if (!firstName || !lastName || !phone || !email || !typeOfProperty || !numOfBedrooms || !numOfBathrooms || !priceRange) {
            alert('All fields are mandatory. Please fill in all required fields.');
            return;
        }

        if (!emailRegex.test(email)) {
            alert('Invalid email address.');
            return;
        }

        // If all validations pass, display confirmation message
        alert('Thanks for registering with our website, your customer record was created successfully!');
        form.reset(); // Optional: Reset the form after successful submission
    });
});
