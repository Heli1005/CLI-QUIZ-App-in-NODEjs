const { get } = require("https");
const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var ptn = "---------------"
var name = "";
var i = 0
var res = 0

const questions = [
    // `Scam 1992 show based on `,
    `Who played role of Harshad Mehta in Scam 1992 `,
    `Full name of Harshad Mehta is ?`,
    `Harshad Mehta met Bhushan Bhatt for the first time when both of them were:`,
    `What was the fund amount given to Harshad Mehta by SBI?`,
    `What was Sucheta Dalal's post at The Times of India?`,
    `How many days did Harshad Mehta spend in jail before receiving bail?`,
    `Which document was missing with the SBI when the fraud was initially exposed?`,
    `How much money did the suitcase that Harshad Mehta showed to the media contain ?`,
    `What was the size of Harshad Mehta's Mumbai Penthouse?`,
    `Which of the following companies was acquired by Harshad Mehta? `,
];

const options = [
    // ["Stock market", "Cyber crime scams", "Bank robbery", "Fake Check scam"],
    ["Abhishek Bachchan", "Pratik Gandhi", "Abhimanyu Dassani", "None of Above"],
    ["Harshad Dhirubhai Mehta", "Harshad Manak Lal Mehta", "Harshad Jayanti Lal Mehta", "Harshad Shanti Lal Mehta"],
    ["Brokers", "Insurance Agent", "Investors", "jobbers"],
    ["555 Crore ", "500 Crore ", "100 Crore ", "1000 Crore"],
    ["Financial Journalist", "Field Reporter", "Political Analyst", "Financial Editor"],
    ["151 days", "99 days", "111 days", "100 days"],
    ["Demand Drafts", "Bank Receipts", "Cheque", "Loan Papers"],
    ["20 Crore", "1 Crore", "11 Crore", "500 Crore"],
    ["1,500 sq ft", "15,000 sq ft", "50,000 sq ft", "19,000 sq ft"],
    ["ACC", "GrowMore", "Mazda", "Polo"],
];

const correctOption = [
    // "stock market", 
    "Pratik Gandhi",
    "Harshad Shanti Lal Mehta",
    "jobbers",
    "500 Crore ",
    "Financial Editor",
    "111 days",
    "Bank Receipts",
    "1 Crore",
    "15,000 sq ft",
    "Mazda",
];

// const description = [
//     "Based on 1992 Indian stock market scam committed by many stockbrokers including Harshad Mehta",
//     "Pratik Gandhi is an Indian actor. He primarily works in Gujarati theatre and cinema. He garnered national attention and widespread critical acclaim for playing stock broker Harshad Mehta in the 2020", 
//     "third", "forth", "fifth"]

console.log(`\n${ptn}   Welcome to the CLI-QUIZ : ${ptn}\n`);
r1.question("Enter Your Name: ", (userName) => {
    name = userName.toUpperCase();
    console.log(`${ptn}${ptn}`);
    console.log(`\nWelcome to game ${name} \n`);
    console.log(`topic : "Scam 1992" \n\n${ptn}${ptn}\n\nHere there will be 10 questions \n\t-->Right answer +5 points \n\t-->Wrong Answer -2 points \n `)
    r1.question("Press 'y' for continue and 'n' for Exit from the game:", (ch) => {
        if (ch === 'y') {
            quiz();
        }
        else {
            console.log("\nExit.........................\n");
            r1.close();
        }
    })
});

function getUserInput(n) {
    console.log(`\n${ptn}${ptn}${ptn}`);
    console.log(`\n${i + 1}.) ${questions[i]} \n`);
    const fourOptions = () => {
        return options[i].map((op, index) => {
            var opt = 0
            opt += 1;
            console.log(`${index + 1}.  ${op}`);
        })
    }
    fourOptions()
    r1.question("\n\tEnter your respose : ", (ans) => {

        if (options[i][ans - 1] == correctOption[i]) {
            res = res + 5
            // console.log(`Description-->${description[i]} \n`);
            console.log(`Well done !! you got (+5)  points\n\nyour score is now :  ${res}`);
        }
        else {
            res = res - 2
            // console.log("Description--> ", description[i]);
            console.log(`\noops!! your are wrong  ❌ you lost (-2) points\n\n your score is now :  ${res}`);
        }

        if (n === 10) {
            console.log(`${ptn}${ptn}${ptn}`);
            console.log(`Result : `);
            if (res > 15) {
                console.log(`Well played!!!!!!!! 🤩🎊 ${name} , Your total score is ${res} `);
            }
            else if (res > 10) {
                console.log(`Good  ${name}, Your total score is ${res}`);
            }
            else {
                console.log(`Not good at all 😥  ${name}, Your total score is ${res} `);
            }
            console.log();
            // console.log(`\n Player name : ${name} ||  Score : ${res}\n`);
            r1.close();
        }
        else {
            i++
            getUserInput(n + 1)
        }
    })
}

const quiz = () => {
    getUserInput(1);
}