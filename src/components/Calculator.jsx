import React, {useEffect, useState} from 'react'

import Button from "./button/Button";
import { ContentInput, ContentNumbers, ContentWrapper, Mark, MarkWrapper, ShowDisplay, ZeroWrapper } from './styles';
import Input from './input/Input';

const Calculator = () => {

  const [currentInput, setCurrentInput] = useState(0);
  const [previousInput, setPreviousInput] = useState(0);
  const [operationInput, setOperationInput] = useState();
  const [showHistory, setShowHistory] = useState('0');
  const [resultDisplay, setResultDisplay] = useState(false)

 const inputButton = ( event ) => {
    const value = event.target.value;
    (currentInput === 0) ? setCurrentInput(value):
    setCurrentInput(currentInput + value);

  } 

  const handleClear = () =>{
      setPreviousInput(0); 
      setOperationInput();
      setCurrentInput(0);
      setShowHistory('0');
    ;
  }

  const reverseNumber = () => {
    setCurrentInput(currentInput*(-1));

  }

  const percentNumber = () => {
    setCurrentInput(currentInput/100);
    
  }

  let resultCurrent;
function operation(current, op, previous){
  if(op){
    switch (op) {
      case 'X':
        if (previous === 0) previous = 1
        resultCurrent = previous * current;
        break;
      case '/':
        if (previous === 0) previous = 1
        resultCurrent = previous / current;
        break;

      case '-':
        resultCurrent = previous - current;
        break;

      case '+':
        resultCurrent = previous/1 + current/1;
        break;

      default:
        setCurrentInput('ERROR');
        break;
    }
  }
  return resultCurrent;
}


  const handleOperation = (event) => {
      const operationValue= event.target.value;
      setOperationInput(operationValue);
      if(previousInput === 0) setPreviousInput(currentInput);
      else{        
        setPreviousInput(operation(currentInput, operationInput, previousInput));
      }
      (showHistory === '0')? setShowHistory(currentInput)
      :setShowHistory(`(${showHistory} ${operationInput} ${currentInput} )`) ;
      setCurrentInput(0);
    }   


  const calc = () => {
    operation(currentInput, operationInput, previousInput);
    handleClear();
    setResultDisplay(!resultDisplay);
    setCurrentInput(resultCurrent)
    setShowHistory(`${showHistory} ${operationInput} ${currentInput} `) ;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClear();
    }, 8000);
    return () => {
      clearTimeout(timer);
    };
  }, [resultDisplay]);
  
  return (
    <ContentWrapper>
      <ContentInput>
        <Input  inputStyle='inputCurrent' 
        child={!resultDisplay ? 
           currentInput
          : 
            currentInput
        }    
        /> 
        <ShowDisplay>
            {showHistory}
        </ShowDisplay>
      </ContentInput>
      <ContentNumbers>
        <Button value={'AC'} 
        bgColor='buttonClear' 
        handleOnClick={handleClear}
        />
        <Button value={'+/-'} 
        bgColor='buttonSecundary'
        handleOnClick={reverseNumber}
        />
        <Button value={'%'} 
        bgColor='buttonSecundary'
        handleOnClick={percentNumber}
        />
        <Button value={'/'} 
        bgColor='buttonSecundary'
        handleOnClick={handleOperation}
        />
        <Button value={7} 
        bgColor='buttonPrimary' 
        handleOnClick={inputButton}
        />
        <Button value={8} 
        bgColor='buttonPrimary'
        handleOnClick={inputButton} 
        />
        <Button value={9} 
        bgColor='buttonPrimary'
        handleOnClick={inputButton} 
        />
        <Button value={'X'} 
        bgColor='buttonSecundary'
        handleOnClick={handleOperation}
        />
        <Button value={4} 
        bgColor='buttonPrimary' 
        handleOnClick={inputButton}
        />
        <Button value={5} 
        bgColor='buttonPrimary' 
        handleOnClick={inputButton}
  
        />
        <Button value={6} 
        bgColor='buttonPrimary' 
        handleOnClick={inputButton}
        />
        <Button value={'-'} 
        bgColor='buttonSecundary'
        handleOnClick={handleOperation}
        />
        <Button value={1} 
        bgColor='buttonPrimary' 
        handleOnClick={inputButton}
        />
        <Button value={2} 
        bgColor='buttonPrimary'
        handleOnClick={inputButton}
         />
        <Button value={3} 
        bgColor='buttonPrimary' 
        handleOnClick={inputButton}
        />
        <Button value={'+'} 
        bgColor='buttonSecundary'
        handleOnClick={handleOperation}
        />
        <ZeroWrapper 
        onClick={inputButton}
        value={0}
        >0
        </ZeroWrapper>
        <Button value={'.'} 
        bgColor='buttonPrimary'
        handleOnClick={inputButton}
         />
        <Button value={'='} 
        bgColor='buttonSecundary'
        handleOnClick={calc}
        />

      </ContentNumbers>
      <MarkWrapper>
        <Mark href='https://www.linkedin.com/in/jkleby/' target='_blank'>Dev: joão kleby</Mark>
      </MarkWrapper>
    </ContentWrapper>
  )
}

export default Calculator;