// class BankAccount{
//     constructor(accountNumber,accountHolderName,accountBalance,isSalary)
//     let 
// }

const BankAccount=
    {savings:{
    accountNumber:1414151555,
    accountHolderName:"amit",
    accountBalance:2000,
    isSalary:"10000"
},
    current : {
        accountNumber:141415515,
        accountHolderName:"deepu",
        accountBalance:10000,
        odLimit:100000
    }
}
var CURRENT_AMOUNT=0;
var SAVING_AMOUNT=0;
const Balance = {saving:{
    withdraw: function(amount) {
        var savingAmount = BankAccount.savings.accountBalance;
        if (savingAmount >= 0 && amount >=0) {
            SAVING_AMOUNT=savingAmount-amount;
            return savingAmount - amount;
        }return 0 ;
        
    }},
    current:{
        withdraw: function(amount){
            var currentAmount = BankAccount.current.accountBalance;
            var odLimitt = BankAccount.current.odLimit;
            if (currentAmount >= 0 && amount >= 0 && odLimitt >= 0 ) {
                CURRENT_AMOUNT=currentAmount-amount;
                return  currentAmount - amount;
            }return 0;    
        }  
    },
    CurrentBalance:{
        getCurrentBalance: function(types){
            if (types=='saving') {
                return SAVING_AMOUNT;
            }else if (types == 'current') {
                return CURRENT_AMOUNT;
            }else{
                return 0;
            }
        }
    }
  }

console.log(Balance.saving.withdraw(100));
console.log(Balance.current.withdraw(11000));
console.log(Balance.CurrentBalance.getCurrentBalance('current'));



