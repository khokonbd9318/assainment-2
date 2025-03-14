//1 no
function culculateSum(a,b){
    return a+b;
}
console.log(culculateSum(30,20));

//2 no
function isEven(number){
    if (number % 2 === 0){
        return true;
       }   
       else { return false;
    }
}
console.log(isEven(0));
console.log(isEven(8));
console.log(isEven(5));

//3 no
function findMax (numbers){
    if (numbers.length === 0){
        return null;
    }
    let max = numbers[0];
        for (let i=1;i<numbers.length;i++){
          if(numbers[i] > max){
           max = numbers[i];
          }
        }
       return max;
    }
    console.log(findMax([3,7,9,5]));


    //4 no
    function filterOddNumbers(numbers){
        return numbers.filter(numbers => numbers % 2 !==0) ;
        
    }
  console.log(filterOddNumbers([3,4,5,6,7,8]));

  //5 no
  function countWords(str) {
    if(str.trim() === ""){
        return 0;
    }
    return str.trim().split(/\s+/).length;
  }
console.log(countWords("hello world!"));

//6 no
function removeDuplicates(arr) {
        return [...new Set(arr)]; 
}
       console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 1, 6, 5]));