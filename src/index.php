<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <base href="/">
  <?php
    require __DIR__ . '/php-includes/getOgTags.php';
    $defaultTitle = "Angular Ogtag - PHP";
    echo getOGTags($defaultTitle); 
  ?>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
