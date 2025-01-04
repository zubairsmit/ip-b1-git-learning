function checkPalindrome() {
    let name = document.getElementById("nameInput").value.toLowerCase();
    let reversedName = "";

    
    for (let i = name.length - 1; i >= 0; i--) {
      reversedName += name[i];
    }

    
    if (name === reversedName && name !== "") {
      document.getElementById("result").textContent = `Yes, "${name}" is a palindrome!`;
      document.getElementById("result").style.color = "#2ed573";
    } else {
      document.getElementById("result").textContent = `No, "${name}" is not a palindrome.`;
      document.getElementById("result").style.color = "#ff4757";
    }
  }