// DOMContentLoaded to ensure DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Welcome Alert (Optional)
    const welcomeMessage = "Welcome back to Mindflow! Start exploring your dashboard.";
    alert(welcomeMessage);

    // Logout Button Confirmation
    const logoutButton = document.querySelector('.nav-menu a[href="#"]');
    if (logoutButton) {
        logoutButton.addEventListener('click', (event) => {
            event.preventDefault();
            const confirmLogout = confirm("Are you sure you want to log out?");
            if (confirmLogout) {
                window.location.href = 'logout.html'; // Redirect to logout page
            }
        });
    }

    // Highlight Active Navigation Link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(nav => nav.classList.remove('active')); // Remove active class
            link.classList.add('active'); // Add active class to clicked link
        });
    });

    // Service Buttons Interactivity
    const serviceButtons = document.querySelectorAll('.service button');
    serviceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const serviceName = button.parentElement.querySelector('h2').textContent;
            alert(`Redirecting to ${serviceName} page...`);
        });
    });

    // Dynamic Greeting Based on Time
    const greeting = document.createElement('p');
    greeting.style.fontSize = '18px';
    greeting.style.marginTop = '20px';
    greeting.style.color = '#705892'; // Cute Purple

    const currentTime = new Date().getHours();
    if (currentTime < 12) {
        greeting.textContent = 'Good Morning! Have a productive day.';
    } else if (currentTime < 18) {
        greeting.textContent = 'Good Afternoon! Keep up the great work.';
    } else {
        greeting.textContent = 'Good Evening! Relax and unwind.';
    }

    const dashboardMain = document.querySelector('.dashboard-main');
    dashboardMain.appendChild(greeting);
});
