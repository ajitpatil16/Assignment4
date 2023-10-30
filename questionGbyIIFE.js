let arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];

(
    function duplicates(arr)
    {
        let newArr = arr.filter((data,index)=>{
        return arr.indexOf(data) === index})
        console.log(newArr);
    }
)(arr)



