// ------------------------ First Query ---------------
//          -------- Creating Rectangle Class -----------

class Rectangle {
    constructor(height , width){
        this.height = height;
        this.width = width;
    }
    //   -------------  Adding getArea Method --------
    get area(){
        return this.calcArea();
    }
    calcArea(){
        return this.height * this.width;
    }
}
//    ------------- Creating Obj Rectangle Class -----------
const obj = new Rectangle(3,5);

//  ------------- Print instances-----------
document.write("This is height of rectangle : " +obj.height);
document.write("<br>")
document.writeln("This is width of rectangle : " +obj.width);
document.write("<br>")

// ----------------- 2nd Query--------------
//       ------ Calculating Area------------
document.write("================  2nd Query =================")
document.write("<br>")
document.write("Area of rectangle : " +obj.area);
document.write("<br>")


// ------------------4th Query----------------
var emp = {
    firstName: "Deepak",
    lastName: "Singh"
}
document.write("=============== 4th Query  ==================")
document.write("<br>");
document.write("This is Firstname : " +emp.firstName);
document.write("<br>");
document.writeln("This is Lastname : " +emp.lastName);
document.write("<br>");

//---------5th query-------------
document.write("=================  5th Query ================")
document.write("<br>");
emp.middleName = "Kumar";
document.write("This is middle Name : "+emp.middleName);
document.write("<br>");
document.write("Name of Emp is : "+ emp.firstName+ " " + emp.middleName +" " + emp.lastName)
document.write("<br>");

// this is depend on situation.


// ----------6th Query -----------------------
document.write("================ 6th Query =================")
document.write("<br>");


var str = '({"firstName":"Deepak","lastName":"Singh"})';
var obj2 = eval(str);


document.write("<br>");
document.write("This is Firstname : " , obj2.firstName);
document.write("<br>");
document.write("This is Lastname : " +obj2.lastName);
document.write("<br>");

// --------- 7 query -----------
document.write("================ 7th Query =================")
document.write("<br>");

class person{
    constructor(fname,lname,age,skills,dateofbirth,address,married,profession){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
        this.skills=skills;
        this.dateofbirth=dateofbirth;
        this.address=address;
        this.married=married
        this.profession=profession;
        this.lname=this.lname;
        var JSON_DATA={};
        if (typeof fname == 'string') {
            JSON_DATA['fname']=fname;
        }
        if (typeof lname == 'string') {   
        JSON_DATA['lname']=lname;
        }    
        if (typeof age == 'number')
        {
        JSON_DATA['age']=age;
        }  
        if (typeof skills == 'object') {
            JSON_DATA['skills']=skills; 
            }
        if (typeof dateofbirth == 'number')
        {
        JSON_DATA['dateofbirth']=dateofbirth;
        }  
        if (typeof address == 'object')
        {
        JSON_DATA['address']=address;
        }  
        if (typeof married == 'boolean')
        {
        JSON_DATA['married']=married;
        } 
        if (typeof profession == 'string') {
            JSON_DATA['profession'] = profession;
        }   
        return JSON_DATA;
    }
}
person1= new person("nikhil","singh",'37',["java","spring"],"24/20/2021",{city:"varanasi",pincode:"221208"},false,"Analyst");
person2 = new person("harish","chinna",21,"HTML","08/10/1992",{city:"Ameerpet",pincode:"221212"},true,"jr analyst")

print=function(){
    console.log(person1);
    console.log(person2);
}(); 

amithab = new person("amitabh","bachan",26,['c'],"24/10/1996",{city:"hyderbad",pincode:'521183'},false,"sr analyst");
abisheik = new person("abisheik",22,['c'],"24/10/1996",false,"sr analyst")
var abisheik = Object.create(amithab);
Aradhya = new person("aradhya",16,['D'],"20/10/15");
var Aradhya = Object.create(amithab,abisheik);
print=function(){
    console.log(amithab);
    console.log(abisheik.lname);
    console.log(abisheik.address);
    console.log(Aradhya.profession);
}();
