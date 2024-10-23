export function taskReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: Date.now(),
        title: action.title,
        description: action.description,
        date: action.date,
        status: action.status
      }];
    }
    case 'edited':
      return tasks.map(task =>
        task.id === action.task.id ? action.task : task
      );
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
