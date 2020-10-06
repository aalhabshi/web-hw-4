const results = () =>{
    const physics = document.getElementById('physics').value;
    const physicsNum = parseFloat(physics);
    const maths = document.getElementById('maths').value;
    const mathsNum = parseFloat(maths);
    const chemistry = document.getElementById('chemistry').value;
    const chemistryNum = parseFloat(chemistry)
    const biology = document.getElementById('biology').value;
    const biologyNum = parseFloat(biology)
    let grades = "";
  
    let totalGrades = physicsNum + mathsNum + chemistryNum + biologyNum;  // total marks
  
  if (physics == 0 || maths == 0 || chemistry == 0 || biology == 0) {
      alert('please Enter Your marks Then click Submit button');
  } else if(physicsNum >=33 && mathsNum >=33 && chemistryNum >= 33 && biologyNum >=33) {
  const showBox = document.getElementById('showBox');
          showBox.style.display ='block';
  
  
    let percentage = (totalGrades/400) * 100;    
    if(percentage >= 90  && percentage >= 100){
      grades = 'A';
    }else if(percentage >= 80  && percentage <= 89.9){
      grades = 'B';
   }else if(percentage >= 70  && percentage <= 79.9){
      grades = 'C';
   }else if(percentage >= 60  && percentage <= 69.9){
      grades = 'D';
   }else if(percentage < 59.9){
    grades = 'F';
  }

  
    if(percentage >= 59.9){

      document.getElementById('showData').innerHTML =  'Congrats! You Passed!:D';
      getResult();
    }
    else{
      document.getElementById('showData').innerHTML =  'Sadly you fail. :(';
      getResult();
  
    }
    function getResult(){
      document.getElementById('getTotal').innerText = 'Out of 400 your total is ' + totalGrades;
      document.getElementById('getPercentage').innerText = 'percentage is' + ' ' + percentage + ' %';
      document.getElementById('getGrade').innerText = 'Your grade is' + ' ' + grades;
    }
    } 
    if(physicsNum < 33 || mathsNum < 33 || chemistryNum < 33 || biologyNum < 33){
      const showBox = document.getElementById('showBox');
      showBox.style.display ='block';
      document.getElementById('showData').innerHTML =  'Sadly you failed. :(';
      document.getElementById('getTotal').innerText = 'Out of 400 your total is ' + totalGrades;
      document.getElementById('getPercentage').innerText = 'Sadly you failed. :(';
      document.getElementById('getGrade').innerText = 'You are Fail.';
    }
}
