export class AppSettings{
    static get apiKey(){
        return "API_KEY_FROM_UNSPLASH";
    };
    static get getRandomImageUrl(){
        return "https://api.unsplash.com/photos/random?client_id=";
    };
    static get shareBaseUrl(){
        const protocol = window.location.protocol + "//";
        const host = window.location.host + "/";
        const pathArray = window.location.pathname.split('/')
        .filter(pth=>pth!== "" && pth!== "image-gen").join("/");
        return protocol + (host + pathArray + '/image-link').replace(/\/\//g, "/");
    };
}