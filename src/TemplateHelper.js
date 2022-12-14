// return the correct html for the employee's icon and title
function getIcon(title) {
    switch (title) {
        case "Manager":
            return `<h3 class="card-text"><i class="fa-solid fa-mug-hot"></i> Manager</h6>`;
            break;
        case "Engineer":
            return `<h3 class="card-text"><i class="fa-solid fa-glasses"></i> Engineer</h6>`;
            break;
        case "Intern":
            return `<h3 class="card-text"><i class="fa-solid fa-user-graduate"></i> Intern</h6>`;
            break;
    }
}

// return the correct html for the employee's attribute that is unique to their title
function getUniqueAttribute(member) {
    switch (member.getTitle()) {
        case "Manager":
            return `<li class="list-group-item">Office Number: ${member.getOfficeNumber()}</li>`;
            break;
        case "Engineer":
            return `<li class="list-group-item">GitHub: <a href="https://github.com/${member.getGitHub()}" target="_blank">${member.getGitHub()}</a></li>`;
            break;
        case "Intern":
            return `<li class="list-group-item">School: ${member.getSchool()}</li>`;
            break;
    }
}

// create an html card for each team member
function createTeamMemberCards(team) {
    let cards = [];
    for (const member of team) {
        let card = `
        <div class="card m-2" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                <h3 class="card-title">${member.getName()}</h3>
                ${getIcon(member.getTitle())}
            </div>
            <div class="card-body">
                <ul class = "list-group">
                    <li class = "list-group-item">ID: ${member.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${member.getEmail()}">${member.getEmail()}</a></li>
                    ${getUniqueAttribute(member)}
                </ul>
            </div>
      </div>
      `;
        cards.push(card);
    }
    return cards.join("");
}

// return the html that will be written to the index.html file
function createPage(teamMembers) {
    return `
    <!DOCTYPE html>
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
        <title>My Team</title>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid bg-danger text-white">
        <h1 class="display-5 text-center">My Team</h1>
    </div>
    <div class="d-flex flex-row flex-wrap justify-content-center">
        ${createTeamMemberCards(teamMembers)}
    </div>
    </body>
    </html>
    `;
}

module.exports = createPage;
