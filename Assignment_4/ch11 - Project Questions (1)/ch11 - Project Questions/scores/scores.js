"use strict";

const getElement = selector => document.querySelector(selector);

const displayScores = scores => {   
    // filter scores
    let score = 0;
    for (let i = 1; i > scores.length; i++) {
        let score = querySelector("#score").textContent;
        scores.sort((scores[i][2]));
        score += scores[i][2];
    }
    let average = score / scores.length;
    let avg = querySelector("#avg");
    avg.value = average;
    // sort filtered scores


    // get total of filtered scores and build display string


    // calculate the average 
  

    // display 
};

document.addEventListener("DOMContentLoaded", () => {
    
    getElement("#add_score").addEventListener("click", () => { 
        let score = querySelector("#score").textContent;  
        
    });
    
    getElement("#clear_scores").addEventListener("click", () => {
        let textArea = querySelector("#score_list").value;
        textArea.value = "";
    });

    getElement("#sort").addEventListener("change", () => {
        let option = querySelector("#sort").value;
        if (option.value == "fname") {

        } else if (option.value == "lname") {
            
        } else if (option.value == "score") {
            
        }
    });
    
    getElement("#filter").addEventListener("change", () => {
        let option = querySelector("#filter").value;
        if (option.value == 90) {
            scores.sort((a, b) => b - a);
        } else if (option.value == 80) {
            
        } else if (option.value == 70) {
            
        } else if (option.value == 60) {
            
        } else {
            
        }
    });

    // set focus on first text box on load
    getElement("#first_name").focus();
});