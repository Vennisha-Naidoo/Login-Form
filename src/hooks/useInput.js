import { useState } from "react";

export function useInput(defaultValue, validationFn) {

    const [enteredCredential, setEnteredCredential] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validationFn(enteredCredential);

    function handleInputChange(event) {
        setEnteredCredential(event.target.value);
    
        setDidEdit(false);
      }
    
      function handleInputBlur() {
        setDidEdit(true);
      }

      return {
        value: enteredCredential,
        handleInputChange,
        handleInputBlur,
        hasError: didEdit && !valueIsValid
      }
}