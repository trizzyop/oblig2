function selectBar(barNo){
    // denne skal velge stolpe
    // stroke="black"
    if(chosenBar == barNo){
        chosenBar = null
    } else {
        chosenBar = barNo
    }
    show()
}

function addStolpe(inputValue){
    // legge til stolpe
    if (inputValue >0 && inputValue <=10) { 
        numbers.push(inputValue)
        show()
    }
    
}

function delStolpe(){
    // slett stolpe
    let temp = (chosenBar -1);
    numbers.splice(temp, 1)
    show()
}

function editStolpe(){
    // endre stolpe
    if (inputValue >0 && inputValue <=10) { 
        numbers[chosenBar -1] = inputValue
    } else{
        alert('du har skrivet feil tall')
        
    }
    show()
}
