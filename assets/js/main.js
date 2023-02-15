console.log("test");

/* 
Function 
    beim drücken des btn 
        von 100 % bis 0 % runter zählt

onclick
setInterval
clearInterval
if, else if
querySelector

*/




// btn
const btnStart = document.querySelector("#btn");


// click
btnStart.addEventListener("click", () => {
    console.log("btn clicked");

    // function def
    function zählen() {
        console.log("in function zählen");

        // counter 100
        let counter = 100;

        // setInterval    
        const stopInterval = setInterval(() => {
            console.log("in function setInterval");

            counter = counter - 1;
            console.log(counter);

            // / ausgabe counter
            // text output
            const textOutput = `${counter} %`;
            console.log(textOutput);

            // creat Element     --> !! entfällt, da ja div schon da zum einfügen siehe 100% Anfangswet
           const neuerPTag = document.createElement("p");

          // inhalt zuweisen
              // / output 
              const outputField = document.querySelector(`#output`);
              console.log(outputField);
              outputField.innerHTML = textOutput;
              outputField.style.width = `${counter}px`;

              // text im html anzeigen      --> !! entfällt, da ja div schon da
           outputField.appendChild(neuerPTag);

            // if    zum stoppen 
            if (counter === 0) {
                console.log("in  if");
                console.log(counter)
                clearInterval(stopInterval);
            };


        }, 100);

    }

    // function aufruf
    zählen();

});



// im html div    - class zeit anzeigen   überschreiben   ersetzen


// evtl. noch, das sich der Balken mit der zeit verlängert :-)
