function cracklePop() {
    var i;
    var text = "";
    var cracklePopText;
    for (i = 0; i < 101; i++) {
        if (i % 5 === 0 && i % 3 === 0) { 
            cracklePopText = "CracklePop";
            text += cracklePopText + "\n";
        }
        else if (i % 3 === 0){
            cracklePopText = "Crackle";
            text += cracklePopText + "\n";
        }
        else if (i % 5 === 0) {
            cracklePopText = "Pop";
            text += cracklePopText + "\n";
            }
        else {
            text += i + "<br>";
        }
    }
    console.log(text);
}

cracklePop();

