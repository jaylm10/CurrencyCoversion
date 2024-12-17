let arr = {
    USD:84.81,
    EUR:88.91,
    GBP:107.02,
    AUD:53.83,
    CAD:59.49
}

let catagory = document.getElementById("catagory")
catagory.addEventListener("change",()=>{
    let selectedValue = catagory.value.toUpperCase();
    let main  = document.querySelector(".main");

    if(arr[selectedValue]){
        main.innerHTML = `1 ${selectedValue} = ${arr[selectedValue]} INR `
    } 
}) 