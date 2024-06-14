document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        if (button.id === 'clear') {
          display.textContent = '';
        } else if (button.id === 'clearentry') {
          display.textContent = display.textContent.slice(0, -1);
        } else if (button.id === 'equals') {
          try {
            const result = evaluateExpression(display.textContent);
            display.textContent = result;
          } catch {
            display.textContent = 'Error';
          }
        } else if (button.id === 'decimal') {
          addDecimalPoint(display);
        } else {
          display.textContent += button.textContent;
        }
      });
    });
  
    function evaluateExpression(expression) {
      try {
        const result = Function('"use strict"; return (' + expression + ')')();
        return parseFloat(result.toFixed(10)); 
      } catch {
        throw new Error('Invalid Expression');
      }
    }
  
    function addDecimalPoint(display) {
      const currentText = display.textContent;
      const lastNumber = currentText.split(/[\+\-\*\/]/).pop();
      if (!lastNumber.includes('.')) {
        display.textContent += '.';
      }
    }
  });
  