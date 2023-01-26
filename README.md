# Angular Ogtag with php

I was trying to set OG Tags that can be used by FB, whatsapp etc., without full SSR.  

## How to
### Rename index.html file
Rename index.html to index.php 

### Setup webpack configs
* Install [@angular-builders/custom-webpack](https://www.npmjs.com/package/@angular-builders/custom-webpack/v/latest) (Just make sure you use the right versions)
* Create a file **extra-webpack.config.js** with the following code  
```
module.exports = {
    devServer: {
      devMiddleware: {
        mimeTypes: {                                                                                                                          
          'php': 'text/html',                                                                                         
        }  
      },
    },
};
```
* In **angular.json** file, make the following changes  
under architect -> build change the builder
```
"builder": "@angular-builders/custom-webpack:browser",
```
under architect -> build -> options add *customWebpackConfig* and also modify *index* to use php file
```
"customWebpackConfig": {
              "path": "./extra-webpack.config.js"
},
"index": "src/index.php",
```
under architect -> build -> configurations -> production, add 
```
 "optimization": {  
    "styles": {
        "inlineCritical": false
    }
    }
```
The above step is required to prevent HTML tags from being commented out. If you dont want to add this, you may have to manually uncomment each time after build.  
under architect -> serve change the builder
```
"serve": {
...
"builder": "@angular-builders/custom-webpack:dev-server",
...

```

### Writing the php functions
Add a folder named *php-includes* and add all support functions. Make sure to add a .htaccess file with the line `Deny from all`. This will prevent anyone from accessing the files directly from browser. Import files in **index.php** and call the functions.   
In **angular.json**  add the folder to assets array
```
"assets": [
    ...
    "src/php-includes"],
```


## Limitations
* Can be used to set only headers. Content itself will not be prerendered.  
* Needs a server with PHP setup.
* It will not work in dev server. You may thry something like `http-server-php`


## Versions
[Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.   

