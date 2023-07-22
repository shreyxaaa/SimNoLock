<!DOCTYPE html>
<html>
<head>
    <title>User Details Form</title>
</head>
<body>
    <h1>User Details Form</h1>
    <form action="process_form.php" method="post">
        <label for="firstName">First Name:</label>
        <input type="text" name="firstName" id="firstName" required><br>

        <label for="lastName">Last Name:</label>
        <input type="text" name="lastName" id="lastName" required><br>

        <label for="email">Email:</label>
        <input type="email" name="email" id="email" required><br>

        <label for="phone">Phone Number:</label>
        <input type="tel" name="phone" id="phone" required><br>

        <input type="submit" value="Submit">
    </form>
</body>
</html>
