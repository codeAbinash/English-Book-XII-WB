$d = {};
$d.openPage = function(loc,type="left",time=200){
    switch (type) {
        case "top-right":
            document.body.style.transform="translateX(-100vw) translateY(100vh)";
            break;
        case "top-left":
            document.body.style.transform="translateX(100vw) translateY(100vh)";
            break;
        case "bottom-left":
            document.body.style.transform="translateX(-100vw) translateY(-100vh)";
            break;
        case "bottom-right":
            document.body.style.transform="translateX(100vw) translateY(-100vh)";
            break;
        case "bottom":
            document.body.style.transform="translateY(-100vh)";
            break;
        case "top":
            document.body.style.transform="translateY(100vh)";
            break;
        case "right":
            document.body.style.transform="translateX(-100vh)";
            break;
        case "left":
            document.body.style.transform="translateX(100vh)";
            break;
        default:
            break;
    }
    setTimeout(() => {window.location.assign(loc);}, time);
}