const accountId =1123 
//Const can't be edited , others can be edited
let accountEmail= "1@gmail.com"
var accountPass = "111"
//let is introduced to overcome block and functional scope related issue due to var . 
accountCity = "Jaipur"//not good method

let accountState //here it is having undefined value

console.table([accountEmail, accountPass , accountCity])