function currencyConverter(valNum){
    if(converter.rupees.value <= 0)
    window.alert("Enter Value Greaterthan 0");
    else{
        document.getElementById("dollar").value = (valNum/158.93).toFixed(2);
        document.getElementById("yuan").value = (valNum/23.12).toFixed(2);
        document.getElementById("won").value = (valNum/0.14).toFixed(2);
    
        document.getElementById("dinar").value = (valNum/522.21).toFixed(2);
    }



}