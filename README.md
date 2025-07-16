# Q&A Forum

This project is a complete, server-side rendered Q&A forum application, similar to a classic discussion board. It was built to study and implement a full-stack application using Node.js, Express, and the Sequelize ORM to interact with a relational database.

Users can ask questions, view them on the home page, and provide answers to existing questions, creating a dynamic and interactive experience.

## ✨ Key Features

* View a list of all questions on the homepage, sorted by most recent.
* Submit new questions through a dedicated form.
* View a detailed page for each individual question, including all of its corresponding answers.
* Submit answers to any existing question.

## 🚀 Tech Stack

* [cite_start]**Back-End:** [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/) [cite: 105, 108]
* [cite_start]**Database:** [MySQL](https://www.mysql.com/) with [Sequelize](https://sequelize.org/) (ORM) [cite: 108, 114]
* [cite_start]**View Engine:** [EJS (Embedded JavaScript)](https://ejs.co/) for Server-Side Rendering [cite: 108]
* **Styling:** Express Static for serving CSS files.

## 🔧 Getting Started

To run this project locally, follow the steps below:

1.  **Clone the repository:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd [NOME_DA_PASTA_DO_PROJETO]
    ```
3.  **Install the dependencies:**
    ```bash
    npm install
    ```
4.  **Database Setup:**
    * This project requires a MySQL database.
    * Create a new database on your local MySQL server.
    * Configure your database connection details (host, user, password, database name) inside the `database/database.js` file.

5.  **Run the application:**
    ```bash
    npm start
    ```
6.  The application will be running on `http://localhost:3000`.

## 📖 Main Routes & Pages

This application uses Server-Side Rendering, where the routes render complete HTML pages.

* `GET /`
    * **Homepage:** Displays a list of all questions submitted.
* `GET /ask`
    * **Ask Page:** Renders the form for a user to create and submit a new question.
* `POST /savequestion`
    * **Handles new question submissions:** Receives data from the `/ask` form, saves it to the database using Sequelize, and redirects to the homepage.
* `GET /question/:id`
    * **Question Detail Page:** Displays a single, specific question along with all the answers that have been submitted for it.
* `POST /answer`
    * **Handles new answer submissions:** Receives data from the answer form on a question page, saves the answer linked to the correct question, and redirects back to the question page.
