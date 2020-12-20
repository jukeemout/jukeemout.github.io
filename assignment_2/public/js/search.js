
    const taskUrl = 'http://localhost:4000/allTask';
    const taskArray = [];
    fetch(taskUrl)
    .then(data => data.json())
    .then(tasks =>{
      
      tasks['data'].forEach(task =>{
        taskArray.push(task)
      })
 
    } )
 
  function findTasks(word, allTasks){
      return allTasks.filter(task =>{
          const regex = new RegExp(word, 'gi');
          return task.taskName.match(regex)
      });
  }
  
  function displayValue(){
     const matchData = findTasks(this.value, taskArray)
     const html = matchData.map(task =>{
         const regex = new RegExp(this.value, 'gi');
         const taskN = task.taskName.replace(regex, `<span class="h1">${this.value}</span>`);
         return `
         <li>
                <span> ${taskN} </span>
         </li>
         `
     }).join('');

     content.innerHTML = html
     
  }

  const searchInput = document.getElementById('searchTask');
  const content = document.getElementById('searchTaskContent')

  searchInput.addEventListener('change', displayValue);
  searchInput.addEventListener('keyup', displayValue);
