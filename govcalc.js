function setGovName(getButtonClass){

    

    let buttonText = getButtonClass.textContent;

    let govText = document.getElementById("gov").textContent;

    const buttonArr = buttonText.split(": ");

    var buttonClassText = buttonArr[0]+"-";

    if(!govText.includes(buttonClassText)){
        
            getButtonClass.style.border = "solid green";
        
        document.getElementById("gov").append(buttonClassText);

        setSeats( parseInt(buttonArr[1], 10) );
        
        

    }else if(govText.includes(buttonClassText)) {
        
        getButtonClass.style = null;
        

        govText = govText.replace(buttonClassText,'');

        document.getElementById("gov").innerHTML = govText;
        removeSeats( parseInt(buttonArr[1] , 10) );
    }

    var seats = parseInt(document.getElementById("numSeats").innerText, 10);
    if(seats <121){
        document.getElementById("numSeats").style.color = "red";
    }else{
        document.getElementById("numSeats").style.color = "green";

    }
}


function clearGovData(){
    document.getElementById("gov").innerHTML = "Правителство:";
    document.getElementById("numSeats").innerHTML = "0";

}

function setSeats(seats){
    var currSeats = parseInt( document.getElementById("numSeats").textContent , 10);
    currSeats = currSeats + seats;
    document.getElementById("numSeats").innerHTML = currSeats;

}
function removeSeats(seats){
    var currSeats = parseInt( document.getElementById("numSeats").textContent , 10);
    currSeats = currSeats - seats;
    document.getElementById("numSeats").innerHTML = currSeats;

}


function printText(){
    
}

printText();