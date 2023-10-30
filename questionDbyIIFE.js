let arr = [0,1,2,3,4,5,6,7,8,9,10];
let newArr = [];
let values = (
        function primeArray(arr)
        {
        
            arr.forEach((num)=>{
                let factor = 0;
                    for(let i=0;i<=num;i++)
                    {
                        if(num%i===0)
                        {
                            factor++;
                        }

                    
                    }
                    if(factor===2)
                    {
                    
                        newArr.push(num);
                    }
                }
            )
            return newArr;
        }
        )(arr)

let returnedPrimeValues = values;
console.log(returnedPrimeValues)