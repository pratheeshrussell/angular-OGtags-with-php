<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Angular Ogtag - PHP</title>
  <base href="/">
  <?php
    require __DIR__ . '/php-includes/getOgTags.php';
    echo getOGTags(); 
  ?>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
