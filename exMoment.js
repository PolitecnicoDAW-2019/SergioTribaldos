/*Crear un array de empleados con name,money,timezone, date (10/01/2019--10:30:00),updated_at
crear funcion diffDates(date1,date2):boolean
            sumDates(date, UnitTimes[array de unit times]):moment (clonar la date que entra)
            setDateEmployee(nameDeEmployee)-->transformar campo date: con un moment, updatedat: momentoActual
            sumDiffDate(arrayEmpleados[])-->sumar la diferencia de fechas




const DATE_FORMAT= 'DD/MM/YYYY'
const DATE_FORMAT_LONG='DD/MM/YYYY hh:mm:ss'
*/

const moment = require("moment");

let employees = [
    {
        name: "Paco",
        money: 150,
        timezone: "Madrid",
        date: moment('2017-1-23'),
        updated_at: ""
    },
    {
        name: "Maria",
        money: 190,
        timezone: "Berlin",
        date: moment('2017-1-9'),
        updated_at: ""
    },
    {
        name: "Sergio",
        money: 250,
        timezone: "France",
        date: moment('2017-1-12'),
        updated_at: ""
    },
];

const DATE_FORMAT = 'DD/MM/YYYY';
const DATE_FORMAT_LONG = 'DD/MM/YYYY hh:mm:ss'
/*
const diffDates = (date1,date2)=> date1===date2 ? true : false
let date1=moment("2014-02-27T10:00:00").format(DATE_FORMAT);
let date2 =moment("2014-02-27T10:00:00").format(DATE_FORMAT);
console.log(diffDates(date1,date2))

const sumDates = (date,{month,day})=>{
    let originalDate = date.clone();
    console.log("fecha original "+date.format(DATE_FORMAT))
   date=date.add(month,'month').add(day,'day')
   console.log("fecha sumada "+date.format(DATE_FORMAT));
}
let date = moment('2014-04-12');
sumDates(date,{month:2,day:1})

const setDateEmployee = (employeeName,date) => {
    let selectedEmployee=employees.find(({ name }) => name === employeeName)
    selectedEmployee.date = moment(date);
    selectedEmployee.updated_at = moment();
    console.log(
        `Fecha cambiada al usuario ${employeeName}:${selectedEmployee.date.format(DATE_FORMAT)}
        Fecha de modificacion: ${selectedEmployee.updated_at.format(DATE_FORMAT_LONG)}
                `)
}
setDateEmployee('Sergio','2018-4-5')
*/

const diffDate = (date1,date2)=>date1.diff(date2,'days');

//console.log(diffDate(employees[0].date,employees[1].date))

const sumDiffDate = (employees)=>{
    const employeesDate = employees.map((employee)=>employee.date);
    const dateDiffs=employeesDate.map((value,index,arrEmployees)=>{  
        let t = diffDate(arrEmployees[0],value)
        return t;
    }).reduce((sum,current)=>sum+current)
    console.log(dateDiffs)
    let weeksElapsed=Math.floor(dateDiffs/7)
    let daysElapsed=dateDiffs-(weeksElapsed*7)
    console.log(`La diferencia de la suma de fechas es ${+weeksElapsed} semanas y ${+daysElapsed} dias`)

}

sumDiffDate(employees)


