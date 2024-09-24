const phone = document.getElementById('phone');

var i = [] ;

phone.addEventListener("keydown", (e) => {
    i.push(phone.value)
    console.log(i)
    if(e.key === "Backspace" || e.key === "Delete") return;
    if(e.target.value.length === 1) {
        phone.value = phone.value + "-";
    }
    if(e.target.value.length === 3) 
        phone.value = phone.value + "-";
    
    if(e.target.value.length === 5) {
        phone.value = phone.value + "-";
    }
    if(e.target.value.length === 7) {
        phone.value = phone.value + "-";
    }
})