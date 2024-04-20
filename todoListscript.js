document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.querySelector('input[type="text"]');
    const addButton = document.getElementById('push');
    const taskContainer = document.getElementById('task');

    addButton.addEventListener('click', function() {
        const taskText = inputField.value.trim();
        if (taskText !== '') {
            const taskElement = createTaskElement(taskText);
            taskContainer.appendChild(taskElement);
            inputField.value = ''; // Clear input field after adding task
        }
    });

    function createTaskElement(text) {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const taskText = document.createElement('span');
        taskText.textContent = text;
        taskElement.appendChild(taskText);

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
