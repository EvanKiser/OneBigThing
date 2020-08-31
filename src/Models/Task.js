class Task {
    constructor(taskTitle) {
        this.taskTitle = taskTitle;
        this.completed =  false;
        this.date = new Date();
    }
}

export default Task;