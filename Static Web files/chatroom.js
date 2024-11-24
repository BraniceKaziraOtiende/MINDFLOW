document.addEventListener("DOMContentLoaded", () => {
    // Retrieve the group name from the query parameter
    const getQueryParam = (param) => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    };

    const groupName = getQueryParam("group");
    const chatTitle = document.getElementById("chat-title");
    const messagesContainer = document.getElementById("messages");
    const messageForm = document.getElementById("message-form");
    const messageInput = document.getElementById("message-input");

    // Set the chat title dynamically based on group name
    if (groupName) {
        const formattedName = groupName.replace(/([A-Z])/g, " $1").trim();
        chatTitle.textContent = `${formattedName} Chat Room`;
    }

    // Initialize a list to store messages
    const messages = [];

    // Function to render messages
    const renderMessages = () => {
        messagesContainer.innerHTML = ""; // Clear the container
        messages.forEach((message, index) => {
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("message");
            if (message.sender === "user") {
                messageDiv.classList.add("sent");
            }
            messageDiv.textContent = message.text;
            messagesContainer.appendChild(messageDiv);
        });
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll to latest message
    };

    // Handle form submission
    messageForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const messageText = messageInput.value.trim();
        if (messageText) {
            // Add user's message to the messages array
            messages.push({ text: messageText, sender: "user" });
            messageInput.value = ""; // Clear the input field
            renderMessages(); // Re-render messages
        }
    });
});

