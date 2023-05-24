# Photolabs

PhotoLabs is a React-based single-page application that allows users to view photos in different contexts.

Users can:

- view photos from the homepage and see details about the photographer and location
- can navigate to different photo categories, which are listed as topics in the navigation bar
- can click on a photo to view a larger version of the photo and similar photos below it
- "like" and "unlike" photos from the homepage, topics page, and the modal view
- can see a notification in the navigation bar when they like a photo

## Final Product

### Homepage

Users are brought to the homepage and can scroll through all the photos loaded from the API and see details about the photograph. When they like a photo, a green notification symbol pops up on the heart in the navigation bar.

!["Users can scroll through the homepage and 'like' photos."](https://github.com/Shamayal/photolabs-starter/blob/main/docs/PhotoLabs-Homepage.gif)

### Topics

Users can navigate through different topics to view photos in that category.
!["Users can navigate through categories."](https://github.com/Shamayal/photolabs-starter/blob/main/docs/PhotoLabs-Topics.gif)

### Modal View

Users can click on a photo to view a larger version of it, as well as view, click, and like similar photos.
!["Users can click on a photo to view a larger version of it."](https://github.com/Shamayal/photolabs-starter/blob/main/docs/PhotoLabs-Modal.gif)

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

## Dependencies

### Frontend

- Axios
- React
- React-dom
- React-scripts
- Web-Vitals
- Sass

### Backend

- Body-Parser
- Cors
- Dotenv
- Express
- Helmet
- PG
- Socket.io
- WS
