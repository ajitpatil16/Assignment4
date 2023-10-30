let arr = [1,2,3,4,5,6,7,8,9];
let k =3;
(
    function rotate(arr,k)
    {
        for(let i=0;i<k;i++)
        {
            arr.unshift(arr.pop());
        
        }
        console.log(arr);
    }
)(arr,k)