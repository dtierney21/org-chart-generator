const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

function createTeamMemberCards(team) {
    for (const member of team) {
        
        switch (member.getTitle()) {
            case "Manager":
                // do something
                break;
            case "Engineer":
                // do something
                break;
            case "Intern":
                // do something
                break;
        }
    }
}

function createPage() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <title>Team Profile</title>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid bg-danger text-white">
        <h1 class="display-5 text-center">My Team</h1>
    </div>
    <div class="d-flex flex-row flex-wrap justify-content-center">
        ${generateTeam(team)}
    </div>
    </body>
    </html>
    `;
}
