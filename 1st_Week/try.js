// Load user data from JSON file
fetch('users.json')
    .then(response => response.json())
    .then(users => {
        const container = document.getElementById('cards-container');
        
        // Create a card for each user
        users.forEach(user => {
            const card = document.createElement('usercard');
            card.innerHTML = `
                <h2>User: ${user.name}</h2>
                <p>Username: ${user.username}</p>
                <h5>Password: ${user.password}</h5>
            `;
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading user data:', error));
