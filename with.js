function showProfile() {
    document.getElementById("displayName").innerText =
        document.getElementById("name").value;

    document.getElementById("displayCourse").innerText =
        document.getElementById("course").value;

    let skills = [
        document.getElementById("skill1").value,
        document.getElementById("skill2").value,
        document.getElementById("skill3").value,
        document.getElementById("skill4").value,
        document.getElementById("skill5").value
    ];

 

    document.getElementById("displaySkills").innerHTML = skillList;

    document.getElementById("profile").style.display = "block";
}

function hideProfile() {
    document.getElementById("profile").style.display = "none";
}
