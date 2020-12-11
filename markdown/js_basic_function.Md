Section 09. Loops
=====================  
Section 09. Loops and Iterations
=====================

### Different Types of Loops in JavaScript:

---

1. for loop
2. while loop
3. do...while loop
4. for...in loop
5. for...of loop (ES6)
6. for...each

## 09.01. The for loop

- `For` để thực hiên một đoạn lệnh n lần

```javascript
for (let i = 1; i <= 5; i++) {
  alert('Hello, The current index/num is: ' + i);
  document.write('<li>Hello, The current index/num is: ' + i + '</li>');
  console.log('Hello, The current index/num is: ' + i);
}
```

## 09.02. The while loop

- Lặp đến khi điều kiện trong while còn đúng

```javascript
let i = 1;

while (i <= 5) {
  alert('Hello, The current index/num is: ' + i);
  document.write('<li>Hello, The current index/num is: ' + i + '</li>');
  console.log('Hello, The current index/num is: ' + i);
  i++;
}
```

## 09.04. The for...in loop - array

- for-in lặp qua từng thuộc tính của một đối tượng trong mảng

```javascript
let arrColors = ['Red', 'Green', 'Blue', 'Cyan', 'Magenta', 'Yellow', 'Black'];

// Loop through all the elements in the array
for (let color in arrColors) {
  alert('Color is: ' + arrColors[color]);
  document.write('<li>Color is: ' + arrColors[color] + '</li>');
  console.log('Color is: ' + arrColors[color]);
}
```

#### 09.04.02. The for...in Loop - object

- lặp qua từng thuộc tính và từng giá trị của object đó

```javascript
let objEmployee = {
  emp_name: 'Dinanath',
  emp_addres: 'Mumbai',
  emp_id: '029',
  emp_age: 35,
};

// Loop through all the properties in the object
for (emp in objEmployee) {
  alert('Employee ' + emp + ' is: ' + objEmployee[emp]);
  document.write('<li>Employee ' + emp + ' is: ' + objEmployee[emp] + '</li>');
  console.log('Employee ' + emp + ' is: ' + objEmployee[emp]);
}
```

#### 09.04.03. The for ...in Loop

```javascript
// Loop through all the properties in the inbuilt object - window, document, navigator
for (props in window) {
  // alert('document object properties ' + props);
  document.write('<li>document object properties ' + props + '</li>');
  console.log('document object properties ' + props);
}
```

## 09.05. The for of loop

## 09.05. The for...of loop (ES6)

- for ... of để lặp qua từng phần tử của mảng hoặc string giúp xử lý code dễ dàng hơn

```javascript
// for...of loop

// Iterating over an array
let arrDays = [
  'Monday',
  'TuesDay',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

for (let day of arrDays) {
  console.log(day);
  document.write('<li>' + day + '</li>');
}

// Iterating over string
let name = 'JavaScript';
for (let letter of name) {
  document.write(letter + ',');
  console.log(letter + ',');
}
```

## 09.06. Break and Continue statement

- `break` và `continue` là từ khóa để vòng lặp dừng lại hoặc tiếp tục chạy

```javascript
// break continue statement

/* break */
let arrDays = [
  'Monday',
  'TuesDay',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

let i = 1;
while (i <= 10) {
  if (i == 5) {
    break;
  }
  console.log(i);
  i++;
}

console.log('// ------------------------------');

for (let i = 0; i <= arrDays.length; i++) {
  if (i == 3) {
    break;
  }
  console.log(arrDays[i]);
}

console.log('// ------------------------------');

/* continue */
i = 1;
while (i <= 20) {
  if (i % 2 == 0) {
    // console.log('Even Number ', i);
    i++;
    continue; // skip rest of the loop body

    i + 100; // non of use
    console.log('just in even num continue'); // non of use
  }
  console.log('Odd Number ', i);
  i++;
}

console.log('// ------------------------------');

for (i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // skip rest of the loop body
    console.log('just after 5 continue...'); // non of use
  }
  console.log(i);
}

console.log('// ------------------------------');

for (let int = 0; int < 10; int++) {
  if (int === 2) {
    console.log('2 is favorite EVEN number');
    continue;
  }

  if (int === 5) {
    console.log('at 5 stop the loop');
    break;
  }

  console.log('current Number is:', int);
}
```

## 09.07. for each loop

## 09.07. for...each loop

- lặp qua tất cả phần tử của mảng và nhanh hơn so với lặp thường(- có thể break vòng lặp khi chưa đến phần tử cuối) nên dùng nhiều hơn

```javascript

let arrDays = ["Monday", "TuesDay", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

arrDays.forEach(function(day)){
  console.log(day);
}

```

# Section 10. Conditions

# Section 10. Conditions - Control Flow

---

- để check các điều kiện ta dùng để điều khiển luồng trong code: >, <, >=, <=, ==, !=, ===

#### định hướng luồng đi trong code:

1. If Statement
2. If...else Statement
3. If...else if...else Statement
4. Switch...Case Statement

## 10.01. Câu lệnh điều kiện if

```javascript
let user = 'Dinanath';

if (user == 'Dinanath') {
  console.log('Welcome Dinanath!');
  window.alert('Welcome Dinanath!');
}

if (user == 'Dinanath') {
  console.log('Welcome Authorised User: ' + user + '!');
  window.alert('Welcome Authorised User: ' + user + '!');
}

// ------------------------------

let age = 20;

if (age >= 18) {
  console.log('MAJOR! Eligible for Voting');
  window.alert('MAJOR! Eligible for Voting');
}

// ------------------------------

let currentHours = 10;

if (currentHours < 12) {
  console.log('Good Morning!');
  window.alert('Good Morning!');
}

if (currentHours >= 6 && currentHours < 12) {
  console.log('Good Morning!');
  window.alert('Good Morning!');
}
```

## 10.02. The if else statement

- Trong JavaScript `if...else statement` phần else sẽ xảy ra khi điều kiện trong if() trả về false

```javascript
let user = 'Ambar';

if (user == 'Dinanath') {
  console.log('Welcome Dinanath!');
  window.alert('Welcome Dinanath!');
} else {
  console.log('Welcome Guest!');
  window.alert('Welcome Guest!');
}

// ------------------------------

let age = 15;

if (age >= 18) {
  console.log('MAJOR! Eligible for Voting');
  window.alert('MAJOR! Eligible for Voting');
} else {
  console.log('MINOR! NOT Eligible for Voting');
  window.alert('MINOR! NOT Eligible for Voting');
}
```

## 10.03. The if else if else statement

## 10.03. The if...else, if...else statement

- Lệnh `if...else if...else` sẽ chạy khi một trong các điều kiện của if() đúng nếu không sẽ rơi vào trường hợp default else cuối cùng

```javascript
let num1 = 200;
let num2 = 100;

if (num1 == num2) {
  console.log('Both numbers are equal');
} else if (num1 < num2) {
  console.log('Number2 is greater!');
} else {
  console.log('Number1 is greater!');
}
```

## 10.04. The switch case statement

## 10.04. The switch...case statement

- Lệnh switch...case được thực hiện khi biến trong switch() đúng với một trong các trường hợp của case ...: nếu không sẽ rơi vào trường hợp default:

```javascript
let grade = 'B'; // A.B,C, or something

switch (grade) {
  case 'A':
    console.log('Great Job! - A Grade');
    break;
  case 'B':
    console.log('Good! - B Grade');
    break;
  case 'C':
    console.log('Congratulations! - Passed');
    break;
  default:
    console.log('Sorry! - Failed...Keep trying!');
    break;
}

// ------------------------------

let sweets = ''; //cake, chocolates, biscuits

switch (sweets) {
  case 'chocolates':
    console.log('Chubby Chocolates!');
    break;
  case 'cake':
    console.log('Happy BirthDay Cake!');
    break;
  case 'biscuits':
    console.log('Enjoy Biscuits!');
    break;
  default:
    console.log('No Sweets! Try some other sweets!');
    break;
}
```

# Section 12. Objects

## 12.01. Real Life Objects

---

## 12.01. Object Properties and Method examples

- Trong cuộc sống hầu hết mọi thứ đều là object.
  - For example: Human, Car, Building, Bike, Pen, Chair, Monitor, Keyboard, Vehicle, Mobile, Computer etc.
- Example:

| Object | Properties                                                                                                                            | Methods                                                 |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Person | Person.name = 'dinanath'; <br/> Person.weight = 65; <br/> Person.color = 'fair'                                                       | Person.walk(); <br/> Person.talk(); <br/> Person.eat(); |
| Bike   | Bike.brand = 'bajaj'; <br/> Bike.model = 'discover'; <br/> Bike.color = 'blue'; <br/> Bike.length = 60; <br/> Bike.height = 30; <br/> | Bike.start(); <br/> Bike.break(); <br/> Bike.stop();    |
| Watch  | Watch.type = 'analog'; <br/> Watch.price = 750; <br/>                                                                                 | Watch.showTime(); <br/> Watch.setAlarm();               |

## 12.02. What are the Objects?

### Different ways to create/define an Object

- Object có dạng {property: value }

- Example: var MyObject = { property1: value1, property2: value2.....propertyN: valueN }

- Có 3 cách chính để tạo object

```javascript
// Khai báo giá trị vào trực tiếp object
var VehicleObj1 = {
  type: 'LWM',
  brand: 'Maruti',
  model: 'Alto-100',
  color: 'White',
  isHighEndModel: true,
  price: 400000,
  keyStart: function () {
    console.log(this.model + ' started!');
  },
};

console.log(VehicleObj1.brand);
console.log(VehicleObj1['color']);
VehicleObj1.keyStart();
```

## 12.04. Creating an instance of Object directly

- Khai báo một object sau đó gán các property cho nó khi cần dùng đến

> **Syntax & Example**:

```javascript
var TechnologyObj = new Object();

TechnologyObj.name = 'JavaScript';
TechnologyObj.version = 6;
TechnologyObj.type = 'script';
TechnologyObj.isStable = true;

console.log(TechnologyObj.name);
console.log(TechnologyObj['type']);
```

## 12.05. Object constructor

## 12.05. Object constructor (using the new keyword)

- Khai báo với một contructor đã có từ trước

```javascript
// create an object with new keyword - Object constructor with function

function Technology(name, version, type) {
  this.name = name;
  this.version = version;
  this.type = type;
  console.log(this.name);
  console.log(this.type);
}

let JavaScript = new Technology('JavaScript', 6, 'Script Language');
console.log(JavaScript.version);

console.log('// ------------------------------');

function Vehicle(brand, model, color, price) {
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.price = price;
  this.keyStart = function () {
    console.log(this.model + ' started!');
  };
}

var Maruti = new Vehicle('Maruti', 'Alto-100', 'White', 400000);
Maruti.keyStart();
```

## 12.06. Accessing objects properties

## 12.06. Looping through Objects properties

- Để lấy các giá trị của một object ta có thể dùng `.property` hoặc `object[property]` để lấy trực tiếp giá trị đó hoặc dùng for in để lặp qua tất cả các thuộc tính của nó.

```javascript
var Person = {
  name: 'Dinanath',
  domain: 'IT/Software',
  gender: 'Male',
  city: 'Mumbai',
  country: 'India',
};

console.log(Person.name);
console.log(Person['domain']);

for (properties in Person) {
  console.log(Person[properties]);
}
```

## 12.07. Removing Deleting objects properties

- Xóa một thuộc tính ta dùng từ khóa `delete MyObject.propertyName;`.

```javascript
var Person = {
  name: 'Dinanath',
  domain: 'IT/Software',
  gender: 'Male',
  city: 'Mumbai',
  country: 'India',
};

delete Person.name;
console.log(Person);
console.log(Person.name);
console.log(Person['domain']);
```

> Note: Tất cả các đầu mục được giữ nguyên phục vụ cho việc thuận tiện trong search từ tài liệu mẫu bằng tiếng anh nên các đầu mục sẽ không được mạch lạc và liên tiếp.

### tham khảo tại và đã lược bỏ một số phần không cần thiết

#### [source document: https://github.com/dinanathsj29/javascript-beginners-tutorial#section-09-loops](https://github.com/dinanathsj29/javascript-beginners-tutorial#section-09-loops)
