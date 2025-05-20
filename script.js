//your JS code here. If required.
const tar= document.getElementById('level');
let count= +0;
let curr= tar;
while(curr){
    count++;
    curr= curr.parentElement;
}
alert(`The level of the element is: ${count}`);