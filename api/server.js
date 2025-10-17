import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to set JSON Content-Type
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

// GET /me endpoint
app.get("/me", async (req, res) => {
  try {
    // Fetch cat fact
    const response = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000,
    });

    const catFact = response.data?.fact || "Cats are mysterious creatures!";

    // Create JSON response
    const profileData = {
      status: "success",
      user: {
        email: process.env.EMAIL,
        name: process.env.FULL_NAME,
        stack: process.env.STACK,
      },
      timestamp: new Date().toISOString(),
      fact: catFact,
    };

    res.status(200).json(profileData);
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);

    // Handle external API error gracefully
    res.status(200).json({
      status: "success",
      user: {
        email: process.env.EMAIL,
        name: process.env.FULL_NAME,
        stack: process.env.STACK,
      },
      timestamp: new Date().toISOString(),
      fact: "Unable to fetch a cat fact at the moment. Try again later!",
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
