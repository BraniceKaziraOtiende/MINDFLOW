document.getElementById('newEntryBtn').addEventListener('click', () => {
    const entryText = prompt('Write your journal entry:');
    if (entryText) {
        const entriesContainer = document.getElementById('entriesContainer');
        entriesContainer.innerHTML += `
            <div class="entry">
                <p>${entryText}</p>
                <small>${new Date().toLocaleString()}</small>
            </div>
        `;
    }
});
