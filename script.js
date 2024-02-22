function foo() {
  var first1 = document.getElementById("first").value;
  var first2 = document.createElement("p");
  first2.innerHTML = `First name:${first1}`;
  var middle1 = document.getElementById("middle").value;
  var middle2 = document.createElement("p");
  middle2.innerHTML = `Middle name:${middle1}`;
  var last1 = document.getElementById("last").value;
  var last2 = document.createElement("p");
  last2.innerHTML = `Last name:${last1}`;
  var email1 = document.getElementById("email").value;
  var email2 = document.createElement("p");
  email2.innerHTML = `Email name:${email1}`;
  var pass1 = document.getElementById("pass").value;
  var pass2 = document.createElement("p");
  pass2.innerHTML = `Password:${pass1}`;

  document.body.append(first2, middle2, last2, email2, pass2);
}

function label_create(tag, att, attvalue, content) {
  var ele = document.createElement(tag);
  ele.setAttribute(att, attvalue);
  ele.innerHTML = content;
  return ele;
}

function break_create() {
  var ele = document.createElement("br");
  return ele;
}

function input_create(tag1, att1name, att1value, att2name, att2value) {
  var element = document.createElement(tag1);
  element.setAttribute(att1name, att1value);
  element.setAttribute(att2name, att2value);
  return element;
}

// function button_create(
//   tag2,
//   att3name,
//   att3value,
//   att4name,
//   att4value,
//   content1
// ) {
//   var button = document.createElement(tag2);
//   button.setAttribute(att3name, att3value);
//   button.setAttribute(att4name, att4value);
//   button.innerHTML = content1;
// }

var first = label_create("label", "for", "first", "First Name");
var first_br = break_create();
var first_input = input_create("input", "type", "text", "id", "first");
var first1_br = break_create();
var middle = label_create("label", "for", "middle", "Middle name");
var middle_br = break_create();
var middle_input = input_create("input", "type", "text", "id", "middle");
var middle1_br = break_create();
var last = label_create("label", "for", "last", "Last name");
var last_br = break_create();
var last_input = input_create("input", "type", "text", "id", "last");
var last1_br = break_create();
var email = label_create("label", "for", "email", "Email");
var email_br = break_create();
var email_input = input_create("input", "type", "email", "id", "email");
var email1_br = break_create();
var pass = label_create("label", "for", "pass", "Password");
var pass_br = break_create();
var pass_input = input_create("input", "type", "password", "id", "pass");
var pass1_br = break_create();

var button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("onclick", "foo()");
button.innerHTML = "submit";

document.body.append(
  first,
  first_br,
  first_input,
  first1_br,
  middle,
  middle_br,
  middle_input,
  middle1_br,
  last,
  last_br,
  last_input,
  last1_br,
  email,
  email_br,
  email_input,
  email1_br,
  pass,
  pass_br,
  pass_input,
  pass1_br,
  button
);

// var first = document.createElement("label");
// first.setAttribute("for","firstname");
// first.innerHTML = "First Name";

// var break1 = document.createElement("br");

// var input = document.createElement("input");
// input.setAttribute("type","text");
// input.setAttribute("id","firstname");

// var break2 = document.createElement("br");

// var middle = document.createElement("label");
// middle.setAttribute("for","middlename");
// middle.innerHTML = "Middle Name";

// var break3 = document.createElement("br");

// var middle_input = document.createElement("input");
// middle_input.setAttribute("type","text");
// middle_input.setAttribute("id","middlename");

// var break4 = document.createElement("br");

// var button = document.createElement("button");
// button.setAttribute("type","button");
// button.setAttribute("onclick","foo()");
// button.innerHTML = "submit";

// document.body.append(first, break1,input,break2,middle,break3,middle_input,break4,button);

// var container = document.createElement("div");
// var row = document.createElement("div");
// var col = document.createElement("div");
// container.classname = "container";
// row.className = "row";
// col.className = "col";
// col.innerHTML = "this is col";

// row.append(col);
// container.append(row);

// document.body.append(container);
