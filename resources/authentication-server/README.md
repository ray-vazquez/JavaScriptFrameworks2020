# Authentication Server - Authentication and Displaying Content

In Visual Studio code, press `command+shift+v` (Mac) or `ctrl+shift+v` (Windows) to open a Markdown preview.

## Server Installation

Using your command line, you will need to navigate to the resources folder, install all dependencies, and start the server by typing in the commands down below.

```bash
cd resources/authentication-server/
yarn install
yarn start
```

After running the server on your machine, you will be greeted with a message Your server is running on http://localhost:7000 .

## Making AJAX Requests

The API is a REST based API. You must use Axios or FETCH with stand-alone promises or async and await.

| Route                            | METHOD |                                     cdResponse |
| -------------------------------- | :----: | ---------------------------------------------: |
| http://localhost:7000/jwt/login  |  POST  | Status 200 (Success) Status 401 (Unauthorized) |
| http://localhost:7000/jwt/movies |  GET   |    Status 200 (Success) Status 403 (Forbidden) |

## Server JSON Response:

On Success: http://localhost:7000/jwt/movies

```JSON
{
  "halloween": {
    "title": "Halloween",
    "poster": "https://m.media-amazon.com/images/M/MV5BMmMzNjJhYjUtNzFkZi00MWQ4LWJiMDEtYWM0NTAzNGZjMTI3XkEyXkFqcGdeQXVyOTE2OTMwNDk@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "synopsis": "Laurie Strode comes to her final confrontation with Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago.",
    "releaseDate": "Oct 19, 2018",
    "times": [
      "11:50 AM",
      "1:20 PM",
      "2:40 PM",
      "4:20 PM",
      "5:40 PM",
      "7:20 PM",
      "8:40 PM",
      "9:20 PM",
      "10:20 PM"
    ]
  },
  "venom": {
    "title": "Venom",
    "poster": "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "synopsis": "One of Marvel’s most enigmatic, complex and badass characters comes to the big screen, starring Academy Award® nominated actor Tom Hardy as the lethal protector Venom.",
    "releaseDate": "Oct 5, 2018",
    "times": [
      "11:20 AM",
      "1:00 PM",
      "4:00 PM",
      "7:00 PM",
      "10:00 PM"
    ]
  },
  "a-star-is-born": {
    "title": "A Star Is Born",
    "poster": "https://m.media-amazon.com/images/M/MV5BNmE5ZmE3OGItNTdlNC00YmMxLWEzNjctYzAwOGQ5ODg0OTI0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "synopsis": "A musician helps a young singer and actress find fame, even as age and alcoholism send his own career into a downward spiral.",
    "releaseDate": "Oct 5, 2018",
    "times": [
      "12:00 PM",
      "2:00 PM",
      "3:20 PM",
      "5:20 PM",
      "6:40 PM",
      "9:50 PM"
    ]
  }
}
```

## Sample AJAX REQUEST FOR LOGIN

```JAVASCRIPT
axios("http://localhost:7000/jwt/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: { username, password }
    })
      .then(resp => login(resp.data.token))

```

### SAMPLE REQUEST FOR GETTING MOVIES:

`````JAVASCRIPT
  axios("http://localhost:7000/jwt/movies", {
      method: "GET",
      headers: {
        // Passing to the token to the API here, where it is a header.
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(resp => console.log(resp.data.data))
      ````
`````
