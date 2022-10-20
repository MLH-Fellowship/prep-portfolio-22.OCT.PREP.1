function displayFetch(records) {
    let username = document.querySelectorAll(".username");
    let pic = document.querySelectorAll(".pic");
    let contributions = document.querySelectorAll(".right");

    for (let i = 0; i < records.length; i++) {
        username[i].innerHTML = `${records[i].username}`;
        pic[i].style.backgroundImage = `url(${records[i].avatarUrl})`;
        contributions[i].innerHTML = `${records[i].contributions}`;
    }
}

Promise.all([
    fetch("https://api.github.com/repos/MLH-Fellowship/prep-portfolio-22.OCT.PREP.1/contributors"),
    fetch("https://api.github.com/repos/MLH-Fellowship/prep-project-22.OCT.PREP.1/contributors")
])
.then((responses)=>{
    return Promise.all(responses.map(r => r.json()))
})
.then((data) => {
    const resp1 = data[0];
    const resp2 = data[1];
    let contributorsList = [];
    const removeList = new Set(['akshitadixit', 'marcnjaramillo']);
    const contributorsMap = new Map();
        for (const ele of resp1) {
            if(removeList.has(ele.login)===false){
                contributorsMap.set(ele.login, ele.contributions);
            }
        }
        for (const ele of resp2) {
                if(removeList.has(ele.login)===false){
                    const currContributions = contributorsMap.get(ele.login);
                    const temp = {
                        username: ele.login,
                        avatarUrl: ele.avatar_url,
                        statsProfileUrl: ele.html_url,
                        contributions: currContributions + ele.contributions
                    };
                    contributorsList.push(temp);
                }
            }

        // adding 15 statsCards
        let statsCards = document.getElementsByClassName("statsCards")[0];
        for (let i = 0; i < contributorsList.length; i++) {
            statsCards.innerHTML += `
            <div class="statsCard">
            <a class="plate" href=${contributorsList[i].statsProfileUrl}>
                    <div class="statsProfile"><div class="pic" id="pic"></div></div>
                    <div class="username" id="username">username</div>
            </a>
            <div class="text">
                <div class="left">Contributions:</div>
                <div class="right" id="right">07</div>
            </div>
            </div>`;
        }
        displayFetch(contributorsList);
    })
    .catch((error) => console.log(error));