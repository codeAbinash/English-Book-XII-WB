//if the value is undefined set value system
if(!(localStorage.darkModeEnabledMindScapes))
    localStorage.darkModeEnabledMindScapes = "system";


localStorage.darkModeEnabledMindScapes = "light";
var root = document.querySelector(":root")
//true - dark mode on
//false - dark mode off
//system - system dark/light
//if(localStorage.darkModeEnabledMindScapes=="true")



var currentTheme = localStorage.darkModeEnabledMindScapes;
if(currentTheme=="light")
    applyLightTheme();
else if(currentTheme=="dark")
    applyDarkTheme();
else if(currentTheme=="system"){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches)
        applyDarkTheme();
    else
        applyLightTheme();
}





function applyDarkTheme(){
    root.style.setProperty('--main-theme-color', 'black');
    root.style.setProperty('--main-text-color', 'white');
    root.style.setProperty('--card-color', '#111');
    root.style.setProperty('--theme-icon', 'invert(1)');
    root.style.setProperty('--shadow-color', '#ffffff44');
    root.style.setProperty('--color', '#4ea6fd');
    root.style.setProperty('--sub-text-color', '#ccc');
    root.style.setProperty('--sub-text-color2', '#ccc');
    root.style.setProperty('--backdrop', '#00000088');
    root.style.setProperty('--backdrop-light', '#000000bb');
    root.style.setProperty('--backdrop-light2', '#000000aa');
    root.style.setProperty('--shadow-color-light', '#ffffff20');
    root.style.setProperty('--grid-border-color', '#555');
}
function applyLightTheme(){
    root.style.setProperty('--main-theme-color', 'white');
    root.style.setProperty('--main-text-color', 'black');
    root.style.setProperty('--card-color', 'white');
    root.style.setProperty('--theme-icon', 'invert(-1)');
    root.style.setProperty('--shadow-color', '#00000020');
    root.style.setProperty('--color', 'dodgerBlue');
    root.style.setProperty('--sub-text-color', '#777');
    root.style.setProperty('--sub-text-color2', '#aaa');
    root.style.setProperty('--backdrop', '#ffffff88');
    root.style.setProperty('--backdrop-light', '#ffffff88');
    root.style.setProperty('--backdrop-light2', '#ffffffcc');
    root.style.setProperty('--shadow-color-light', '#eee');
    root.style.setProperty('--grid-border-color', '#ccc');

}