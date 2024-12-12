# Daily Finance Automation Script

This script automates the following tasks for the [Daily Finance website](https://dailyfinance.roadtocareer.net/) using **Playwright**:

1. **User Registration**: Registers a new user, verifies that a congratulation email is sent, and asserts the toast message.
2. **Login and Add Items**: Logs in with the registered user, adds two random items, and verifies they are displayed in the item list.
3. **Profile Update**: Updates the profile by uploading a profile photo and logs out.
4. **Password Reset**: Resets the password using the "Reset it here" link on the login page.
5. **Login with New Password**: Logs in with the updated password and verifies successful login.

## Prerequisites

### Tools and Libraries
- **Node.js** (>=16): [Download Node.js](https://nodejs.org/)
- **Playwright**: [Install Playwright](https://playwright.dev/)

### Installation Steps
1. Install Playwright:
   ```bash
   npm install playwright
