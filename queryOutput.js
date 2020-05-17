const querystr = "/register?name35&width=39&time=2000";

const usp = new URLSearchParams(querystr);



const myName = usp.get("name");
const myWidth = usp.get("width");
const myTime = usp.get("time");


var divi = document.createElement('div');




divi.innerHTML = "Value for 'name': ${myName}";


divi.innerHTML = "Value for 'width': ${myWidth}";


divi.innerHTML = "Value for 'time': ${myTime}";
