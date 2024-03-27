// Write your solution in this file!
 var customername = 'bob';
 

 function upperCaseCustomerName () {
    customerName = customerName.toUpperCase ();
 }

 function setBestCustomer () {
    bestCustomer = 'not bob';
 }

 function overwriteBestCustomer () {
    bestCustomer = 'maybe bob';
 }


 const leastFavoriteCustomer = 'someone';

 function changeLeastFavoriteCustomer () {
    leastFavoriteCustomer = 'someone else';
 }

 module.exports = {
    customerName,
    upperCaseCustomerName,
    setBestCustomer,
    overwriteBestCustomer,
    leastFavoriteCustomer,
    changeLeastFavoriteCustomer,
 }
