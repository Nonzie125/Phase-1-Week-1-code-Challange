let studentScore = 80;
let studentName = 'Amali';

if (studentScore >79) {
    console.log (`well done,${studentName}you scored ${studentScore}. You got an [A] on this test.`);
} else if (studentScore >= 60 && studentScore < 79) {
    console.log (`well done,${studentName}you scored ${studentScore}. You got an [B]on this test.`);
}
else if (studentScore >= 49 && studentScore < 59) {
    console.log(`well done,${studentName}you scored ${studentScore}. You got a [C] on this test.`);
}
else if (studentScore >=40 && studentScore < 49){
console.log(`hi, ${studentName} you scored ${studentScore}. You got a [D] on this test.`);
}
else if (studentScore < 40){
   console.log(`hi, ${studentName} you scored ${studentScore}. You got an [E] on this test.`);
   }