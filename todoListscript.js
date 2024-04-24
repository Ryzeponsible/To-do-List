document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.querySelector('input[type="text"]');
    const dueDateInput = document.getElementById('dueDate');
    const addButton = document.getElementById('push');
    const taskContainer = document.getElementById('task');

    addButton.addEventListener('click', function() {
        const taskText = inputField.value.trim();
        const dueDate = dueDateInput.value; // Get the value of the due date input field
        if (taskText !== '') {
            const taskElement = createTaskElement(taskText, dueDate); // Pass dueDate to createTaskElement
            taskContainer.appendChild(taskElement);
            inputField.value = ''; // Clear input field after adding task
            dueDateInput.value = ''; // Clear due date input field after adding task
        }
    });

    function createTaskElement(text, dueDate) {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const taskText = document.createElement('span');
        taskText.textContent = text;
        taskElement.appendChild(taskText);

        // Create span for due date
        const dueDateSpan = document.createElement('span');
        dueDateSpan.textContent = dueDate;
        taskElement.appendChild(dueDateSpan);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-btn');
        editButton.addEventListener('click', function() {
            const newText = prompt('Edit task:', taskText.textContent);
            if (newText !== null && newText.trim() !== '') {
                taskText.textContent = newText.trim(); // Update task text
            }
        });
        
        taskElement.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', function() {
            taskElement.remove(); // Remove task when delete button is clicked
        });
        taskElement.appendChild(deleteButton);

        return taskElement;
    }
});
