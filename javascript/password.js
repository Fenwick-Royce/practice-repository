function enterpassword(individualpassWord){
    if(individualpassWord.length >= 6 && individualpassWord.length <= 20){
        let firstChar = parseInt (individualpass.charAt(6));
        if(!isNaN(firstChar)){
                alert("Password requires to be 6 characters long");
        }
        else {
            alert("password accepted");
        }
    }
    var str1 = str.toLowerCase();
    var str2 = str.toUpperCase();
    var str3 = "!@#$%^&*()";
    var str4 = 123456789 ;
}
console.log(enterpassword)
console.log(individualpassWord)

function btnPrompt(){
    let btnPrompt = prompt("enter a password")
    pwRequirement("enter a password with 6 characters minimum")
}