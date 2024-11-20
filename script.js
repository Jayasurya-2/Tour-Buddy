function goToNextPage() {
    window.location.href = 'nextpage.html'; // This is a placeholder for the next page URL.
}

function showAboutSection() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('about').style.display = 'flex';
}

function showHomePage() {
    document.getElementById('about').style.display = 'none';
    document.getElementById('main-content').style.display = 'flex';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const toggleButton = document.getElementById('toggle-button');
    
    if (document.body.classList.contains('dark-mode')) {
        // Dark mode colors (default)
        toggleButton.classList.remove('text-gray-200', 'hover:bg-gray-600');
        toggleButton.classList.add('text-gray-800', 'hover:bg-gray-200');
    } else {
        // Light mode colors (opposite of dark mode)
        toggleButton.classList.remove('text-gray-800', 'hover:bg-gray-200');
        toggleButton.classList.add('text-gray-200', 'hover:bg-gray-600');
    }
}