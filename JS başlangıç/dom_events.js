const data = document.getElementById("inputText");
const clear = document.getElementById("temizle");
const submit = document.getElementById("gonder");
const options = document.getElementById("city");

options.addEventListener("change", function(e) {
    console.log(e.target.options[e.target.selectedIndex].text);
});

data.addEventListener("keypress", function(e) {
    console.log(e.key);
})

submit.addEventListener("click", function() {
    data.value = "sa"
});

clear.addEventListener("click", function() {
    data.value = "";
});



