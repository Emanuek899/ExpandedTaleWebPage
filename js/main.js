import { loadComponent } from "./components/loadComponent.js";

document.addEventListener("DOMContentLoaded", () =>{
    let path = window.location.pathname;

    if(path.endsWith("index.html")){
        loadComponent("header-container", "header.html");
        loadComponent("footer__container", "footer.html");
    }
});