let tasks = [];

function renderTasks(filter = 'all') {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    }).forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            <span>${task.text}</span>
            <button class="check-btn" onclick="toggleTask(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
            <button class="remove-btn" onclick="removeTask(${index})">Remove</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById('taskInput');
    const text = input.value.trim();
    if (text) {
        tasks.push({ text, completed: false });
        input.value = '';
        renderTasks();
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function filterTasks(filter) {
    renderTasks(filter);
}

document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
});
