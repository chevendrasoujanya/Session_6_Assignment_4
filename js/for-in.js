// To Display Employee Details which are stored in an Array of Objects
var employees = [
	{name: "John", age: 28, salary: 25000, address: {city: "Bangalore", state: "Karnataka", pincode: "560071"}},
	{name: "Smith", age: 30, salary: 50000, address: {city: "Hyderabad", state: "Telangana", pincode: "500013"}},
	{name: "Thomson", age: 32, salary: 100000, address: {city: "Mangalore", state: "Karnataka", pincode: "520075"}},
	{name: "Robert", age: 26, salary: 125000, address: {city: "Mysore", state: "Karnataka", pincode: "5300210"}},
	{name: "Stephen", age: 24, salary: 15000, address: {city: "Vijayawada", state: "Andhra Pradesh", pincode: "520011"}}
];


for(var employee in employees)
{
	console.log("Name: " +employees[employee].name);
	console.log("Age: " +employees[employee].age);
	console.log("Salary: " +employees[employee].salary);
	console.log("City: " +employees[employee].address.city);
	console.log("State: " +employees[employee].address.state);
	console.log("Pincode: " +employees[employee].address.pincode);
}

