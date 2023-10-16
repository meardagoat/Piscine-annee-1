// fonction
function worker(task, timeRequired) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${task} done`);
        }, timeRequired);
    });
}

// usine
function factory(tasks) {
    // If tasks are not defined or there is no task, return
    if (!tasks || tasks.length === 0) return;

    tasks.forEach(taskObj => {
        worker(taskObj.task, taskObj.timeRequired)
            .then(result => console.log(result));
    });
}

// la tâche a éxécuté
let tasks = [
    {
        'task': 'Teaching Astronomy',
        'timeRequired': 500,
    },
    {
        'task': 'Refill fuel',
        'timeRequired': 1500,
    },
    {
        'task': 'Repair module',
        'timeRequired': 1000,
    },
];

factory(tasks);
