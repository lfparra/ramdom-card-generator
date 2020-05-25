window.onload = function (){
   
    function randomCard () {
        let randomSuite = Math.ceil(Math.random()*4);
        let suite = "";

        switch(randomSuite){
            case 1:
                suite = "&hearts;";
                break;
            case 2:
                suite = "&diams;";
                break;
            case 3:
                suite = "&clubs;";
                break;
            case 4:
                suite = "&spades;";
                break;
        }
        console.log(suite);
        return suite;
    }

    let resultCard = randomCard();

    function randomCardNumber () {
        let randomNum = Math.ceil(Math.random()*13);
        let numberCard = "";

        switch(randomNum){
            case 11:
                numberCard = "J";
                break;
            case 12:
                numberCard = "Q";
                break;
            case 13:
                numberCard = "K";
                break;
            default:
                numberCard = randomNum
                break;
            
        }

        return numberCard;
    }

    let resultNumber = randomCardNumber();

    let cardHeader = document.querySelector(".card-header");
    let cardFooter = document.querySelector(".card-footer");
    let cardBody = document.querySelector(".card-body");

    
    if(resultCard == "&hearts;" || resultCard == "&diams;"){
        cardHeader.style.color = "red";
        cardHeader.innerHTML = resultCard;
        cardFooter.style.color = "red";
        cardFooter.innerHTML = resultCard;
        cardBody.style.color = "red";
        cardBody.innerHTML = resultNumber;
    } else {
        cardHeader.innerHTML = resultCard;
        cardFooter.innerHTML = resultCard;
        cardBody.innerHTML = resultNumber;
    }

}