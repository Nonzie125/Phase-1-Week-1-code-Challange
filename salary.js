let basicSalary = 10000;
let houseAllowance = 1000;
let hardshipAllowance = 1000;
let medicalAllowance = 1000;
let grossSalary = parseInt(basicSalary) + parseInt(houseAllowance) + parseInt(hardshipAllowance) + parseInt(medicalAllowance);
const taxRate = ["0.1", "0.25", "0.3", "0.325", "0.35"];
let b = 0.25;
let c = 0.3;
let d = 0.325;
let e = 0.35;
const netSalary = grossSalary-payee;
function payee(grossSalary, taxRate){
    console.log('${grossSalary} , ')
}
