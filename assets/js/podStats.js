const contributionFetch = fetch(
    "https://api.github.com/repos/MLH-Fellowship/prep-portfolio-22.OCT.PREP.1/contributors"
);

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

contributionFetch
.then((data) => {
    return data.json();
})
.then((resp) => {
    let contributorsList = [];
    const removeList = new Set(['akshitadixit', 'marcnjaramillo']);
    for (const ele of resp) {
            if(removeList.has(ele.login)===false){
                const temp = {
                    username: ele.login,
                    avatarUrl: ele.avatar_url,
                    statsProfileUrl: ele.html_url,
                    contributions: ele.contributions,
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