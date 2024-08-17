btn = document.querySelector("#btn-theme-toggle")

btn.addEventListener("click", function(){
    let pageTheme = document.getElementById("theme-link");
    let styleTheme = document.getElementById("style-theme-link");

    if (styleTheme.getAttribute("href") == "/style/white-theme/style.css"){
        styleTheme.setAttribute("href", "/style/black-theme/style.css");
        pageTheme.setAttribute("href","/style/black-theme/index.css");
    }
    else{
        styleTheme.setAttribute("href", "/style/white-theme/style.css");
        pageTheme.setAttribute("href","/style/white-theme/index.css");
    }
})