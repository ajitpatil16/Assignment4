//Using IIFE Function
let arr= [1,2,3,4,5];

(
    
   function arraySum(arr)
   {
        let sum =0;
        for(let i=0;i<arr.length;i++)
        {
            sum+=arr[i];
        }
     console.log(sum);
   }
)(arr)