//Funktion för att toggla synligheten av dropdownmenyn, och för att transformera meny-knappen
function show(x){
    x.classList.toggle("toggle");
    document.getElementById("mydropdown").classList.toggle("show")
}
function show_uppgifter(x){
    x.classList.toggle("toggle");
    document.getElementById("uppgifter_hidden").classList.toggle("uppgifter_shown")
}
