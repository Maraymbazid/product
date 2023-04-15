
        let productinfo = document.getElementById("productinfo");
        let buttonn = document.getElementById("adder");
        var notificationCounter = 0;
        buttonn.addEventListener("click", function(){
            var valeur =productinfo.value;
            var table = document.getElementById("dataTable");
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            cell1.innerHTML = valeur;
            notificationCounter++;
            var mySpan = document.getElementById("notificationCounter");
            mySpan.innerHTML  = notificationCounter;
        }); 