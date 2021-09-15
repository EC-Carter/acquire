export const yearsBetween = (startYear = 1850, endYear) => {
    const endDate = endYear || new Date().getFullYear();
    let years = [];

    for(let i = startYear; i <= endDate; i++){
        years.push(startYear);
        startYear++;
    }
    let yearsReversed = []
    years.forEach(year =>{
        yearsReversed.unshift(year)
    })
    
    
    return yearsReversed;
}