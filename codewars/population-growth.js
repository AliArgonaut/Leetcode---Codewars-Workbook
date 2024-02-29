//p0 is starting population
//percent is percent growth per year
//aug is the constant number of people coming per year
//p is the target population
function growth(p0, percent, aug, p){
    let yrs = 0
    isRunning = true
    while (isRunning){
        if(p0 < p){
            yrs += 1;
            p0 = Math.floor(p0 + (p0 * (percent/100)) + aug);
        }
        else{
            console.log(yrs)
            isRunning = false
        }
    }
}

growth(1000, 2, 50, 1200)