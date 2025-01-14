
    
    let cardSrc = ["/cards/images/AH.png", "/cards/images/2C.png", "/cards/images/8D.png", "/cards/images/10C.png", "/cards/images/4C.png"]
    const container = document.querySelector("#cardBoard") 
    
    cardSrc.forEach(card => {
        let toAdd = document.createElement('img');
        toAdd.src = card;
        toAdd.classList.add("card");
        container.appendChild(toAdd);  
    });
    
    function enlargeCard(event) {
        const allCards = document.querySelectorAll(".card");
        allCards.forEach(card => card.classList.remove('enlarged'));
        event.target.classList.add('enlarged');
    }
    
    container.addEventListener("click", function(event) {
        if (event.target.tagName === "IMG") {
            enlargeCard(event);
            console.log( event)
    
        }
    })





