# Smart Agriculture Advisory

# By Asad Khan and Minh Nyguen 

The Smart Agriculture Advisory System is a responsive, web-based dashboard designed to empower small scale farmers with precise, real time weather insights and actionable farming recommendations. By integrating the Weatherstack API as well as WeatherAPI, the platform displays up to the minute data on temperature, humidity, wind speed, precipitation and 7-day forecasts. It then generates tailored irrigation schedules, planting/harvest advisories, and extreme weather alerts helping farmers optimize water use, plan fieldwork, and mitigate climate related risks



# Target Browsers
Built with Bootstrap and React’s component-based architecture, the front end is fully responsive and mobile friendly. It supports all modern desktop browsers, Chrome, Firefox, Edge and Safari plus mobile browsers such as Safari on iOS and Chrome on Android, ensuring farmers can access the advisory dashboard from smartphones, tablets or desktops alike
```bash
git clone https://github.com/asdkhan12/SmartAG-Advisory.git
cd SmartAG-Advisory

# Smart Agriculture Advisory — Developer Manual

**Last Updated:** 2025-05-19

---

## Table of Contents

1. [Overview](#overview)  
2. [System Requirements](#system-requirements)  
3. [Installation](#installation)  
   - 3.1 [Clone Repository](#clone-repository)  
   - 3.2 [Install Dependencies](#install-dependencies)  
   - 3.3 [Configure Environment](#configure-environment)  
4. [Database Setup](#database-setup)  
5. [Running the Application](#running-the-application)  
   - 5.1 [Start Backend Server](#start-backend-server)  
   - 5.2 [Start Frontend](#start-frontend)  
6. [Testing](#testing)  
   - 6.1 [Unit Tests](#unit-tests)  
   - 6.2 [Manual Testing](#manual-testing)  
7. [API Reference](#api-reference)  
8. [Known Issues & Roadmap](#known-issues--roadmap)  
9. [Project Structure](#project-structure)  

---

## 1. Overview

Smart Agriculture Advisory is a web-based dashboard providing small-scale farmers with:
- Real-time weather data (current + 7-day forecast)  
- Tailored irrigation recommendations  
- Extreme weather alerts  

The system integrates:
- **Weatherstack API** for weather data  
- **React** frontend (client)  
- **Node.js + Express** backend (server)  
- **MySQL** for optional caching/history  

---

## 2. System Requirements

- **OS:** Windows, macOS, or Linux  
- **Node.js:** v14+  
- **npm or yarn:** latest stable  
- **MySQL:** v8+ (optional; only if you enable query logging/caching)  
- **Browser:** Modern (Chrome, Firefox, Edge, Safari)  

---

## 3. Installation

### 3.1 Clone Repository

```bash
git clone https://github.com/your-org/smart-ag-advisory.git
cd smart-ag-advisory



