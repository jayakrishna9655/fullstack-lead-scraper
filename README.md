# 🚀 fullstack-lead-scraper

A high-performance, full-stack browser extension designed to efficiently collect and manage potential customer leads and critical data directly from web pages. This project demonstrates complex integration between a browser extension, an Angular frontend, and a Spring Boot API.

### 🌐 Project Overview

This solution is engineered as a three-part application, integrating a modern frontend, a robust Java backend, and a lightweight browser extension. It demonstrates strong skills in:

* **Full-Stack Development:** Integrating Angular (Frontend) with Spring Boot (Backend).
* **Browser Extension Development:** Utilizing HTML, CSS, and JavaScript for user-facing functionality and content interaction.
* **Data Management:** Implementing RESTful APIs and a persistent relational database (MySQL).

---

## ✨ Key Features

* **One-Click Data Collection:** Allows users to initiate scraping and data collection directly from any supported web page via the browser extension icon.
* **Custom Lead Payload:** Collects structured data points (e.g., Name, Company, Title, Contact Info) customizable via the extension logic.
* **Secure API Communication:** Data is securely transmitted from the extension to the Spring Boot backend via dedicated REST endpoints.
* **Angular Data Dashboard:** A separate, feature-rich web application built with Angular to visualize, filter, and manage the collected lead data.
* **Persistent Storage:** All lead data is stored and managed using a reliable **MySQL** database.

---

## 💻 Tech Stack

This project showcases expertise across multiple layers of modern application architecture:

| Component | Technology | Key Use / Focus |
| :--- | :--- | :--- |
| **Extension (Client-Side)** | **HTML, CSS, JavaScript** | Manages the extension UI (`popup.html`), interacts with the active tab (`content.js`), and handles API calls to the backend. |
| **Frontend (Dashboard)** | **Angular** | A Single-Page Application (SPA) providing a modern dashboard for viewing, searching, and managing collected leads. |
| **Backend (API)** | **Spring Boot (Java)** | Provides the core business logic, API validation, and serves as the data persistence layer controller. Implements secure RESTful services. |
| **Database** | **MySQL** | The primary data store for all collected leads, ensuring data integrity and transactional consistency. |

---

## ⚙️ Installation and Setup

To run this project locally, you need to set up the MySQL database, the Spring Boot backend, and the Angular frontend, and then load the browser extension.

### 1. Database Setup

1.  Ensure **MySQL** is installed and running.
2.  Create a new database (e.g., `lead_scraper_db`).
3.  Update the `application.properties` file in the **`backend/extension/src/main/resources/`** folder with your database connection details:

    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/lead_scraper_db
    spring.datasource.username=YOUR_MYSQL_USER
    spring.datasource.password=YOUR_MYSQL_PASSWORD
    spring.jpa.hibernate.ddl-auto=update # Creates tables automatically
    ```

### 2. Backend (Spring Boot)

1.  Navigate to the backend directory:
    ```bash
    cd backend/extension
    ```
2.  Build and run the application (assuming Maven is installed):
    ```bash
    ./mvnw spring-boot:run
    ```
    *The backend will typically start on port `8080`.*

### 3. Frontend (Angular Dashboard)

1.  Navigate to the frontend directory:
    ```bash
    cd frontend/ViewData
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the Angular development server:
    ```bash
    ng serve --open
    ```
    *The dashboard will typically open in your browser on port `4200`.*

### 4. Browser Extension

1.  Open your preferred Chromium-based browser (Chrome, Edge).
2.  Go to the extensions page (e.g., `chrome://extensions`).
3.  Enable **Developer mode** in the top-right corner.
4.  Click **"Load unpacked"** and select the **`extension/`** folder from the root of this project.
5.  Pin the extension icon for easy access.

---

## 📂 Project Structure

This architecture cleanly separates the three main components:
