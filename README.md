# Social_Network_Backend_app
[![License: MIT license](https://img.shields.io/badge/License-MIT_license-success)](https://opensource.org/licenses/MIT)    
![Project status](https://img.shields.io/badge/Status-Complete-success)

--- 
The `Social_Network_Backend_app` app was developed as a component of the Berkeley Coding Bootcamp Challenge 18. Once combined with the UI, this app allows for the administration of user communication within an internet-based social network and secure storage of user information. It utilizes mongo DB and mongoose for this purpose.
- The walk-through videos showcasing the operation of the Social_Network_Backend_app application can be located in the [Walk-through Video](#walk-through-video) section. Alternatively, you can access the video through cloud storage by following this  [link](https://1drv.ms/v/s!Ak2qWe8ZT6ny3DIKokTMlmWfpVV-?e=CzZu3N).

---
## Table of Contents
* [General Information](#general-information)
* [Walk-through Video](#walk-through-video)
* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Usage](#usage)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Contact](#contact)
* [Project Status](#project-status)
* [License](#license)

---
## General Information 
The main purpose of the `Social_Network_Backend_app` application is to improve the online social networking experience by facilitating the storage and administration of user data in a database. The development of the application was done accordingly to [user story](#user-story) and [acceptance criteria](#acceptance-criteria). 

---
## Walk-through Video 

**User API**

https://github.com/UserOlena/social_network_backend_app/assets/122197592/0ec08d2e-7c35-4ec3-93b0-ab69adf20a15

**Thought API**

https://github.com/UserOlena/social_network_backend_app/assets/122197592/fd9383c5-a182-45d6-a694-4c65fc78c431

---
## Technologies Used
-  [javaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript) - A programming language for web development and scripting.
-  [mongoDb v6.0.6](https://www.mongodb.com/) - Scalable and flexible NoSQL database for modern applications.
-  [node.js v18.16.0](https://nodejs.org/en) -  A scalable server-side JavaScript runtime.
-  [exspress v4.18.2](https://www.npmjs.com/package/express) - Web application framework for building server-side applications.
-  [mongoose v7.2.3](https://mongoosejs.com/) - A library for Node.js applications that provides Object Data Modeling (ODM) for MongoDB.
-  [dotenv v16.1.4](https://www.npmjs.com/package/dotenv) - Loading environment variables from a .env file.

---
## Installation

### Prerequisites

- [node.js v18.16.0](https://nodejs.org/en/) - It is recommended to download `node.js v18.16.0` since this application has only been tested with that version. 
- [mongoDb v6.0.6](https://www.mongodb.com/) - It is recommended to download `mongoDb v6.0.6` since this application has only been tested with that version. 

### Local Installation

To use the `Social_Network_Backend_app`, the user needs to complete the following steps: 

1. Clone the repository:
    - Go to the [Git-Hub](https://github.com/UserOlena/social_network_backend_app)
    - Clone the repository to your local computer.
2. Navigate to the Social_Network_Backend_app directory:
    - Open a command line interface (e.g., Terminal).
    - Change directory to the Social_Network_Backend_app repository location. Use the command `cd ~/...` and replace `...` with the path to the Social_Network_Backend_app directory.  It is crucial to ensure that packages are installed within the Social_Network_Backend_app directory, where `server.js` is located. 
3. Initialize Node.js modules:
    - In the command line, while in the Social_Network_Backend_app directory, run the command `npm i`.
    - This command will install the required Node.js modules for the application to function.
4. Provide your database and server information in the .envExample file:
    - Locate the .envExample file in the cloned repository.
    - Open the file and enter your `server port` and `database name`, as well as any other required information.
    - Remove the word `EXAMPLE` from the file name, so it becomes `.env`.

    By following this step, you will be able to provide your database and server information in the .env file, allowing the application to connect to the database and server correctly.
5. Start the application:
    - In the command line, type `node server` to start the server.
    - The application should now be up and running.

These steps should guide you through the process of setting up and running the Social_Network_Backend_app successfully.

---
## Usage
- To utilize the `Social_Network_Backend_app`, it is necessary to complete all the steps outlined in the Installation section.
- After completing the installation steps, the user can access the Social_Network_Backend_app by navigating through the command line to the Social_Network_Backend_app directory where all the necessary `node` modules and the `server.js` file are located. They can then call the application by typing `node server` in the command line to start the server.

---
## User Story
```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```  

---
## Acceptance Criteria
```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

---
### Additional Requarements

#### Database Models

Database should contain the following three schemas, including the requirements listed for each model:

**User**:

* `username`
  * String
  * Unique
  * Required
  * Trimmed

* `email`
  * String
  * Required
  * Unique
  * Must match a valid email address (look into Mongoose's matching validation)

* `thoughts`
  * Array of `_id` values referencing the `Thought` model

* `friends`
  * Array of `_id` values referencing the `User` model (self-reference)

**Schema Settings**:

Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.

---

**Thought**:

* `thoughtText`
  * String
  * Required
  * Must be between 1 and 280 characters

* `createdAt`
  * Date
  * Set default value to the current timestamp
  * Use a getter method to format the timestamp on query

* `username` (The user that created this thought)
  * String
  * Required

* `reactions` (These are like replies)
  * Array of nested documents created with the `reactionSchema`

**Schema Settings**:

Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

---

**Reaction** (SCHEMA ONLY)

* `reactionId`
  * Use Mongoose's ObjectId data type
  * Default value is set to a new ObjectId

* `reactionBody`
  * String
  * Required
  * 280 character maximum

* `username`
  * String
  * Required

* `createdAt`
  * Date
  * Set default value to the current timestamp
  * Use a getter method to format the timestamp on query

**Schema Settings**:

This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.

---
### API Routes

**`/api/users`**

* `GET` all users

* `GET` a single user by its `_id` and populated thought and friend data

* `POST` a new user:

```json
// example data
{
    "username": "lernantino",
  "email": "lernantino@gmail.com"
}
```

* `PUT` to update a user by its `_id`

* `DELETE` to remove user by its `_id`

**BONUS**: Remove a user's associated thoughts when deleted.

---
**`/api/users/:userId/friends/:friendId`**

* `POST` to add a new friend to a user's friend list

* `DELETE` to remove a friend from a user's friend list

---
**`/api/thoughts`**

* `GET` to get all thoughts

* `GET` to get a single thought by its `_id`

* `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)

```json
// example data
{
    "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```

* `PUT` to update a thought by its `_id`

* `DELETE` to remove a thought by its `_id`

---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction stored in a single thought's `reactions` array field

* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

---
## Contact
-  [Olena P](https://github.com/UserOlena)
    
---
## Project Status 
- Project is: Complete 

---
## License
- This project is open source and available under the [MIT](./LICENSE)
