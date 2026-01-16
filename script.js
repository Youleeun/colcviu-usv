document.getElementById('generate-user').addEventListener('click', async () => {
    const userCard = document.getElementById('user-card');

    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];

        userCard.innerHTML = `
            <img src="${user.picture.large}" alt="User Picture">
            <h2>${user.name.first} ${user.name.last}</h2>
            <p>Phone: ${user.phone}</p>
            <p>Email: ${user.email}</p>
        `;

        userCard.style.display = 'block';
    } catch (error) {
        console.error('Error fetching user:', error);
        userCard.innerHTML = '<p>Failed to load user data. Please try again.</p>';
        userCard.style.display = 'block';
    }
});