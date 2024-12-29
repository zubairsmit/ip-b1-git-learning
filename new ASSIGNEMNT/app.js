// function calculateResult() {
//     const totalMarks = parseFloat(document.getElementById("totalMarks").value);
//     const obtainedMarks = parseFloat(document.getElementById("obtainedMarks").value);
  
//     if (!isNaN(totalMarks) && !isNaN(obtainedMarks) && totalMarks > 0) {
//       const percentage = (obtainedMarks / totalMarks) * 100;
//       let grade;
  
//       if (percentage >= 90) {
//         grade = "A+";
//       } else if (percentage >= 80) {
//         grade = "A";
//       } else if (percentage >= 70) {
//         grade = "B";
//       } else if (percentage >= 60) {
//         grade = "C";
//       } else {
//         grade = "F";
//       }
  
//       const resultText = `PERCENTAGE: ${percentage.toFixed(2)}%<br>GRADE: ${grade}`;
//       document.getElementById("result").innerHTML = resultText;
  
//       if (percentage >= 90) {
//         document.getElementById("result").innerHTML += `<br>YOU ARE TOP OF THE LIST!`;
//       }
//     } else {
//       document.getElementById("result").innerText = "Please enter valid numbers.";
//     }
//   }
function calculateResult() {
    let totalMarks = parseFloat(document.getElementById("totalMarks").value);
    let obtainedMarks = parseFloat(document.getElementById("obtainedMarks").value);
  
    if (isNaN(totalMarks) || isNaN(obtainedMarks) || totalMarks <= 0) {
      document.getElementById("result").innerText = "Please enter valid numbers for total and obtained marks.";
      return;
    }
  
    if (obtainedMarks > totalMarks) {
      document.getElementById("result").innerText = "Error: Obtained marks cannot be greater than total marks.";
      return;
    }
  
    let percentage = (obtainedMarks / totalMarks) * 100;
    let grade;
  
    if (percentage >= 90 && 100) {
      grade = "A+";
    } else if (percentage >= 80 && 89) {
      grade = "A";
    } else if (percentage >= 70 && 79) {
      grade = "B";
    } else if (percentage >= 60 && 69) {
      grade = "C";
    }else if (percentage >= 50 && 59)  {
      grade = "D";
    } else {
      grade = "F";
    }
  
    let resultText = `PERCENTAGE: ${percentage.toFixed(2)}%<br>GRADE: ${grade}`;
    document.getElementById("result").innerHTML = resultText;
  
    if (percentage >= 90) {
      document.getElementById("result").innerHTML += `<br>🎉CONGRATULATIONS YOU ARE TOP OF THE LIST!🎉`;
    }
  }
  