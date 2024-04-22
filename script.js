const sentences = [
    
    "I labyuuu beri berii mats lodicakes q",
    "I miss u beri berii matss",
    "Na mimiss na kitaa sobra sobra",
    "Na aappreciate kita lodicakes, sobra sobra",
    "Salamat sa lahat ng ginagawa mo",
    "Thank you for existing luvs",
    "Love kita lods",
    ];
    
    function flashSentence() {
        const randomIndex = Math.floor(Math.random() * sentences.length);
        const sentenceElement = document.getElementById("sentence");
        sentenceElement.innerHTML = sentences[randomIndex];
        sentenceElement.classList.add("show"); 
        setTimeout(() => {
            sentenceElement.classList.remove("show"); 
        }, 3000);
    }
    
    
    setInterval(flashSentence, 4000);
    
    window.addEventListener('load', function() {
        flashSentence();
    });
    
    
    
