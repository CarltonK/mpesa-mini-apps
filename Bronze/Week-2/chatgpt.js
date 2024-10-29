function extractTransactionDetails(transactionString) {
    // Find the position of key phrases in the string
    const timeSentIndex = transactionString.indexOf("on ") + 3;
    const timeIndex = transactionString.indexOf(" at ");
    const spaceAfterCodeIndex = transactionString.indexOf(" ");
  
    // Extract the substrings based on the positions found
    const timeSent = transactionString.substring(timeSentIndex, timeIndex);
    const time = transactionString.substring(timeIndex + 4, transactionString.indexOf(" ", timeIndex + 4));
    const transactionCode = transactionString.substring(0, spaceAfterCodeIndex);

    // Construct the object with extracted information
    const transactionDetails = {
        Time: time,
        Transaction_code: transactionCode
    };

    return transactionDetails;
}

// Example usage:
const transactionString = "XXXYYYZZZ3 Confirmed. Ksh500.00 sent to KPLC PREPAID for account 123456789 on 23/4/21 at 9:57 PM New M-PESA balance is Ksh5,941.22. Transaction cost, Ksh23.00. Amount you can transact within the day is 296,283.00.";
console.log(extractTransactionDetails(transactionString));