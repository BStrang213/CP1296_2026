"use strict";

const contacts = [
    "1|Scott|scott@murach.com|1-559-555-5555",
    "2|Joel|joel@murach.com|1-409-555-5555",
    "3|Mike|mike@murach.com|1-363-555-5555"
];

const menuString = "COMMAND MENU\n" +
    "list - List all contacts\n" +
    "get # - Get contact with the specified number\n" +
    "exit - Exit program";

document.addEventListener("DOMContentLoaded", () => {
    let choice = prompt(menuString);

    if (choice == "list") {
        let userInfo1 = contacts[0].split(`|`)
        let userInfo2 = contacts[1].split(`|`)
        let userInfo3 = contacts[2].split(`|`)
        prompt(userInfo1[0] + userInfo1[1] + "\n" + userInfo2[0] + userInfo2[1] + "\n" + userInfo3[0] + userInfo3[1])
    } else if (choice == "get 1") {
        let userInfo = contacts[0].split(`|`)
        prompt("The information for " + userInfo[1] + "\n" + "Email: " + userInfo[2] + "\n" + "Phone: " + userInfo[3])
    } else if (choice == "get 2") {
        let userInfo = contacts[1].split(`|`)
        prompt("The information for " + userInfo[1] + "\n" + "Email: " + userInfo[2] + "\n" + "Phone: " + userInfo[3])
    } else if (choice == "get 3") {
        let userInfo = contacts[2].split(`|`)
        prompt("The information for " + userInfo[1] + "\n" + "Email: " + userInfo[2] + "\n" + "Phone: " + userInfo[3])
    } else if (choice == "exit") {
        prompt("Good Bye!")
    } else {
        prompt("That is not a valid command.")
    }
})