var people = [];
people = ['love', 'cybersoft', 'cyber', 5, 5.4, true, false, 'hello'];
people.push('CyberLearn');
people.push('CyberLearn new ');
console.log(people);
//Duỵet theo index
/*for(var i = 0; i< people.length; i++){
    console.log(people[i]);
}*/

//Duỵet theo từng phần tử item dùng for..of
/*for(var item of people){
    console.log(item);
}
*/

//duyệt theo while
var i = 0;
while (i < people.length) {
  console.log(people[i]);
  i++;
}
