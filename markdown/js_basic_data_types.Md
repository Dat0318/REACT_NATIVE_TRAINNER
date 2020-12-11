# JavaScript data types tutorial

Trong js có nhiều kiểu dữ liệu, ta chỉ nói đến các kiểu dữ liệu hay dùng trong react native, cụ thể là 3 loại sau: string, array và object.

JS STRING - là kiểu chuỗi, Date time cũng là kiểu string nên a dùng được các method của nó.

# JS String

---

tìm vị trí của một chuỗi ký tự trong một chuỗi khác cho trước

```javascript
var txt = 'abcdefghijklm';
var pos = txt.indexOf('h');
```

> note: check một chuỗi có tồn tại trong chuỗi khác hay không ta dùng includes kết quả trả về là true hoặc false. còn indexOf thì trả về index của chuỗi thường dùng để cắt nối hoặc xóa một phần tử nào đó:

```javascript
var txt = "abcdefghijklm";
var check = txt.includes('h'); ⇒ true / false
```

cắt chuỗi "bananas" trong đoạn chuỗi cho trước với splice

```javascript
var txt = I can eat bananas all day";
var x = txt.slice(10,17);
```

thay đổi "Hello" thành "Welcome" với hàm replace.

```javascript
var txt = 'Hello World';
txt = txt.replace('Hello', 'Welcome');
```

ép kiểu chuỗi về in hoa upper case.

```javascript
var txt = 'Hello World';
txt = txt.toUpperCase();
```

ép kiểu chuỗi về in thường lower case.

```javascript
var txt = 'Hello World';
txt = txt.toLowerCase();
```

# JS array

---

Mảng trong JavaScript được sử dụng để lưu trữ nhiều giá trị trong một biến duy nhất.

```javascript
var cars = ['Saab', 'Volvo', 'BMW'];
var x = cars[1];
```

#### METHOD

`myVector.toString();` trả về mảng với kiểu dữ liệu là chuỗi mà mỗi phần tử cách nhau bởi dấu phẩy<br/>
`myVector.join("");` chuyển mảng thành chuỗi string mỗi phần tử cách nhau bởi đấu cách<br/>
`myVector.pop();` xóa phần tử cuối cùng của mảng<br/>
`myVector.push("wew");` Thêm một phần tử mới vào đầu mảng<br/>
`myVector.shift();` xóa phần tử đầu tiên của mảng<br/>
`myVector.unshift("we");` thêm một phần tử vào đầu mảng<br/>
`fruits.splice(0, 1);` xóa 1 phần tử từ vị trị số 0<br/>
`var arr3 = arr1.concat(arr2);` nối hai mảng với nhau tạo thành mảng duy nhất<br/>

# JS dates

---

bản chất là một chuỗi string, cái này hay dùng mommet để ép về kiểu mà mình muốn sử dụng.
[Tham khảo https://momentjs.com/](https://momentjs.com/)

```javascript
var date = moment('2020 / 10 / 31', 'YYYY / MM / DD');
```

định dạng kiểu dữ liệu nhập vào và format của dữ liệu đó
sau đó dùng ` format(``) ` để định dạng về kiểu chuỗi cần dùng

# JS Math

---

`Math.ceil(4.1)` làm tròn nên khi lớn hơn 0.5<br/>
`Math.floor(4.9)` làm tròn xuống khi bé hơn hoặc bằng 0.99<br/>

# JS Object

---

kiểu dữ liệu với các biến là key value ví dụ như bên dưới

```javascript
var person = {
  firstName: 'John',
  lastName: 'Doe',
};
alert(person.firstName);
```

#### [source document: https://github.com/omonimus1/BeginnerJSTutorial-](https://github.com/omonimus1/BeginnerJSTutorial-)

#### [document để tìm hiểu thêm www.w3schools.com - javascript](https://www.w3schools.com/js/js_math.asp)
