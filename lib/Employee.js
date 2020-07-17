// TODO: Write code to define and export the Employee class
class Employee {
 constructor(extname, id, email){
    this.name = extname
    this.id = id
    this.email = email
 }

 getName() {
     return this.name;
 }
 getId () {
      return this.id;
 }
 getEmail () {
    return this.email;
 }

 getRole () {
      return "Employee";
 }
}

module.exports = Employee;
  