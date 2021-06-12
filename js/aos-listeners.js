document.addEventListener('aos:in:grant', ({ detail }) => {
    console.log("in")

  });
  
  document.addEventListener('aos:out:grant', ({ detail }) => {
    console.log("out")
  });