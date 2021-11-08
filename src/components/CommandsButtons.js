import React, { useState } from "react";



let number = Math.floor(Math.random() * 101);
console.log(number)
const CommandsButtons = () => {
    const [countAttempts, setCountAttempts] =  useState(10);
    const [input, setInput] = useState('');
    const [status, setStatus] = useState('');
    const [answers, setAnswer] = useState([])
    const [toggle, setToggle] = useState(false);
    const [disabled, setDisabled] = useState(false);
    
    

    const clearNumber = () => {
        return setInput('')
    }

    


 const checkNumbers = () => {
    if(answers.includes(input)) {
        return setStatus(<p className='bg-info'>UPS! You alredy entered this number!</p> )
    }

    if(input > 100 || input < 1 ) {
        return setStatus(<p className='bg-info'>UPS! You must enter number beetwen 1 and 100</p> )
    } else if (number > input ){
        setAnswer(oldArray => [...oldArray, input]);
        setCountAttempts(countAttempts -1);    
        
            return setStatus(<p className='bg-info'>UPS! The last guess was to low!</p> )
            
    }else if (number < input ){
        setAnswer(oldArray => [...oldArray, input]);
        setCountAttempts(countAttempts -1);    
            return setStatus(<p className='bg-danger'>UPS! The last guess was to high!</p> )
    }else if(number == input){
        setDisabled(!disabled)
        setCountAttempts(countAttempts -1); 
        setToggle(!toggle)   
        return setStatus(<p className='bg-success'>Congratulations! You got it right!</p> ) 
           
        
    } ;
    
}
const checkAttempts = () =>{
if(number != input && countAttempts < 2){
    setDisabled(!disabled)
    setToggle(!toggle)  
    return setStatus(<p className='bg-warning'>GAME OVER!</p> )

}
}

const reset = () => {
    setDisabled(!disabled)
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
                    <input type='number' min = '1' max='100' value={input} disabled={disabled} onInput={e => {setInput(e.target.value)}} /> 
                   
                   {countAttempts > 0  && (
                       <button disabled={disabled}
                       onClick={()=> {
                           checkNumbers();
                           checkAttempts();
                       }}>
                           Submit number</button>
                   )}
                    <button onClick={clearNumber} disabled={disabled}>Clear</button>
                    <button onClick={reset} disabled={disabled}>Reset</button>
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