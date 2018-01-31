(function() {

  function loadJSON(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    }
    rawFile.send(null);
  }

  //usage:
  loadJSON("resources/data.json", function(text){
    let data = JSON.parse(text);
    console.log(data);
    /*creatingSummary(data.basics.summary);*/
    creatingSummary(data.basics.objective);
    for(i in data.basics.strengths){
        creatingStrengths(data.basics.strengths[i]);
    }
    for(i in data.basics.achievements){
        creatingAchievements(data.basics.achievements[i]);
    }
    for(i in data.basics.interest){
        creatingInterest(data.basics.interest[i]);
    }
   });

  var resumeDiv = document.getElementById("resume");

  function creatingSummary(summary){
    var section = document.createElement("section");
    section.classList.add("section", "main-summary");
    var summary_section = document.createElement("section")
    var div = document.createElement("div");
    div.innerHTML = summary;
    summary_section.appendChild(div);
    section.appendChild(summary_section);
    resumeDiv.appendChild(section);
  }

  var strengthDiv = document.getElementById("strengths");

  function creatingStrengths(strengths){
    var section = document.createElement("section");
    section.classList.add("section", "main-summary");
    var summary_section = document.createElement("section")
    var div = document.createElement("div");
    div.innerHTML = strengths;
    summary_section.appendChild(div);
    section.appendChild(summary_section);
    strengthDiv.appendChild(section);
  }
  var achievementDiv = document.getElementById("achievements");

  function creatingAchievements(achievements){
    var section = document.createElement("section");
    section.classList.add("section", "main-summary");
    var summary_section = document.createElement("section")
    var div = document.createElement("div");
    div.innerHTML = achievements;
    summary_section.appendChild(div);
    section.appendChild(summary_section);
    achievementDiv.appendChild(section);
  }
  var interestDiv = document.getElementById("interest");

  function creatingInterest(interest){
    var section = document.createElement("section");
    section.classList.add("section", "main-summary");
    var summary_section = document.createElement("section")
    var div = document.createElement("div");
    div.innerHTML = interest;
    summary_section.appendChild(div);
    section.appendChild(summary_section);
    interestDiv.appendChild(section);
  }


})();
