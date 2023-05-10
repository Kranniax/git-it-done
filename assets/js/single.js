var getRepoIssues = function (repo) {
  var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayIssues(data);
      });
    } else {
      alert("There is a problem with your request!");
    }
  });
};

var displayIssues = function (issues){
    for (var i =0; i < issues.length; i++){
    //create link element to take users to the issues on github.
    var issueEl = document.createElement("a");

    }
};

getRepoIssues("facebook/react");
