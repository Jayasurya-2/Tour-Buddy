
#  Tour-Buddy


TourBuddy is a smart travel assistant designed to make trip planning simple and enjoyable. With real-time destination suggestions and an embedded chatbot, it helps users discover, plan, and navigate their travels effortlessly.




## Features

- 🌐 Chatbot Support: Get travel tips and recommendations.
- 📍 Dynamic Suggestions: Search destinations with real-time results using Travel Advisor API.
- 🌗 Dark Mode: Switch between light and dark themes.
- 🚀 Intuitive Interface: Built with Tailwind CSS for a clean and responsive design.


## Tech Stack

**Client:** HTML5,
Tailwind CSS,
Font Awesome,
JavaScript,

Chatbase (embedded chatbot interface)

**Server:** Travel Advisor API (via RapidAPI),

Chatbase (chatbot processing and hosting)







## Run Locally

Clone the project

```bash
git clone https://github.com/<your-username>/TourBuddy.git

Go to the project directory
cd TourBuddy



```
## API Reference
Get Destination Suggestions

Request -> GET /locations/v2/auto-complete?query={query}&lang={lang}&units={units}

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `query`      | `string` | Required. The location or search term (e.g., city, town) to get suggestions for.
`lang` |`string` | Optional. The language for results (e.g., en_US for English).
`units` | `string` | Optional. The units for distance (e.g., km for kilometers).

Get Travel Recommendations by Category

Request -> GET /locations/v2/locations/${location_id}/details?category=${category}


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `location_id` | `string` | Required. The unique ID of the location.
`category` | `string` | Required. Category of interest (e.g., restaurants, hotels, attractions).

Get Details for a Specific Location

Request -> GET /locations/v2/locations/${location_id}

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `location_id` | `string` | Required. The unique ID of the location you want to get details for.`

## Screenshots

![App Screenshot](https://i.postimg.cc/RZcWRXG9/HomePage.png)

![App Screenshot](https://i.postimg.cc/7ZvC0p3m/NextPage.png)

![App Screenshot](https://i.postimg.cc/5NQYHxCX/ChatBot.png)



