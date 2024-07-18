// To compare two JSON objects to determine if they have the same properties and values, regardless of order, you can use the following JavaScript function. This function converts the objects into arrays of their key-value pairs, sorts these arrays, and then compares them
console.log("working");
function compareJSON(obj1, obj2) {

  const obj1Entries = Object.entries(obj1).sort();
  const obj2Entries = Object.entries(obj2).sort();

 
  return JSON.stringify(obj1Entries) === JSON.stringify(obj2Entries);
}

var obj1 = {name: "person1", age: 5};
var obj2 = {age: 5, name: "Person1"};

console.log(compareJSON(obj1, obj2));
//-------------------------TASK  3 JASON---------------------------------//
let vgd = new XMLHttpRequest();
console.log(vgd);
vgd.open("get","https://restcountries.com/v3.1/all");
vgd.send();
vgd.onload=function(){
    const data = JSON.parse(vgd.response);
    console.log(data[0]);
    for(let i = 0; i<data.length; i++){
        console.log("name:",data[i].name.common);
        console.log("region:",data[i].region);
        console.log("subregion:",data[i].subregion);
        console.log("population:",data[i].population);
        console.log("flag:", data[i].flags.png);
        
    };    
};
//------------------finally I have written flags name,name,region,subregion and population in the console box---------------------//

    
