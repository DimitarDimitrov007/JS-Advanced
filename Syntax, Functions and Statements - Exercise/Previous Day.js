function previousDay(year,month,day){
    let dateFormat = `${year}-${month}-${day}`;
    let result = new Date(dateFormat);

    result.setDate(result.getDate() - 1);
    console.log(`${result.getFullYear()}-${result.getMonth() + 1}-${result.getDate()}`);

    

}
previousDay(2016, 9, 30);
previousDay(2016, 10, 1);