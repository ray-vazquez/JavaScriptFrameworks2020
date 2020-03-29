# Simple Authentication Challenge

In Visual Studio code, press `command+shift+v` (Mac) or `ctrl+shift+v` (Windows) to open a Markdown preview.

## Reasons for the Challenge

Many application need a user login or signin process of some kind. This challenge will introduce you to JWT token based authentication within a React Single Page Application (SPA).

### Examples and Documentation

See [simple authentication with local storage](../../examples/11a-authentication-local-storage/README.md).

## Getting Started

You will need to have two terminal windows open and running at once. If you are using Visual Studio Code, you can click on the split-screen or plus icon in your terminal panel:

![Split screen icon in Visual Studio code](../../resources/authentication-server/two-terminals.png)

In one terminal window, you will need to run the authentication server. Please follow the steps [in this README.md](../../resources/authentication-server/README.md) on how to install and start the authentication server.

In the other terminal window, you will need to navigate to the this folder, install all dependencies, and start this exercise.

```bash
cd exercises/11a-authentication/
yarn install
yarn start
```

## User Stories

As a user, I would like to login so that I can see a list of my favorite movies.

As a user, I would like to get feedback when I enter the wrong username or password in the login form.

As a user, I expect to stay logged in when I refresh the page.

As a user, I need to be able to logout.

![Login example](login-example.gif)

NOTE that instead of users, you will be rendering a list of movies.

## Acceptance Criteria

- After the user submits the login form, you must make an AJAX request to http://localhost:7000/jwt/login to login the user.
- If the user typed in an invalid username or password, you must display an error message telling them this.
- You will be getting a token from http://localhost:7000/jwt/login API. You should store this in either local storage or within a secure cookie.
- Once the user has logged in, they should see a list of movies.
- When the user refreshes the page, they should still be logged in. This means they should still be able to see a list of movies from the http://localhost:7000/jwt/movies API.
- The user should be able to logout. After they logout, they should return to the login form.

## Instructions

Start with the instructions inside _src/components/App/App.jsx_ first, then move on to _src/components/LoggedInContent/LoggedInContent.jsx_.

You will be making AJAX calls to:

- http://localhost:7000/jwt/login
- http://localhost:7000/jwt/movies

[Please refer to the server documentation for more information on how to make these request.](../../resources/authentication-server/README.md)
