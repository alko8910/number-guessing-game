import React, { useState } from "react";



let number = Math.floor(Math.random() * 101);
console.log(number)
const CommandsButtons = () => {
    const [countAttempts, setCountAttempts] =  useState(10);
    const [input, setInput] = useState('');
    const [status, setStatus] = useState('');
    const [answers, setAnswer] = useState([])
    const [toggle, setToggle] = useState(false);
  
    
    

    const clearNumber = () => {
        return setInput('')
    }

    


 const checkNumbers = () => {
   setAnswer(oldArray => [...oldArray, input]);

     if (number > input ){
        
        setCountAttempts(countAttempts -1);    
            return setStatus(<p className='bg-info'>UPS! The last guess was to low!</p> )
            
    }else if (number < input ){
    
        setCountAttempts(countAttempts -1);    
            return setStatus(<p className='bg-danger'>UPS! The last guess was to high!</p> )
    }else if(number == input){
        setCountAttempts(countAttempts -1); 
        setToggle(!toggle)   
        return setStatus(<p className='bg-success'>Congratulations! You got it right!</p> ) 
           
        
    } ;
    
}
const checkAttempts = () =>{
if(number != input && countAttempts < 2){
    setToggle(!toggle)  
    return setStatus(<p className='bg-warning'>GAME OVER!</p> )
}
}

const reset = () => {
    setCountAttempts(10);
    number = Math.floor(Math.random() * 101);
    setAnswer([]);
    setStatus('')
    setInput('')
    setToggle(!toggle)  
    console.log(number)
}


return (
        <div>
                <div>
                    <input type='number' value={input} onInput={e => {setInput(e.target.value)}} /> 
                   
                   {countAttempts > 0  && (
                       <button 
                       onClick={()=> {
                           checkNumbers();
                           checkAttempts();
                       }}>
                           Submit number</button>
                   )}
                    <button onClick={clearNumber}>Clear</button>
                    <button onClick={reset}>Reset</button>
                </div>
                <h2 className='remaining-attempts'>Remaining Attempts: {countAttempts}</h2>
                <p>Previous gusses: {answers.join(", ")}</p>
                {status}
                <div>
                    <button onClick={reset} className={'hidden' + ( toggle ? 'not-hidden':'')}>Start new game</button>
                </div>
                
        </div>
    )
}

export default CommandsButtons;