const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;
const backendServiceUrl = 'http://backend:5000';

// Serve static files from the 'frontend/public' directory
app.use(express.static(path.join(__dirname, 'frontend', 'public')));

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(backendServiceUrl);
        const data = response.data;
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Surf School Frontend</title>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        margin: 0;
                        padding: 0;
                        background: #8ec3eb;
                        color: #333;
                    }
                    header {
                        background: url('/images/Hero.jpg') no-repeat center center/cover;
                        color: white;
                        padding: 50px 0;
                        text-align: center;
                        background-color: rgba(0, 0, 0, 0.5);
                        background-blend-mode: darken;
                    }
                    header h1 {
                        font-size: 3em;
                        margin: 0;
                    }
                    .container {
                        max-width: 1000px;
                        margin: 20px auto;
                        padding: 20px;
                        background: #f0f0f0;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    .features {
                        display: flex;
                        justify-content: space-between;
                        margin-top: 40px;
                    }
                    .feature {
                        text-align: center;
                        width: 30%;
                    }
                    .feature img {
                        max-width: 100%;
                        height: auto;
                        border-radius: 8px;
                    }
                    .feature h3 {
                        margin-top: 10px;
                        font-size: 1.5em;
                    }
                    .feature p {
                        font-size: 1.1em;
                        margin: 10px 0;
                    }
                </style>
            </head>
            <body>
                <header>
                    <h1>Welcome to Surfing</h1>
                </header>
                <div class="container">
                    <h2>Learn to Surf in Canada:</h2>
                    <p>${data.message}</p>
                    <div class="features">
                        <div class="feature">
                            <img src="/images/Feature1.jpg" alt="Surf Coaching">
                            <h3>Professional Coaching</h3>
                            <p>Surfing is an exhilarating sport that combines physical prowess with the thrill of riding waves. Originating from ancient Polynesian cultures, it has evolved into a popular global pastime. Surfers use boards to glide across the water, harnessing the power of ocean waves for an unmatched sense of freedom and excitement.</p>
                        </div>
                        <div class="feature">
                            <img src="/images/Hero.jpg" alt="Surf Location">
                            <h3>Beautiful Locations</h3>
                            <p>The sport requires a blend of balance, strength, and technique. Surfers must read the waves and time their movements to catch the perfect ride. Conditions vary from serene, rolling waves to challenging, powerful swells, making each surfing experience unique and dependent on both weather and oceanic factors.</p>
                        </div>
                        <div class="feature">
                            <img src="/images/Feature2.jpg" alt="Surf Gear">
                            <h3>Top-notch Gear</h3>
                            <p>Surfing also fosters a strong sense of community and connection to nature. Surf culture often emphasizes environmental stewardship and respect for the ocean. Surfing spots around the world become social hubs where enthusiasts gather, share experiences, and appreciate the beauty and unpredictability of the sea.</p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `);
    } catch (error) {
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Error</title>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        margin: 0;
                        padding: 0;
                        background: #f0f4f8;
                        color: #333;
                    }
                    header {
                        background: #f44336;
                        color: white;
                        padding: 10px 0;
                        text-align: center;
                    }
                    .container {
                        max-width: 800px;
                        margin: 20px auto;
                        padding: 20px;
                        background: white;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        text-align: center;
                    }
                    h1 {
                        margin-top: 0;
                        font-size: 2em;
                    }
                    p {
                        font-size: 1.2em;
                        margin: 10px 0;
                    }
                </style>
            </head>
            <body>
                <header>
                    <h1>Error</h1>
                </header>
                <div class="container">
                    <p><strong>Error Message:</strong> ${error.message}</p>
                </div>
            </body>
            </html>
        `);
    }
});

app.listen(port, () => {
    console.log(`Frontend is running on http://localhost:${port}`);
});
