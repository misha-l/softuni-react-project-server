# Backend in Express for a ReactJS Competition App

Backend written in Express/Node.js for a competition app, allowing users to participate by adding submissions.

# Frontend of the app in ReactJS [in a separate repository on GitHub](https://github.com/misha-l/competition-app).

## Live demo with MongoDB Atlas on Heroku [reactjs-competition-app.herokuapp.com](https://reactjs-competition-app.herokuapp.com/).

## How to run in local environment:
* Clone [frontend](https://github.com/misha-l/competition-app) and [backend](https://github.com/misha-l/softuni-react-project-server) repositories from GitHub.
* Install MongoDB [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
* Navigate to backend directory and run `npm install`, `npm run seed` (optional database seed) and `npm run start`
* Navigate to frontend directory and run `npm install` and `npm run start`
* Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

# App functionality

The app allows users to participate in a competition by adding up to 6 submissions. 
A voting system based on likes is available to rank the competition participants.

The functionality is different for authorized users and unauthorized (guest) users.

Authorized users have access to full CRUD functionality:
* add new submissions;
* view items, already submitted by them (profile page);
* partially edit and delete submitted items;
* vote for submissions by liking them;

Authorized users can only view the list of submissions and submission details.
To vote and participate, they need to login/register first.

## Tech stack:
![MERN](https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/MERN-logo.png/320px-MERN-logo.png "Mongo DB, Express JS, React JS, Node JS")

* Fully responsive web app :heavy_check_mark:
* Error handling and data validation :heavy_check_mark:
* Use a state management solution (Redux) :heavy_check_mark: for authentication only