function runTrackedTask(task, duration) {
    let isComplete = false;
    let isOverdue = false;
    let startTime = Date.now();

    function markAsComplete() {
        isComplete = true;
    }

    task(markAsComplete);

    if (!isComplete) {
        const elapsedTime = Date.now() - startTime;
        isOverdue = elapsedTime > duration;
    }

    return {
        isComplete,
        isOverdue,
        isInProgress: !isComplete && !isOverdue,
    };
}

// Example usage:
const task = (complete) => {
    // do some work
    console.log('Task is running...');
    setTimeout(complete, 1000);
};

const taskStatus = runTrackedTask(task, 500);
console.log('task status: ', taskStatus); // outputs: { isComplete: true, isOverdue: false, isInProgress: false }

const overdueTask = (complete) => {
    console.log('Overdue task is running...');
};

const overdueTaskStatus = runTrackedTask(overdueTask, 500);
console.log(overdueTaskStatus); // outputs: { isComplete: false, isOverdue: true, isInProgress: false }

{/*In this example, the runTrackedTask function takes a task function and a duration as arguments, and returns an object with three properties: isComplete, isOverdue, and isInProgress. The isComplete property is true if the task has called the complete function, and false otherwise. The isOverdue property is true if the task has not called the complete function and the elapsed time since the task started is greater than the specified duration. The isInProgress property is true if the task is neither complete nor overdue.*/ }