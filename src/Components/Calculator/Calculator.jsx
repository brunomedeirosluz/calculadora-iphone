import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("0");

  function handleInput(value) {
    setInput((prevInput) => {
      if (prevInput === "0") {
        return value;
      } else if (prevInput.length < 11) {
        return prevInput + value;
      }
      return prevInput;
    });
  }

  function handleClear() {
    (setInput)("0");
  }

  function handlePercentage() {
    setInput((prevInput) => (parseFloat(prevInput) / 100).toString());
  }

  function handleSign() {
    setInput((prevInput) => (parseFloat(prevInput) * -1).toString());
  }

  function calculate() {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  }

return (
    <div 
    className="buttons-container"
    >
        <h1>{ input }</h1>
      <button
        onClick={handleClear}
        className="button-gray" 
      >
        AC
      </button>
      <button
        onClick={handleSign} 
        className="button-gray" 
      >
        +/-
      </button>
      <button 
        onClick={handlePercentage} 
        className="button-gray" 
        >
          %
     </button>
      <button
        onClick={ () => handleInput("/") } 
        className="button-orange" 
        value={"/"}
        >
        ÷
      </button>
      <button 
        className="button" 
        onClick={ () => handleInput("7") } 
        value={ 7 }
      >
        7
      </button>
      <button 
        className="button" 
        onClick={ () => handleInput("8") } 
        value={ 8 }
      >
        8
      </button>
      <button 
        className="button"  
        onClick={ () => handleInput("9") } 
        value={ 9 }
      >
        9
      </button>
      <button 
        className="button-orange"   
        onClick={ () => handleInput("*") } 
        value={"X"} 
      >
        x
      </button>
      <button 
        className="button"
        onClick={ () => handleInput("4") } 
        value={ 4 }
      >
        4
      </button>
      <button 
        className="button"  
        onClick={ () => handleInput("5") } 
        value={ 5 }
      >
        5
     </button>
     <button 
        className="button"  
        onClick={ () => handleInput("6") } 
        value={ 6 }
        >
          6
      </button>
      <button
        className="button-orange"    
        onClick={ () => handleInput("-") } 
        value={"-"}
        >
          -
      </button>
      <button 
        className="button"  
        onClick={ () => handleInput("1") } 
        value={ 1 }
      >
        1
      </button>
      <button 
        className="button"  
        onClick={ () => handleInput("2") } 
        value={ 2 }
      >
          2
      </button>
      <button 
        className="button"  
        onClick={ () => handleInput("3") } 
        value={ 3 }
      >
        3
      </button>
      <button
        className="button-orange"     
        onClick={ () => handleInput("+") } 
        value={"+"} 
      >
        +
     </button>
      <button
        onClick={ () => handleInput("0") } 
        value={ 0 }  
        className="double-width"
      >
      0
     </button>
     <button
       className="button"   
       onClick={ () => handleInput(".") } 
       value={'.'}
     >
       .
     </button>
     <button
       className="button-orange"    
       onClick={ calculate }
     >
       =
    </button>
    </div>
  );
}

export default Calculator;