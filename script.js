document.getElementsByClassName(block)
block.onclick = function () {
    // 1
    let userNumber1 = prompt(`Summ of all numbers between both:
Type first number`)
    let userNumber2 = prompt(`Summ of all numbers between both:
Type second number`)
    let summ = 0;
    for (let i = +userNumber1; i <= +userNumber2; i++) {
        summ += i;
    }
    alert(summ);

    // 2
    // HREN ZNAET :(

    // 3
    let userNumber = prompt(`Every divisor of your number:
Type your number`);
    let divisions = "";
    for (let i = userNumber; i >= 1; i--) {
        if (userNumber % i == 0) {
            divisions += `${i} `;
        }
    }
    alert(`Divisiors of number ${userNumber} is
${divisions}`);

    // 4
    userNumber = prompt(`Counting ammount of digits in your number:
Type your number`)
    let digitAmmount = 1;
    if (userNumber >= 10) {
        do {
            userNumber /= 10;
            digitAmmount++;
            if (userNumber < 10) break
        } while (digitAmmount)
    }

    alert(`Your number has ${digitAmmount} digits`)


    // // 5
    let odd = 0;
    let even = 0;
    let negative = 0;
    let positive = 0;
    let userNumberMem = ""
    for (i = 1; i <= 10; i++) {
        userNumber = prompt(`Type 10 numbers;
#${i}:`)
        userNumberMem += ` ${userNumber} `
        userNumber = +userNumber;
        if (isNaN(userNumber)) {
            alert("Field is empty or has letters, try again with numbers");
            continue;
        }
        if (userNumber % 2 == 0) even += 1;
        if (userNumber % 2 !== 0) odd += 1;
        if (userNumber < 0) negative += 1;
        if (userNumber > 0) positive += 1;
    }
    alert(`You have been written ${userNumberMem} 
1. odd numbers - ${odd} times
2. even numbers - ${even} times
----------------------------------
3. negative numbers - ${negative} times
4. positive numbers - ${positive} times`);


    // 6
    let calc;
    do {
        let result = 0;
        let calcNumber1 = prompt("Type first number to calculate")
        let operator = prompt(`What kind of math you would like to do? Type the symbol
    division - (/)
    multiplicaion (*)
    minus (-)
    plus (+)`)
        if (operator !== "-" && operator !== "+" && operator !== "/" && operator !== "*") {
            alert("You have to type math symbol (-; +; /; *;)");
            continue;
        }
        let calcNumber2 = prompt("Type second number to calculate")
        calcNumber1 = +calcNumber1;
        calcNumber2 = +calcNumber2;
        if (operator == "-") result = calcNumber1 - calcNumber2;
        else if (operator == "+") result = calcNumber1 + calcNumber2;
        else if (operator == "/") result = calcNumber1 / calcNumber2;
        else if (operator == "*") result = calcNumber1 * calcNumber2;
        alert(`${calcNumber1} ${operator} ${calcNumber2} = ${result}.`);
        calc = prompt(`Would you like to continue? 
    1 - ofc
    2 - enough math for me!`)
        if (calc !== "1" && calc !== "2") alert("THERE ONLY 1 OR 2 CHOOSES YOU DUMB")
    } while (calc == "1")


    // 7
    userNumber = prompt(`Digit swapper:
Type your number`)
    userNumberCount = userNumber;
    userSwap = prompt("Type how many first digits you need to swap")
    digitAmmount = 1;
    if (userNumberCount >= 10) {
        do {
            userNumberCount /= 10;
            digitAmmount++;
            if (userNumberCount < 10) break
        } while (digitAmmount)
    }
    let zeroAmmount = digitAmmount - userSwap;
    divisor = 1;
    for (let i = 1; i <= zeroAmmount; i++) {
        divisor *= 10;
    }
    let swapDigit = Math.floor(userNumber / divisor);
    swapDigit = swapDigit + "";
    let constDigit = userNumber - (swapDigit * divisor);
    constDigit = constDigit + "";
    alert(`Your number ${userNumber} with ${userSwap} digits swap now looks - ${constDigit + swapDigit}`);


    // 8
    let day1 = "Monday"
    let day2 = "Thuesday"
    let day3 = "Wendesday"
    let day4 = "Thursday"
    let day5 = "Friday"
    let day6 = "Saturday"
    let day7 = "Sunday"
    for (let i = 1; i <= 7; i++) {
        let day = eval(`day${i}`)
        let userChoose = confirm(day)
        if (userChoose == false) break
        if (i == 7) i = 0;
    }

    // 9
    let factorsOut = ""
    let numbers = 2;
    let factors = 1;
    for (let i = 2; i <= 9; i++) {
        for (let j = 1; j <= 10; j++) {
            if (j == 1) {
                factorsOut += `
            Factor by ${i} - `
            }
            factors = i * j;
            factorsOut += ` ${factors} `

        }
    }
    alert(`${factorsOut}`)

    // 10
    alert("Choose the number between 1 and 100")

    let guessStart = 0;
    let guessEnd = 100;
    let guess = 50;
    let diapason = 0;
    for (let i = 0; i = true; i++) {
        userChoose = prompt(`Is your number more than ${guess}? 
    1 - Yes, it's more 
    2 - No, it's less
    3 - That's god damn my number!
    `)
        if (userChoose == 1) {
            guessStart = guess;
            diapason = Math.floor((guessEnd - guessStart) / 2)
            guess = guessEnd - diapason;
        }
        else if (userChoose == 2) {
            guessEnd = guess;
            diapason = Math.floor((guessEnd - guessStart) / 2)
            guess = guessEnd - diapason;
        }
        else if (userChoose == 3) break;
        else alert("You can choose only 1-3 options, try again")

    }
}