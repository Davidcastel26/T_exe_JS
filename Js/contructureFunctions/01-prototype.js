function  User(firstName, lastName, age, gender){
    this.firstName = firstName;
    this.lastName =  lastName;
    this.age=  age;
    this.gender = gender;
}

var user1 = new User('Dave','L', 26, 'male');
var user2 = new User('Jill','Robinson', 25,'female')

User.prototype.emailDomain = '@facebook.com';

User.prototype.getEmailAddress = function(){
  return this.firstName + this.lastName + this.emailDomain;
}
user1.getEmailAddress();