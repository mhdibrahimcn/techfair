
function getCurrentDateAndTime() {
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
      ];
      
      const currentDate = new Date();
      

      const day = currentDate.getDate();
      const monthIndex = currentDate.getMonth();
      const year = currentDate.getFullYear();
      
      const monthName = monthNames[monthIndex];
      
   
      const formattedDate = `${day} ${monthName} ${year}`;

    return formattedDate.toLocaleString();
  }
  

  const dateDisplay = document.getElementById("date-container");
  
  dateDisplay.innerHTML = getCurrentDateAndTime();