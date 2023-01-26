<?php
function getOGTags($defaultTitle) {
  if(isset($_GET['ogdata'])) {
    // Probably you won't send the entire data in $_GET
    // rather fetch values from DB
    $decodedStr = base64_decode(urldecode($_GET['ogdata']),true);
    $imgData = json_decode($decodedStr, true);
    $domain = $_SERVER['HTTP_HOST'];
    if (isset($_SERVER['HTTPS']) &&
    ($_SERVER['HTTPS'] == 'on' || $_SERVER['HTTPS'] == 1) ||
    isset($_SERVER['HTTP_X_FORWARDED_PROTO']) &&
    $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https') {
        $protocol = 'https://';
    }
    else {
        $protocol = 'http://';
    }
    $url = $protocol . $domain . $_SERVER['REQUEST_URI'];
    return "
      <title>" .$imgData["title"] . "</title>
      <meta name='description' content='" .$imgData["description"] . "'>

      <meta property='og:title' content='" .$imgData["title"] . "' />
      <meta property='og:description' content='" .$imgData["description"] . "' />
      <meta property='og:image' content='" .$imgData["imgurl"] . "' />
      <meta property='og:type' content='website'>
      <meta property='og:url' content='".$url."'>

      <meta name='twitter:card' content='summary_large_image'>
      <meta property='twitter:title' content='" .$imgData["title"] . "' />
      <meta property='twitter:description' content='" .$imgData["description"] . "' />
      <meta property='twitter:image' content='" .$imgData["imgurl"] . "' />
      <meta property='twitter:url' content='".$url."'>
      <meta property='twitter:domain' content='".$domain."'>
    ";
    }
    return '<title>'.$defaultTitle.'</title>';
}
?>