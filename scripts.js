window.embeddedChatbotConfig = {
    chatbotId: "4Igys3x1iCNa2c0yLcKG0",
    domain: "www.chatbase.co"
}

const script = document.createElement('script');
script.src = "https://www.chatbase.co/embed.min.js";
script.setAttribute("chatbotId", "4Igys3x1iCNa2c0yLcKG0");
script.setAttribute("domain", "www.chatbase.co");
script.defer = true; // Note: corrected 'ture' to 'true'
document.head.appendChild(script);

function showAboutSection() {
    document.getElementById('about').classList.add('active');
    // The home section is no longer needed since it redirects to index.html
}

function toggleDarkMode() {
    document.body.classList.toggle('dark');
}

async function fetchTravelSuggestions() {
    const userInput = document.getElementById('userInput').value.trim();
    const suggestionsList = document.getElementById('suggestions');
    
    if (userInput === '') {
        alert('Please enter a valid query.');
        return;
    }

    suggestionsList.innerHTML = '<li>Loading...</li>'; // Display loading message

    try {
        const response = await fetch(`https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=${encodeURIComponent(userInput)}&lang=en_US&units=km`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '486b25ba49msha47f24e6ef0d193p1b33a9jsndf36447cc764', // Replace with your RapidAPI key
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        displaySuggestions(data);

    } catch (error) {
        console.error('Error fetching travel suggestions:', error);
        suggestionsList.innerHTML = '<li>Error fetching data. Please try again later.</li>';
    }
}

function displaySuggestions(data) {
    const suggestionsList = document.getElementById('suggestions');
    suggestionsList.innerHTML = ''; // Clear previous results

    const results = data.data?.Typeahead_autocomplete?.results || [];

    if (results.length === 0) {
        suggestionsList.innerHTML = '<li>No suggestions found.</li>';
        return;
    }

    results.forEach(item => {
        const { text, buCategory, route } = item;
        if (route?.url) {
            const fullUrl = `https://www.tripadvisor.com${route.url}`;
            const listItem = document.createElement('li');
            listItem.classList.add('p-2', 'border-b', 'hover:bg-gray-100');
            listItem.innerHTML = `
                <strong>${text}</strong> - <em>${buCategory}</em><br>
                <a href="${fullUrl}" target="_blank" class="text-blue-500 underline">View Details</a>
            `;
            suggestionsList.appendChild(listItem);
        }
    });
}

function toggleDarkMode() {
    document.body.classList.toggle('dark');
}