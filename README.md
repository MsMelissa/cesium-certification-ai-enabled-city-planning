# Cesium-Certification-AI-enabled-City-Planning
Cesium Certification project for Buellton City Council's Planning Commision

Overview

This repository contains the source code for the Cesium Certification – Buellton's AI-enabled City Planning project. This project is a dynamic solar analysis tool built with CesiumJS that leverages real-time data from NREL and OpenWeatherMap, along with AI-generated insights via OpenAI. Designed specifically for city planning, the tool visualizes the potential impact of 18 proposed building developments in Buellton, CA—a small city of approximately 4,990 residents—by combining 3D geospatial visualization, interactive UI controls, and advanced camera navigation.
Table of Contents

    Overview
    Features
    Architecture
    Installation
    Usage
    Deployment
    Contributing
    License
    Contact

Features

    CesiumJS Integration:
        Leverages Cesium Ion assets and OSM Buildings for a rich 3D geospatial experience.
        Provides advanced camera controls and smooth fly-to transitions.

    Dynamic UI Controls:
        Interactive panels for Season, Orientation, Building Level, and Sun Hour.
        New panels for Building Status and Building Selection dynamically update based on user input.

    Building Placeholders & Status:
        Implements 18 placeholder building entities arranged around Buellton, each color-coded by status (Conceptual Review, Applications in Process, Approved, Construction Plans Review, Under Construction).
        Building statuses were informed by local planning data and architectural concept plans (e.g., “376 AOF_Concept Plans.pdf” from RRM Group).

    Real-Time Data & AI Insights:
        Integrates real-time solar radiation data (NREL) and climate data (OpenWeatherMap).
        Generates bullet-point “City Planner’s Highlights” and “Cautions” using OpenAI’s language model.

Architecture

The project is organized into two main parts:

    Front-End:
        index.html:
        Implements the Cesium viewer, UI controls, and dynamic analysis panel using HTML, CSS, and JavaScript (ES modules).
        Features advanced UI interactions including building status selection and dynamic fly-to functionality.
    Back-End:
        server.js:
        A Node.js/Express server that serves as a secure configuration endpoint. It provides API keys (NREL, OpenWeatherMap, OpenAI) to the front-end without exposing them publicly.
        .env:
        Contains sensitive environment variables, ensuring that API credentials are kept secure.

For a visual overview, please refer to the architectural diagrams and supporting documents included in the /docs folder.
Installation
Prerequisites

    Node.js (v14+ recommended)
    npm (v6+)
    Git
    A modern web browser (Chrome, Firefox, or Edge)

Steps

    Clone the Repository:

git clone https://github.com/MsMelissa/cesium-certification-ai-enabled-city-planning.git
cd cesium-certification-ai-enabled-city-planning

Install Dependencies:

In the project root, run:

npm install

Set Up Environment Variables:

Create a .env file in the project root with the following content:

    OPENAI_API_KEY=your_openai_api_key
    NREL_API_KEY=your_nrel_api_key
    OPENWEATHER_API_KEY=your_openweather_api_key

    Replace the placeholders with your actual keys.

Usage
Local Development

    Start the Back-End Server:

    npm start

    This command runs server.js, which serves API configurations.

    Run the Front-End:

    Use a live server (such as the live-server npm package or VS Code Live Server extension) to open index.html in your browser.

    Interact with the App:
        Use the UI controls to change the season, building status, and building selection.
        The app dynamically updates the HelioViews Score and displays AI-generated insights.
        Click on a building (populated based on the selected status) to have the camera fly to that location, adjusted by orientation and building level.

Testing & Iteration

    Test changes locally without affecting the live deployment.
    When satisfied with updates, commit changes to GitHub. Railway auto-deploys if set up for continuous deployment, or you can manually trigger a deploy via the Railway dashboard.

Deployment

The project is configured for deployment on Railway. To deploy:

    Push Changes to GitHub:

    git add .
    git commit -m "Update project with dynamic building placeholders and advanced camera controls"
    git push

    Automatic Deployment:
    If Railway is set up for auto-deployment, it will detect the push and redeploy the project.

    Manual Deployment:
    Alternatively, log in to your Railway project dashboard and trigger a redeploy.

    Custom Domain:
    The project can be linked to a custom subdomain (e.g., buellton.helioviews.ai). Refer to the Railway documentation on public networking for details.

Contributing

Contributions are welcome! If you have suggestions or improvements:

    Fork the repository.
    Create a feature branch.
    Submit a pull request with a detailed description of your changes.

Please ensure that your code adheres to the project’s coding standards and is thoroughly tested before submission.
License

This project is licensed under the MIT License. See the LICENSE file for details.
Contact

For further inquiries or feedback, please contact:

    Name: Mel Torres
    Email: mel@helioviews.ai
    Website: helioviews.ai

Happy coding! Remember: every great project starts with a single step. If I can build a robust, real-time 3D solar analysis tool with CesiumJS, you can too. Keep iterating and pushing the boundaries of what’s possible with geospatial visualization!
