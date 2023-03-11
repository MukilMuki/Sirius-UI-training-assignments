function bank() {

    function bankAccount(name, accountNo, cardNumber, pin, accountBalance) {
        this.name = name;
        this.accountNo = accountNo;
        this.cardNumber = cardNumber;
        this.pin = pin;
        this.accountBalance = accountBalance;
    }

    function accountValid(userAccount, cardNo, cardPin) {
        if (userAccount.cardNumber == cardNo && userAccount.pin == cardPin) {       // Choice to choose from withdrawal and Deposit
            var choice = prompt("Press 1 to choose Withdrawal and Press 2 to Deposit cash");
            switch (parseFloat(choice)) {
                case 1:
                    ATM(userAccount, userAccount.accountBalance);     //ATM Machine for money withdrawal
                    console.log(userAccount.accountBalance) 
                    break;

                case 2:
                    CDN(userAccount, userAccount.accountBalance)    //CDN Machine for the cash deposit
                    console.log(userAccount.accountBalance) 
                    break;

                default:
                    console.log("Enter the correct choice");
                    break;
            }
        }
        else if(userAccount.cardNumber !== cardNo && userAccount.pin !== cardPin){
            console.log("Incorrect Login Details!!!");
        }
    }
    function ATM(userAccount, userBalance) {
        var Amount = prompt("Enter the amount you want to withdraw"); //Enter the amount you want to withdraw
        var requestedAmount = Math.abs(parseInt(Amount));
        if (requestedAmount > userBalance)
            console.log("Not enough money!");
        else if (requestedAmount < userBalance) {
            userAccount.accountBalance -= requestedAmount;
            console.log("Hello " + userAccount.name + ", The Amount you withdrew is: " + requestedAmount + " and your current Account Balance is: " + userAccount.accountBalance);
        }
    }

    function CDN(userAccount) {
        var Amount = prompt("Enter the amount you want to deposit"); //Enter the amount you want to deposit
        var depositedAmount = Math.abs(parseInt(Amount));
        userAccount.accountBalance += depositedAmount;
        console.log("Hello " + userAccount.name + ", The Amount you deposited is: " + depositedAmount + " and your current Account Balance is: " + userAccount.accountBalance);
    }

    var exit = "Y";
    const Mani = new bankAccount("Mani", 123, 22334556, 2234, 50000);
    const Anbu = new bankAccount("Anbu", 92345533, 1, 113, 100000);
    const Maara = new bankAccount("Maara",1223455, 2556667, 2234, 10000);
    const Muthu = new bankAccount("Muthi", 22456777, 93855675933, 5500, 1000);
    const Bhaiya = new bankAccount("Bhaiya", 564556887, 87609843455, 2210, 2000);
    const map1=new Map();
    map1.set("Mani", Mani);
    map1.set("Anbu",Anbu);
    map1.set("Maara",Maara);
    map1.set("Muthu",Muthu);
    map1.set("Bhaiya",Bhaiya);

    while (exit != "N") {
        var userName=prompt("Enter your name");
        var userCard=prompt("Enter your card number");
        var userPin=prompt("Enter your pin");
        accountValid(map1.get(userName),userCard,userPin);
        exit = prompt("Do you want to continue? Y or N");
    }

}

const button = document.querySelector("#button");
button.addEventListener('click', function (e) {
    bank();
});