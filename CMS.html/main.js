
// Tags 
  document.getElementById('searchbutton').addEventListener('click', function() {
    // Get the search input value
    var searchValue = document.getElementById('searchInput').value.toLowerCase();
    
    // Get all rows in the table body
    var rows = document.querySelectorAll('#tagtable tbody tr');
    
    // Loop through each row and hide/show based on the search value
    for (var i = 0; i < rows.length; i++) {
      var name = rows[i].querySelector('td:nth-child(2)').textContent.toLowerCase();
      
      // Check if the name contains the search value
      if (name.includes(searchValue)) {
        rows[i].style.display = '';
      } else {
        rows[i].style.display = 'none';
      }
    }
  }); 
  
  // Categories 

  document.getElementById('searchbutton').addEventListener('click', function() {
    // Get the search input value
    var searchValue = document.getElementById('searchInput').value.toLowerCase();
    
    // Get all rows in the table body
    var rows = document.querySelectorAll('#posttable tbody tr');
    
    // Loop through each row and hide/show based on the search value
    for (var i = 0; i < rows.length; i++) {
      var name = rows[i].querySelector('td:nth-child(2)').textContent.toLowerCase();
      
      // Check if the name contains the search value
      if (name.includes(searchValue)) {
        rows[i].style.display = '';
      } else {
        rows[i].style.display = 'none';
      }
    }
  });
   
// Allpost 




//checkbox

 document.getElementById("checkbox1").addEventListener("click", function() {
      // Get the value of the checkbox
      var checkbox1 = document.getElementById("checkbox1").checked;
      
      // Set the value of checkbox2 to match checkbox1
      document.getElementById("checkbox2").checked = checkbox1 ;
      document.getElementById("checkbox3").checked = checkbox1 ;
       document.getElementById("checkbox4").checked = checkbox1 ;
        document.getElementById("checkbox5").checked = checkbox1 ;
         document.getElementById("checkbox6").checked = checkbox1 ;
           document.getElementById("checkbox7").checked = checkbox1 ;
    document.getElementsByClassName("")
    });

 


// Get the necessary elements
const toggleButton = document.getElementById("toggle-button");
const toggleText = document.getElementById("toggle-text");

// Set the initial state
let isButtonOn = false;
updateButtonState();

// Add event listener to the button
toggleButton.addEventListener("click", toggleButtonState);

// Function to toggle the button state
function toggleButtonState() {
  isButtonOn = !isButtonOn; // Toggle the state
  updateButtonState();
}

// Function to update the button state and text
function updateButtonState() {
  if (isButtonOn) {
    toggleButton.classList.add("on"); // Add "on" class to apply styling
    toggleText.textContent = "Button is ON"; // Change the text
  } else {
    toggleButton.classList.remove("on"); // Remove "on" class
    toggleText.textContent = "Button is OFF"; // Change the text
  }
}

// Drag and drop 

 
    const dropArea = document.getElementById("dropArea");

    // Prevent default behavior when files are dragged over the drop area
    dropArea.addEventListener("dragover", (event) => {
        event.preventDefault();
        dropArea.classList.add("drag-over");
    });

    // Revert the drop area styles when files are dragged out or dropped
    dropArea.addEventListener("dragleave", () => {
        dropArea.classList.remove("drag-over");
    });

    dropArea.addEventListener("drop", (event) => {
        event.preventDefault();
        dropArea.classList.remove("drag-over");
        handleFiles(event.dataTransfer.files);
    });

    // Handle selected files when using the file input button
    document.getElementById("fileInput").addEventListener("change", (event) => {
        handleFiles(event.target.files);
    });

    // Function to handle the selected files
    function handleFiles(files) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type.startsWith("image/")) {
                // You can use this file to upload or display the image.
                // For example, you can create a FileReader to read the image data:
                const reader = new FileReader();
                reader.onload = (event) => {
                    const img = new Image();
                    img.src = event.target.result;
                    dropArea.appendChild(img); // Display the image within the drop area.
                };
                reader.readAsDataURL(file);
            } else {
                alert("Only image files are supported.");
            }
        }
    }

