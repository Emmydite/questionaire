import React from 'react'


const Buttons = (props) =>
{
    const {handleAnswer, handleReset} = props;

    return (
     <>
      <button type="submit" id="submit" onClick={handleAnswer}>
        Submit your Answers
      </button>
      <button type="reset" id="reset" onClick={handleReset}>
          Reset
      </button>
      </>
    );
}

export default Buttons;