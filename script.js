$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
        e.preventDefault(); // Prevent form from reloading
        $.post('submit.php', $(this).serialize(), function (response) {
            $('#registrationForm').hide();
            $('#successMessage').removeClass('hidden').hide().fadeIn(1000);
        });
    });
});
