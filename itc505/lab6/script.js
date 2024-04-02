
  document.getElementById('submitFormBtn').addEventListener('click', function() {
    // Retrieve the number values from the inputs
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    
    // Perform the addition
    var sum = num1 + num2;
    
    // Display the result
    document.getElementById('sumresult').textContent = 'Result: ' + sum;
  });
  
  
  
  
