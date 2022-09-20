function enterpassword(individualpassWord){
    if (individualpassWord.length >=6 && individualpassWord.length <=20 && isNaN(parseInt(individualpassWord))){
        alert ("Password accepted");
    }
    else {
        alert ("password rejected")
    }
}
function typeinpassword(){
    let passwordprompt = prompt("Please enter a password")
    enterpassword(passwordprompt)
}