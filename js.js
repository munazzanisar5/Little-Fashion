function scrollToTop () {
  document.body.scrollTop =  0;
  document.documentElement.scrollTop = 0;
}


    // Get the modal
    var modal = document.getElementById("myModal2");
    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn2");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("exit")[0];
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }




// // story

//         // Get the modal
//         var modal = document.getElementById("myModal2");
        
//         // Get the button that opens the modal
//         var btn = document.getElementById("myBtn2");
        
//         // Get the <span> element that closes the modal
//         var span = document.getElementsByClassName("exit")[0];
        
//         // When the user clicks the button, open the modal 
//         btn.onclick = function() {
//           modal.style.display = "block";
//         }
        
//         // When the user clicks on <span> (x), close the modal
//         span.onclick = function() {
//           modal.style.display = "none";
//         }
        
//         // When the user clicks anywhere outside of the modal, close it
//         window.onclick = function(event) {
//           if (event.target == modal) {
//             modal.style.display = "none";
//           }

         
//         }




 