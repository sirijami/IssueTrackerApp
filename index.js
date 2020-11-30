let issues = [];
function saveIssue(e){
    let issueData = document.getElementById('issueTrackerForm').elements;
    let issue = {
        id : generateUUID(),
        description : issueData[0].value,
        severity : issueData[1].value,
        assignedTo :issueData[2].value,
        status: 'Open'
    }
    issues.push(issue);
    renderIssues();
}

function generateUUID() {
    return Math.random()
    .toString(16)
    .substring(2,9);
}


function renderIssues() {
    let issueList = document.getElementById('issueList');
    issueList.innerHTML = "";

    for(let i = 0; i < issues.length; i++) {
        let issueId = issues[i].id;
        issueList.innerHTML += "<div class='formStyle' style=''><h6> Issue ID: " + issues[i].id + "</h6>" +
                                "<button style='background-color:#5ab5e5; padding: 2px'>" + issues[i].status + "</button>" + 
                                "<h4>" + issues[i].description + "</h4>" + 
                                "<h5><span class='glyphicon glyphicon-time'></span> " + issues[i].severity + "</h5>" + 
                                "<h5><span class='glyphicon glyphicon-user'></span> " + issues[i].assignedTo + "</h5>" + 
                                "<button style='background-color:#edd600;' onClick='closeIssue(\"" + issueId + "\")'>Close</button>" + " " +
                                "<button onClick='deleteIssue(\"" + issueId + "\")' style='background-color:#b33f3f;'>Delete</button></div>"
    }
}

function closeIssue(id) {
    issues.map((issue, index) => {
        if(issue.id === id) {
            issue.status = "Closed";
            renderIssues();
            return;
        }
    })
}

function deleteIssue(id) {
    issues.map((issue, index) => {
        if(issue.id === id) {
            issues.splice(index, 1,);
            alert('Are you sure to delete it?')
            renderIssues();
            return;
        }
    })
}