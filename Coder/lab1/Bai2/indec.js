document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(event.target);

    // Process the form data (e.g., send it to the server via AJAX)
});