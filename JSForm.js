<!DOCTYPE html>

<html>

<head>

<script>

function validateForm() {

  let x = document.forms["myForm"]["fname"].value;

  if (x == "") {

    alert("Please enter your Name");

    return false;

  }

}

</script>

</head>

<body>

<h2>JavaScript Test Validation</h2>

<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">

  Enter Name: <input type="text" name="fname">

  <input type="submit" value="Submit">

</form>

</body>

</html>
