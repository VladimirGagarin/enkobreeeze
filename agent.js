document.addEventListener("DOMContentLoaded", function () {
    const homeBtn =document.querySelectorAll('.top-header nav ul li')[0];
    const PropBtn = document.querySelectorAll('.top-header nav ul li')[1];
  
    homeBtn.onclick = function () {
      window.location.href = "index.html";
    }
  
    PropBtn.onclick = function () {
        window.location.href = "properties.html";
    }
    
    window.addEventListener("scroll", function () {
      const scrollHeight = window.scrollY; // Amount scrolled vertically
      document.querySelector('.top-header').classList.toggle('scrolled', scrollHeight > 10);        
  });

      function showLoadingDiv(state) {
        const loadingDiv = document.querySelector('.loading-page-overlay');
        
        if (state) {
            loadingDiv.style.display = 'flex'; // Show the overlay
        } else {
            // Wait for 5 seconds before hiding the overlay
            setTimeout(() => {
                loadingDiv.style.display = 'none'; // Hide the overlay after 5 seconds
            }, 5000); // 5000 milliseconds = 5 seconds
        }
    }

    showLoadingDiv(false);

    const agentItems = document.querySelectorAll('.agent-item');

    agentItems.forEach(function(agentItem) {
      const copyAgentNumber = agentItem.querySelector('.agent-buttons button');
      const agentNumber = agentItem.querySelector('.agent-name h4').textContent; // Updated to select phone number from h4
    
      copyAgentNumber.onclick = function () {
        navigator.clipboard.writeText(agentNumber).then(() => {
          copyAgentNumber.textContent = "Copied!";
    
          setTimeout(function () {
            copyAgentNumber.textContent = "Copy Contact";
          }, 4000);
        }).catch(err => {
          console.error(err);
          copyAgentNumber.textContent = "Failed!";
    
          setTimeout(function () {
            copyAgentNumber.textContent = "Copy Contact";
          }, 4000);
        });
      };
    });
 

  });