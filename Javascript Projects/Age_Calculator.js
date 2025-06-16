let calculateAge = (day,month,year) =>{

    const text = document.getElementById("age")
    const currentDay = new Date()
    const birthDate = new Date(year, month-1, day);
    let age = currentDay.getFullYear() - birthDate.getFullYear

    text.innerHTML = age
}