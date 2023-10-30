let arr = ["bad","dad","sas","dab"];


    // function isPalindrome(s)
    // {
    //     let a=s;
    //     console.log(s);

    //    // a=s.split('').reverse().join('');

    //    // return s==a;
    // }

(   
    
      function palindrome(arr){
        let newArr=[];
        
        for(let i=0;i<arr.length;i++)
        {
            if(isPalindrome(arr[i]))
            {
                newArr.push(arr[i]);
            }
        }

        return newArr;
    }
)(arr)

let finalAnswer = palindrome(arr);
if(finalAnswer.length===0)
{
    console.log("No palindromes are present in array");
}
else{
    console.log(finalAnswer);
}