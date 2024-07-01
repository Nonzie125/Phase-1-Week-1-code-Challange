let carSpeed = 108;
let demeritPoints = 2;
let a = 4;
let b = 8;
let c = 10;
let d = 12;

const above = 'licensesuspended';
const p = 'prints';
if (carSpeed <70){
  console.log('print [ok],');
}
else if (carSpeed >70 && carSpeed <80){
  console.log(`get, ${demeritPoints} ${p},`);
}
else if (carSpeed >80 && carSpeed <90){
  console.log(`get, ${a} ${p},`);
}
else if (carSpeed >90 && carSpeed <100){
  console.log(`get, ${b} ${p},`);
}
else if (carSpeed >100 && carSpeed <110){
  console.log(`get, ${c} ${p},`);
}
else if (carSpeed >110 && carSpeed <120){
  console.log(`get, ${d} ${p},`);
}
else if (carSpeed >130){
  console.log(`${above}, `);
  }

  
