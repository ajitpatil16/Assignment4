//Using Anonymous Function
let arr= [1,2,3,4,5];
let arraySum = function ()
{
    let sum =0;
        for(let i=0;i<arr.length;i++)
        {
            sum+=arr[i];
        }
     console.log(sum);
}

arraySum(arr)

