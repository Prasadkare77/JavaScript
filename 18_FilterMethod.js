
const array = [23,56,78,9,5,4,0,33,21];
//WAp to get the element is greater than 50

const arrayGreaterThan50 = array.filter((elememt) => {
    return elememt>50;
});
console.log(arrayGreaterThan50);

const newArray = [];
for (const elememt of array) {
    if (elememt>50) {
        newArray.push(elememt);
    }
}
console.log(newArray);

// WAP to get all even number from the array
const evenElement = array.filter((elememt) => {
    return elememt%2 == 0;
})
console.log(evenElement);

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

const tcsEmployee = array_employees.filter((elememt) => {
    return elememt.emp_company == "TCS";
}).map((employee) => {
    return employee.emp_name;
})
console.log(`${tcsEmployee}`);

const tcsEmployeeName =  tcsEmployee.map((employee) => {
    return employee.emp_name;
})
console.log(`${tcsEmployeeName}`);

// for (const emp of tcsEmployee) {
//     console.log(emp.emp_name);
// }

console.log(`Get the list of employee id's whose salary is greater than equal 75000`);
const empid = array_employees.filter((employee) => {
    return employee.emp_salary >= 75000;
}).map((id) => {
    return id.emp_id;
})
console.log(empid);