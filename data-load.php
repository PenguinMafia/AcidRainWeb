<html>
<head>
  <?php
   include 'res/head.php';
  ?>
  <?php
   include 'res/nav.php';
  ?>
<title>Pigeon - Data</title>
<script type="text/javascript">
function doSomethingWithTextBox()
{
  var textBox = document.getElementById('TEXTBOX_ID');
  // do something with it ...

}

</script>
<script src="commie/predict.txt" type="text/javascript"></script>
</head>
<body>

  <div class="container text-center">

    <h1 style="margin-top:20px;">Houston, Texas, USA</h1>
    <hr/>
    <div class="row special-row text-left" style="text-align:center;
    display: flex;">

<div class="col-md-6 text-left">
  <h1>Data for Houston, Texas</h1>
  <div class="row">
  <p><b>pH</b>:  <p id="#ph">xxx</p>
  <p><b>Location</b>:  <p id="#loc"></p>
  <p><b>Days in future</b>:  <p id="#day">xxx</p></p>
  <p><b>Amount of Acid Rain predicted</b>:  <p id="#amt">xxx</p>
</div>

<script>
  var x = document.getElementById('#ph');
  x.innerHTML = "5.7";

  var bob = document.getElementById('#amt');
  bob.innerHTML = result;

</script>
</div>
</div>
<input type="text" id="TEXTBOX_ID"> <p># of Days in the future</p>
<a class="btn btn-primary">Predict!</a>
<hr class="style18"/>
</div>


  <!--<pre class="thin"><code style="color:green">
    // a simple Scanner Tutorial
  </code>
  <code style="color:orange;">Scanner</code> <code style="color:white;">bob =</code> <code style="color:red;">new</code> <code style="color:orange;">Scanner</code>
  </code></pre>

  <pre class="thin" style="width:300px;"><code style="color:rgb(32, 150, 185)">
    #bash </code>
    <code style="color:white;">sudo apt install nginx</code>
</pre>
-->
<?php
 include 'res/cdn.php';
?>
</body>
</html>
