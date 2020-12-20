
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
  
