<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['your-name'];
    $email = $_POST['your-email'];
    $message = $_POST['your-message'];
    
    $to = "charlie@thetechiemedia.in"; // Replace with your email address
    $subject = "New form submission from your website";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    
    // Send the email
    if (mail($to, $subject, $body)) {
        // Email sent successfully, you can redirect to a "Thank You" page if desired
        header("Location: thank_you_page.html");
        exit;
    } else {
        // Handle email sending failure
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
