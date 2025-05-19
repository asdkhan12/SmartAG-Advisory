# Smart Agriculture Advisory

# By Asad Khan and Minh Nyguen 

The Smart Agriculture Advisory System is a responsive, web-based dashboard designed to empower small scale farmers with precise, real time weather insights and actionable farming recommendations. By integrating the Weatherstack API as well as WeatherAPI, the platform displays up to the minute data on temperature, humidity, wind speed, precipitation and 7-day forecasts. It then generates tailored irrigation schedules, planting/harvest advisories, and extreme weather alerts helping farmers optimize water use, plan fieldwork, and mitigate climate related risks



# Target Browsers
Built with Bootstrap and React’s component-based architecture, the front end is fully responsive and mobile friendly. It supports all modern desktop browsers, Chrome, Firefox, Edge, plus mobile browsers such as Safari on iOS and Chrome on Android, ensuring farmers can access the advisory dashboard from smartphones, tablets or desktops alike.


# System Requirements: 

- **OS:** Windows, macOS, or Linux  
- **Node.js:** v14+  
- **npm or yarn:** latest stable  
- **MySQL:** v8+ (optional; only if you enable query logging/caching)  
- **Browser:** Modern (Chrome, Firefox, Edge, Safari) 

## Installation 
Clone Repository

```bash
git clone https://github.com/your-org/smart-ag-advisory.git
cd smart-ag-advisory ***
```
# Install Dependencies
```
# from project root
npm install            # installs server dependencies
cd client
npm install            # installs React app dependencies
cd ..
```
# Configure Environment
Create a .env file in the project root with:
```
# Weatherstack API (get at https://weatherstack.com)
WEATHERSTACK_KEY=your_weatherstack_key

# Server
PORT=3000

# (Optional) MySQL for caching/query history
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=secret
DB_NAME=smart_ag
```
# Obtaining API Keys

### Weatherstack

1. Go to the Weatherstack website:  
   https://weatherstack.com/
2. Click **Get Free API** (or **Sign Up**) and register for a free account.
3. Verify your email address and log in.
4. In the dashboard, navigate to **API Access** (sometimes under **Your Account**).
5. Copy your **Access Key**.
6. In your project’s `.env` file, add:
   ```env
   WEATHERSTACK_API_KEY=<your_weatherstack_access_key>
## WeatherAPI.com

Go to the WeatherAPI website:
https://www.weatherapi.com/

Click Free Signup and create an account.

Confirm your email and sign in.

On the Dashboard, you’ll see your API Key listed.

Copy that key.

In your project’s .env file, add:
```
WEATHERAPI_KEY=<your_weatherapi_access_key>

```
## Example .env file:
```
# Weather data providers
WEATHERSTACK_API_KEY=abcd1234YOURKEYHERE
WEATHERAPI_KEY=efgh5678YOURKEYHERE

# Database (optional if you use MySQL logging)
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=smart_ag_advisory

```
# Running the Application
From project root:
```
npm run server
```
What it does:

Launches Express server on http://localhost:3000

Exposes two endpoints:

GET /api/current-weather?location=<city>

GET /api/forecast?location=<city>

# Start Frontend
```
cd client
npm start
```
What it does:
Runs React dev server on http://localhost:3001 (proxy to backend)
Hot-reloads on code changes

# Testing
Run (once tests are added):
```
npm test
cd client
npm test
```
# Known Issues & Roadmap
- Rate Limits

- Weatherstack free tier caps calls per month.

- Mitigation: cache responses in MySQL (see DB).

- Error Feedback

- Invalid city names yield generic errors.

- In Progress: improve frontend error messages & backend validation.

# Road Map
User Auth & Profiles
Track/query history and save favorite locations

Advanced Visualizations
Add charting libraries (e.g. Chart.js time-series, D3)

Mobile UI
Refine responsive design; consider React Native companion app

Localization
Multi-language support (i18n)

# Project Structure
```
smart-ag-advisory/
├── client/                     # React frontend
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── About.js
│   │   │   └── Advisory.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── ...
├── server/                     # Express backend
│   ├── controllers/
│   ├── routes/
│   ├── db/                     # (optional) schema.sql, models
│   ├── index.js
│   ├── package.json
│   └── .env
├── docs/
│   └── Developer_Manual.md     # ← you are here
├── .gitignore
└── README.md
```
