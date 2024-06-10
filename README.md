# Angular MSAL Authentication Application

## Overview

This project demonstrates how to integrate Microsoft Authentication Library (MSAL) with an Angular application to implement user authentication using Azure AD. The application includes basic authentication features such as login, logout, and route protection. It leverages MSAL Angular and MSAL Browser libraries for handling authentication flows.

## Workflow

The application consists of two main pages: **Login** and **Dashboard**. Here's an overview of the workflow:

1. **User Navigates to the Application:**
   - When a user navigates to the application (e.g., `http://localhost:4200/`), they are presented with a login button on the **Login** page.

2. **Login Process:**
   - The user clicks the login button, triggering the `login()` method in the `AuthService`. This method uses MSAL to open a popup window for user authentication.
   - After successful authentication, MSAL stores the authentication token and user information. The user is then redirected to the **Dashboard** page.

3. **Route Protection with AuthGuard:**
   - The application uses an `authGuard` function to protect the **Dashboard** route. This guard checks if the user is authenticated by verifying the presence of an active account in MSAL.
   - If the user is not authenticated, they are redirected back to the **Login** page.

4. **Dashboard Page:**
   - On the **Dashboard** page, the user can see a logout button. Clicking this button triggers the `logout()` method in the `AuthService`, which logs the user out using MSAL and redirects them back to the **Login** page.

5. **Logout Process:**
   - The `logout()` method uses MSAL to open a popup window for logout. After successful logout, the user session is cleared, and the application navigates back to the **Login** page.

## Project Structure

- **app.module.ts:**
  - Configures the Angular application, including routing and MSAL integration.
  - Sets up routes for **Login** and **Dashboard** pages.
  - Provides MSAL configuration and initializes the MSAL instance.

- **auth.service.ts:**
  - Handles authentication logic using MSAL.
  - Provides methods for login, logout, and checking authentication status.

- **auth.guard.ts:**
  - Implements a route guard using `CanActivateFn` to protect the **Dashboard** route.
  - Redirects unauthenticated users to the **Login** page.

- **login.component.ts:**
  - Displays the **Login** page with a login button.
  - Calls the `login()` method from `AuthService` to initiate the login process.

- **dashboard.component.ts:**
  - Displays the **Dashboard** page with a logout button.
  - Calls the `logout()` method from `AuthService` to initiate the logout process.

## How to Run the Project

1. **Install Dependencies:**
   - Run `npm install` to install all necessary dependencies.

2. **Configure MSAL:**
   - Update the MSAL configuration in `app.module.ts` with your Azure AD `clientId` and `authority`.

3. **Run the Application:**
   - Run `ng serve` to start the Angular development server.
   - Navigate to `http://localhost:4200/` in your web browser.

4. **Login and Logout:**
   - On the **Login** page, click the login button to authenticate with Azure AD.
   - After successful login, you will be redirected to the **Dashboard** page.
   - On the **Dashboard** page, click the logout button to log out and return to the **Login** page.

## Conclusion

This project demonstrates the integration of MSAL with an Angular application for secure authentication using Azure AD. It provides a clear example of how to manage authentication flows, protect routes, and handle user sessions effectively.
