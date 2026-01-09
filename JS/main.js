/*
//string - ตัวอักษร
let fname = 'John'
console.log('name',fname,)
//const เปลี่ยนค่าไม่ได้

let age = 30
let height = 150.5
const pi = 3.14
fname = 'Tom'


idcard = '456'


//Boolean
let isThai = false

console.log('idcard',idcard)


console.log('name',fname, 'age',age)
//console.log('age',age)
*/

/**
 + บวก
 - ลบ
 * คูณ
 / หาร
 % หารเอาเศษ
 */
/**
 condition statment(if,else,switch)
 == เท่ากับ 
 != ไม่เท่ากับ
 > มากกว่า
 < น้อยกว่า

 */

/*
 let number1 = 'Thanadon' //string
 let number2 =  'Promon'
 let number3 = number1 + '  ' + number2
 console.log('number3 = ',number3)
 */

/*
let number1 = 5
 let number2 =  3
 let condition1 = number1 >= number2
 console.log('Condition is = ',condition1)
*/
/*
let number1 = 5
let number2 = 5

//if-else condition

if(number1>number2){
    console.log('This if')
}
else if (number1==number2)
{
    console.log('This else if')
}else{
    console.log('This else')
}
*/

/*
Grade
>= 80 A
>= 70 B
>= 60 C
>= 50 D
 */

/*
let score = prompt('ใส่ตัวเลข')
if(score>=80){
    console.log('Grade A')
}else if(score>=70){
    console.log('Grade B')
}else if(score>=60){
    console.log('Grade C')
}else if(score>=50){
    console.log('Grade D')
}else{
    console.log('Grade F')
}
    */

/**
 && และ
 || หรือ
 ! ไม่
 */

 /*
 let number1 = 5
 let number2 = 10

 let condition = number1 >= 3 || number2 >=11
 console.log('result of condition',condition)
 */

 /*
 let number = 20
 if (number %2 == 0){
    console.log('you are event.')
 }
    */

 /**
  for
  */
 /*
  let counter = 0
  while(counter <10){
    console.log('Hi')
    counter = counter+1
  }

  for (let counter = 0 ;counter <10; counter++)
    console.log('Hi')
  */

  /*
  array
  */
/*
  let age1 = 20
  let age2 = 25
  let age3 = 30
  let ages = [20,35,30]
  ages = [200,100,50]

  console.log('age1 age2 age3',age1,age2,age3)
  console.log(`age1 age2 age3 ${age1} ${age2} ${age3}`)
  console.log('arrey',ages)

  console.log('index',ages[0])

  //ต่อ array
  ages.push(25)
  console.log('push array',ages)

  // ลบ array
  ages.pop()
  console.log('pop array',ages)
*/
/*
let ages = [50,20,25,30,35,40]

ages.sort()
console.log(ages)

let name_list = ['aa','bb','cc']
name_list.push('dd')
console.log(name_list)

name_list.pop()
console.log('pop name list',name_list)
console.log('name_list',name_list.length)
console.log('name_list',name_list[0])
console.log('name_list',name_list[1])
console.log('name_list',name_list[2])

for (let index = 0 ; index < name_list.length;index++){
    console.log('Name_list',name_list[index])
}
    */

/*
object
 */

/*
let student =[{
    age: 30,
    name: 'aa',
    grade: 'A',
},{
    age: 35,
    name: 'bb',
    grade: 'B',
}]
student.push({
    age:40,
    name: 'cc',
    grade: 'C'
})
*/
/*
student.pop()

for(let index = 0;index < student.length; index++){
    console.log('Student Number',(index+1))
    console.log('age',student[index].age)
    console.log('age',student[index].name)
    console.log('age',student[index].grade)
}


/*
console.log(student)
console.log(student.age)
console.log(student.name)
console.log(student.grade)


let age1 = 30
let name1 = 'aa'
let grade1 = 'A'

let age2 = 30
let name2 = 'bb'
let grade2 = 'B'
*/

/*
FUntion
 */

/*
let score1 =55
let score =65
//ประกาศ function
function calculat_grade(score){
    if(score>=80){
    grade = 'A'
}else if (score>=70){
    grade = "B"
}else if (score>=60){
    grade = 'C'
}else if (score>=50){
    grade = 'D'
}else{
    grade = 'F'
}
return grade
}

//การเรียกใช้ function
let grade1 = calculat_grade(score1)
console.log('grade',grade1)
*/


/*
score[0] = score[0]*2
score[1] = score[1]*2
score[2] = score[2]*2
score[3] = score[3]*2
*/
/*
score = score.map((s) =>{
    return s*2

})
*/
/*
let newscore = score.filter((s) =>{
    if ( (s>=30)) {
        return true
    }else{
        return false
    }
})
*/
/*
let score = [20,30,40,50]

for (let index = 0; index <score.length; index++){
    console.log('score',score[index])
    
let newscore = score.filter((s) =>{
    return s
})


score.forEach((ns) => {
    console.log('New score',ns)

})
    */

/*
odject funtion
*/
/*
let students = []
    {
        name: 'aa',
        score: 50,
        grade: 'D'
    }
    {
        name: 'bb',
        score: 80,
        grade: 'A'
    }


let student = students.find((s) => s.name == 'aa')

let double_score = student.map((s)=>{
    s.score = s.score*2
})

let hightscore = student.filter((s)=>{
    if(s.score>=120){
        return true
    }
})


console.log(student)
console.log('double_score',double_score)
*/
