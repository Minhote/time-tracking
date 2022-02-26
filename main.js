fetch("./data.json")
    .then((res) => res.json())
    .then((res) => console.log(res))

var daily = document.querySelector("#daily");
var weeklly = document.querySelector("#weekly");
var monthly = document.querySelector("#monthly");



console.log(!daily.className === "active")
daily.addEventListener("click",() =>{
    console.log("clicked");
    fetch("./data.json")
        .then((res) => res.json())
        .then((res) => {
            let hoursWork = document.querySelector("#hours-work")
            let previousHoursWork = document.querySelector("#previous-hours-work")
            let hoursPlay = document.querySelector("#hours-play")
            let previousHoursPlay = document.querySelector("#previous-hours-play")
            let hoursStudy = document.querySelector("#hours-study")
            let previousHoursStudy = document.querySelector("#previous-hours-study")
            let hoursExercise = document.querySelector("#hours-exercise")
            let previousHoursExercise = document.querySelector("#previous-hours-exercise")
            let hoursSocial = document.querySelector("#hours-social")
            let previousHoursSocial = document.querySelector("#previous-hours-social")
            let hoursSelfcare = document.querySelector("#hours-selfcare")
            let previousHoursSelfcare = document.querySelector("#previous-hours-selfcare")
            console.log(hoursWork);
            console.log(res[0].timeframes.monthly.current)
            hoursWork.innerHTML = res[0].timeframes.daily.current + " hours";
            previousHoursWork.innerHTML = "Previous -- " + res[0].timeframes.daily.previous + " hours"
            hoursPlay.innerHTML = res[1].timeframes.daily.current + " hours";
            previousHoursPlay.innerHTML = "Previous -- " + res[1].timeframes.daily.previous + " hours"
            hoursStudy.innerHTML = res[2].timeframes.daily.current + " hours";
            previousHoursStudy.innerHTML = "Previous -- " + res[2].timeframes.daily.previous + " hours"
            hoursExercise.innerHTML = res[3].timeframes.daily.current + " hours";
            previousHoursExercise.innerHTML = "Previous -- " + res[3].timeframes.daily.previous + " hours"
            hoursSocial.innerHTML = res[4].timeframes.daily.current + " hours";
            previousHoursSocial.innerHTML = "Previous -- " + res[4].timeframes.daily.previous + " hours"
            hoursSelfcare.innerHTML = res[5].timeframes.daily.current + " hours";
            previousHoursSelfcare.innerHTML = "Previous -- " + res[5].timeframes.daily.previous + " hours"
        })
    weekly.classList.remove("active")
    monthly.classList.remove("active")
    daily.classList.add("active")
})

weekly.addEventListener("click",() => {
    console.log("clicked");
    fetch("./data.json")
        .then((res) => res.json())
        .then((res) => {
            let hoursWork = document.querySelector("#hours-work")
            let previousHoursWork = document.querySelector("#previous-hours-work")
            let hoursPlay = document.querySelector("#hours-play")
            let previousHoursPlay = document.querySelector("#previous-hours-play")
            let hoursStudy = document.querySelector("#hours-study")
            let previousHoursStudy = document.querySelector("#previous-hours-study")
            let hoursExercise = document.querySelector("#hours-exercise")
            let previousHoursExercise = document.querySelector("#previous-hours-exercise")
            let hoursSocial = document.querySelector("#hours-social")
            let previousHoursSocial = document.querySelector("#previous-hours-social")
            let hoursSelfcare = document.querySelector("#hours-selfcare")
            let previousHoursSelfcare = document.querySelector("#previous-hours-selfcare")
            console.log(hoursWork);
            console.log(res[0].timeframes.monthly.current)
            hoursWork.innerHTML = res[0].timeframes.weekly.current + " hours";
            previousHoursWork.innerHTML = "Previous -- " + res[0].timeframes.weekly.previous + " hours"
            hoursPlay.innerHTML = res[1].timeframes.weekly.current + " hours";
            previousHoursPlay.innerHTML = "Previous -- " + res[1].timeframes.weekly.previous + " hours"
            hoursStudy.innerHTML = res[2].timeframes.weekly.current + " hours";
            previousHoursStudy.innerHTML = "Previous -- " + res[2].timeframes.weekly.previous + " hours"
            hoursExercise.innerHTML = res[3].timeframes.weekly.current + " hours";
            previousHoursExercise.innerHTML = "Previous -- " + res[3].timeframes.weekly.previous + " hours"
            hoursSocial.innerHTML = res[4].timeframes.weekly.current + " hours";
            previousHoursSocial.innerHTML = "Previous -- " + res[4].timeframes.weekly.previous + " hours"
            hoursSelfcare.innerHTML = res[5].timeframes.weekly.current + " hours";
            previousHoursSelfcare.innerHTML = "Previous -- " + res[5].timeframes.weekly.previous + " hours"
        })
    daily.classList.remove("active")
    monthly.classList.remove("active")
    weekly.classList.add("active")
})

monthly.addEventListener("click",() =>{
    console.log("clicked");
    fetch("./data.json")
        .then((res) => res.json())
        .then((res) => {
            let hoursWork = document.querySelector("#hours-work")
            let previousHoursWork = document.querySelector("#previous-hours-work")
            let hoursPlay = document.querySelector("#hours-play")
            let previousHoursPlay = document.querySelector("#previous-hours-play")
            let hoursStudy = document.querySelector("#hours-study")
            let previousHoursStudy = document.querySelector("#previous-hours-study")
            let hoursExercise = document.querySelector("#hours-exercise")
            let previousHoursExercise = document.querySelector("#previous-hours-exercise")
            let hoursSocial = document.querySelector("#hours-social")
            let previousHoursSocial = document.querySelector("#previous-hours-social")
            let hoursSelfcare = document.querySelector("#hours-selfcare")
            let previousHoursSelfcare = document.querySelector("#previous-hours-selfcare")
            console.log(hoursWork);
            console.log(res[0].timeframes.monthly.current)
            hoursWork.innerHTML = res[0].timeframes.monthly.current + " hours";
            previousHoursWork.innerHTML = "Previous -- " + res[0].timeframes.monthly.previous + " hours"
            hoursPlay.innerHTML = res[1].timeframes.monthly.current + " hours";
            previousHoursPlay.innerHTML = "Previous -- " + res[1].timeframes.monthly.previous + " hours"
            hoursStudy.innerHTML = res[2].timeframes.monthly.current + " hours";
            previousHoursStudy.innerHTML = "Previous -- " + res[2].timeframes.monthly.previous + " hours"
            hoursExercise.innerHTML = res[3].timeframes.monthly.current + " hours";
            previousHoursExercise.innerHTML = "Previous -- " + res[3].timeframes.monthly.previous + " hours"
            hoursSocial.innerHTML = res[4].timeframes.monthly.current + " hours";
            previousHoursSocial.innerHTML = "Previous -- " + res[4].timeframes.monthly.previous + " hours"
            hoursSelfcare.innerHTML = res[5].timeframes.monthly.current + " hours";
            previousHoursSelfcare.innerHTML = "Previous -- " + res[5].timeframes.monthly.previous + " hours"
        })
    daily.classList.remove("active")
    weekly.classList.remove("active")
    monthly.classList.add("active")
})
