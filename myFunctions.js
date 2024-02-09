(function main() {
    let counter = 0; // Global variable - used to calculate factorial in number_function;

    menu();

    /**
     * A function to return names values with first letter upper-cased (i.e, Serhii, Fiona);
     * @param value
     * @param type
     * @returns {string}
     */
    function toUpperCaseFirstLetter(value, type = '') {
        if (type === 'first name') {                // Control structure to identify is it called for username generation on the first name;
            return value.charAt(0).toUpperCase();   // Returns upper-cased value of first letter of the first name (i.e, S, F)
        }

        return value.charAt(0).toUpperCase() + value.slice(1); // Returns upper-cased value of any name passed into function;
    }

    /**
     * A function to perform basic validation on names and returns first or last name with the first
     * letter capitalized;
     * @param type
     * @returns {string}
     */
    function validateName(type) {
        let name = '';                                   // Local variable, used to hold first or last name;
        do {                                             // Control structure (loop), used to validate first and last names contain more than 3 characters;
            name = prompt(`Enter your ${type}:`);// Prompting to enter first or last name;
            if (name.length < 3) {                       // Control structure, used to check the length of first or last name given;
                alert(`${toUpperCaseFirstLetter(type)} requires at least 3 characters, try again`); // Output if validation fails;
            }

        } while (name.length < 3);

        return toUpperCaseFirstLetter(name); // Return the value of a first or a last name (first letter capitalized);
    }

    /**
     * A function creates username and outputs the result;
     * @param user
     */
    function create_name(user) {
        let stringOne = ''; // Local variable, used to hold part of username, generated from a first name;
        let stringTwo = ''; // Local variable, used to hold part of username, generated from a last name;
        let names = [];     // Local variable, array, used for storing separate a first name and a last name;
        let username = '';  // Local variable, used to hold username;

        names = user.split(' '); // Splitting first and last names;
        stringOne = names[0]; // Storing the value of the first name;
        stringTwo = names[1]; // Storing the value of the last name;
        username = toUpperCaseFirstLetter(stringOne, 'first name') + (toUpperCaseFirstLetter(stringTwo)); // Username generation;

        alert(`Welcome, your username is ${username}`); // Output the result to user;
    }

    /**
     * A function to wrap the Level 2 of main menu for the first option with passing
     * parameter example;
     * @param name
     */
    function string_function(name) {
        create_name(name) // Calling function to create username;
    }

    /**
     * A function to calculate factorial of user input number.
     * I.e: number entered by the user is 5, output would be:
     * 5 * 4 * 3 * 2 * 1 = 120
     */
    function number_function() {
        let number = 0;         // Local variable, used to hold user input;
        let factorial = 1;      // Local variable, used to hold initial value to start factorial calculation;
        let resultMessage = ''; // Local variable, used to hold output message for user;

        do {                    // Control structure (loop), used to perform basic validation for number input;
            number = parseInt(prompt('Enter a positive whole number greater than 0:'))
            if (number < 1) { // Control structure;
                alert('Enter a positive whole number greater than 0, try again'); // // Output if validation fails;
            }
        } while (number < 1)

        counter = number;       // Assigning to global variable value of user input;

        while (counter > 0) {   // Control structure (loop), performs calculation of factorial;
            factorial = factorial * counter; // Iteration to reassign value of factorial based on decremented counter;
            if (counter !== 1) {  // Control structure to properly generate output message with the result for user;
                resultMessage += `${counter} * ` // Concatenate any value to output message, except last;
            } else {
                resultMessage += `${counter} = ` // Concatenate last value to output message;
            }
            counter--; // Decrementing the counter to enter the next iteration of the loop;
        }

        resultMessage += `${factorial}` // Concatenate result of calculation to output message;

        alert(resultMessage);   // Output message for user;
    }

    /**
     * A function to run MyFunctions program many with basic validation of user's choices;
     */
    function menu() {
        let firstName = '';  // Local variable, used to hold user input of the first name;
        let lastName = '';   // Local variable, used to hold user input of the last name;
        let fullName = '';   // Local variable, used to hold user's full name;
        let userMenuChoice = 0;  // Local variable, used to hold user's menu choices;
        const choiceOptions = [1, 2, 3] // Local variable, array, used to hold available menu choices;

        firstName = validateName('first name'); // Assigning validated input of user's first name;
        lastName = validateName('last name'); // Assigning validated input of user's last name;

        fullName = firstName + ' ' + lastName; // Generating the full name;

        do {            // Control structure (loop), used to run user menu;
            userMenuChoice = +prompt(`Welcome ${fullName}! Here is MyFunctions program menu: 
            press 1 to run create_name;
            press 2 to run number_function;
            press 3 to quit MyFunctions program.`); // Prompting user choices;

            switch (userMenuChoice) { // Control structure, used to run menu options, based on user choices;
                case choiceOptions[0]:
                    alert(`${fullName}! This is option 1`); // Output selected choice;
                    string_function(fullName); // Function call to generate user name;
                    break;
                case  choiceOptions[1]:
                    alert(`${fullName}! This is option 2`); // Output selected choice;
                    number_function(); // Function call to calculate factorial;
                    break;
                case  choiceOptions[2]:
                    alert(`Goodbye ${fullName}`); // Output on user's choice to quit the program;
                    break;
                default:
                    alert('Choice between 1 and 3 only please – try again'); // Output on choices unavailable;
            }
        }
        while (userMenuChoice !== 3)
    }
})();
