//Using IIFE Function
//let String = "HELLO GOOD MORNING";

let String = "hello good morning";

(
    function TitleCase(String)
    {   
        let strArray = String.split(' ');
        for(let i=0;i<strArray.length;i++)
        {   
            
            strArray[i]= strArray[i].charAt(0).toUpperCase()+strArray[i].slice(1).toLowerCase();
          
            
        }
        console.log(strArray)
    }

)(String)