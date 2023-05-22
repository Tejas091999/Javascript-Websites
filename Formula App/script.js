// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Get the button element
  var btn = document.getElementById('btn');
  
  // Add click event listener to the button
  btn.addEventListener('click', function() {
    // Get the selected option
    var select = document.getElementById('cirlce');
    var selectedOption = select.options[select.selectedIndex].id;
    
    // Display the respective formula based on the selected option
    var formula;
    switch(selectedOption) {
      case 'Ccircum':
        formula = 'Circumference formula: 2πr';
        break;
      case 'Carea':
        formula = 'Area formula: πr^2';
        break;
      case 'Cdiameter':
        formula = 'Diameter formula: 2r';
        break;
      case 'Cradius':
        formula = 'Radius formula: r';
        break;
      default:
        formula = 'Please select a formula';
    }
    
    // Display the formula
    alert(formula);
  });
});
