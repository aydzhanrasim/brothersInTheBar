function brothersInTheBar(glasses) {
    //Setting a counter for successful rounds.
    let round = 0;
    let success = false;

    //Indentifying the contstraints for length of array and index value.
    let lengthValidationMax = Math.max(Math.pow(10, 5));
    let lengthValidationMin = Math.min(1);
    let indexValidationMax = Math.max(Math.pow(10, 6));
    let indexValidationMin = Math.min(1);

    //Creating a loop that validates the length of the array. 
    while (glasses.length <= lengthValidationMax && glasses.length >= lengthValidationMin) {

        //Creating a loop that goes through every index in the array.
        for (let i = 0; i < glasses.length; i++) {

            //Validating the value of the index.
            if (glasses[i] <= indexValidationMax && glasses[i] >= indexValidationMin) {

                //Saving the values of 3 consequtive indexes starting from the current one.
                let firstNum = glasses[i];
                let secondNum = glasses[i + 1];
                let thirdNum = glasses[i + 2];
                //If values are equal we have a successful round. So we add one to rounds and extract the glasses that made up the round. 
                if (firstNum === secondNum && secondNum === thirdNum) {
                    round++;
                    success = true;
                    glasses.splice(i, 3);
                    break;
                } else {
                    success = false;
                }
            } else {
                break;
            }
        }
        //If there are no successful rounds in the whole array, the cycle breaks.
        if (!success) {
            break;
        }
    }
    console.log(`brothersInTheBar(glasses) = ${round}`);

}

brothersInTheBar([1, 1, 2, 3, 3, 3, 2, 2, 1, 1]);