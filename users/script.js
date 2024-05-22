// JavaScript functionality for user management

// Sample user data (replace with actual data)
const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: " ahme", email: "jane@example.com" },
    { id: 4, name: "wiolm", email: "jane@example.com" }
];

// Function to render users in the table
function renderUsers() {
    const tbody = document.querySelector('.user-table tbody');
    tbody.innerHTML = '';
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button class="edit-btn" data-id="${user.id}"><i class="far fa-edit"></i></button>
                <button class="delete-btn" data-id="${user.id}"><i class="far fa-trash-alt"></i></button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Function to handle adding a new user
function addUser() {
    // Placeholder for adding a new user functionality
    console.log('Add new user clicked');
}

// Function to handle editing a user
function editUser(userId) {
    // Placeholder for editing a user functionality
    console.log(`Edit user with ID: ${userId}`);
}

// Function to handle deleting a user
function deleteUser(userId) {
    // Placeholder for deleting a user functionality
    console.log(`Delete user with ID: ${userId}`);
}

document.addEventListener('DOMContentLoaded', function() {
    // Render initial users
    renderUsers();

    // Add event listener for Add User button
    const addUserBtn = document.getElementById('add-user-btn');
    addUserBtn.addEventListener('click', addUser);

    // Add event listener for Edit and Delete buttons
    document.body.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('edit-btn')) {
            const userId = parseInt(target.getAttribute('data-id'));
            editUser(userId);
        } else if (target.classList.contains('delete-btn')) {
            const userId = parseInt(target.getAttribute('data-id'));
            deleteUser(userId);
        }
    });
});
