import React from 'react';
import Paragraph from "../components/Paragraph";
import { Container, Typography } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

function Help() {
  const headers = [
    "User Profiles",
    "Project Listings",
    "Search and Filters",
    "Collaboration Requests",
    "Chat and Messaging",
    "Notifications",
    "Project Management",
    "User Ratings and Reviews",
  ];

  const contents = [
    "Allows users to create profiles with information about their skills, experience, and interests. Developers can specify the type of projects they want to work on.",
    "Developers can post project ideas along with project descriptions, objectives, required skills, and expected contributions. These project listings are visible to other users interested in joining projects.",
    "Implements search functionality with filters, allowing users to find projects based on keywords, skills required, or project categories (e.g., web development, mobile app development, data science).",
    "Enables users to send collaboration requests to project creators. Project creators can review requests and accept or decline them.",
    "Provides a messaging system for project creators and team members to communicate and discuss project details.",
    "Sends notifications to users about project updates, new collaboration requests, or messages.",
    "Offers basic project management tools to track progress, tasks, and milestones within the platform.",
    "Allows users to leave ratings and reviews for each other, helping build a trusted community of collaborators.",
  ];

  return (
    <>
    <Container component="main">
    <CssBaseline />

      <Typography variant="h5" component="div" style={{ margin: '5%' }}>
        Help Resources
      </Typography>
      {headers.map((header, index) => (
        <Paragraph key={index} header={header} content={contents[index]} />
      ))}
      </Container>
    </>
  );
}

export default Help;
