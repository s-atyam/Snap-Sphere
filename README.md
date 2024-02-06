# Snap Sphere

This is a modern social media platform built with React.js, TypeScript, Tailwind CSS, and integrated with Appwrite for backend services

## Tech Stack

- React.js
- TypeScript
- Appwrite (Backend as a Service)
- React Query
- Tailwind CSS

## Features

**Authentication**: A robust authentication system ensuring security and user privacy.

**Explore Page**: Homepage for users to explore posts, with a featured section for top creators.

**Like and Save Functionality**: Enable users to like and save posts, with dedicated pages for managing liked and saved content.

**Profile Page**: A user profile page showcasing liked posts and providing options to edit the profile.

**Browse Other Users**: Allow users to browse and explore other users' profiles and posts.

**Create Post Page**: Implement a user-friendly create post page with effortless file management, storage, and drag-drop feature.

**Edit Post Functionality**: Provide users with the ability to edit the content of their posts at any time.

**React Query Integration**: Incorporate the React Query (Tanstack Query) data fetching library for auto caching to enhance performance, parallel queries for efficient data retrieval, and first-class mutations.

**Backend as a Service (BaaS) - Appwrite**: Utilize Appwrite as a Backend as a Service.

## Setup Instructions

### Cloning the Repository

```bash
git clone git@github.com:s-atyam/Snap-Sphere.git
cd snap-sphere
npm install
```
### Set Up Environment Variables

- Create a file named .env in the root of your project and add the following content: 
```.env
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_STORAGE_ID=
VITE_APPWRITE_USER_COLLECTION_ID=
VITE_APPWRITE_POST_COLLECTION_ID=
VITE_APPWRITE_SAVES_COLLECTION_ID=
```
- Replace these values with your Appwrite credentials.

### Running the Project
```bash
npm start
```