function calculate(){
    let userDate = new Date(document.getElementById("userInput").value + " 00:00:00")
    let userDateInMilliSec = userDate.getTime();
    let currentDate = new Date().getTime();
    let diffInMilliSec = currentDate - userDateInMilliSec;

    let totalYearsOld = Math.floor(diffInMilliSec / (1000*60*60*24*365.25))
    let remainderOfYears = diffInMilliSec % (1000*60*60*24*365.25)
    let totalMonthsOld = Math.floor(remainderOfYears / (1000*60*60*24*30.44))
    let remainderOfMonth = remainderOfYears % (1000*60*60*24*30.44)
    let totalDaysOld = Math.floor(remainderOfMonth / (1000*60*60*24));
   let parent = document.getElementById("parent")
    let age = document.getElementById("result")
    let daysLeft = document.getElementById("daysLeft")
   parent.classList = ["parent"]
 
  
 
    age.innerHTML = `<h1>Age:</h1> You are ${totalYearsOld} years ${totalMonthsOld} months and ${totalDaysOld} days old`
    age.classList = ["para"];
    let birthdayDateThisYear = userDate;
    birthdayDateThisYear.setFullYear(new Date().getFullYear());
    if (new Date().getMonth() > userDate.getMonth() || (new Date().getMonth() === userDate.getMonth() && new Date().getDate() > userDate.getDate())) {
        birthdayDateThisYear.setFullYear(new Date().getFullYear() + 1);
    }

    let nextBirthdayDiffInMiliSec = birthdayDateThisYear - currentDate;
    let daysLeftInNextBirthday = Math.floor(nextBirthdayDiffInMiliSec / (1000*60*60*24))

    daysLeft.innerHTML = `<h1>Days Left:</h1>There are ${daysLeftInNextBirthday} days left in your next birthday`
    daysLeft.classList = ["para1"];
    
}

