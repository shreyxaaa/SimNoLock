<!DOCTYPE html>
<html>
<head>
    <title>User Details Form</title>
</head>
<body>

<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    $email = $_POST["email"];
    $phone_number = $_POST["phone_number"];

    // Format the data as a string
    $user_details = "First Name: " . $first_name . "\n" .
                    "Last Name: " . $last_name . "\n" .
                    "Email: " . $email . "\n" .
                    "Phone Number: " . $phone_number . "\n";

    // Open the file in append mode and save the user details
    $file = fopen("user_details.txt", "a");
    fwrite($file, $user_details);
    fclose($file);

    echo "<h3>Thank you for submitting the form!</h3>";
    echo "<p>Your details have been collected and saved.</p>";
}
?>

<h2>User Details Form</h2>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
    <label for="first_name">First Name:</label>
    <input type="text" id="first_name" name="first_name" required><br><br>

    <label for="last_name">Last Name:</label>
    <input type="text" id="last_name" name="last_name" required><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br><br>

    <label for="phone_number">Phone Number:</label>
    <input type="text" id="phone_number" name="phone_number" required><br><br>

    <input type="submit" value="Submit">
</form>

</body>
</html>
