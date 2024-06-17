# Bookmarker Application

This is my first project on GitHub."

Description
The Bookmarker Application is a simple web tool that allows users to save and manage their favorite website bookmarks. Users can add website names and URLs, visit the bookmarked websites, and delete bookmarks they no longer need. This project uses HTML, CSS, and JavaScript, along with Bootstrap for styling and FontAwesome for icons.

Features
Add Bookmarks: Users can enter a website name and URL to add it to their list of bookmarks.
Validate URL: The application checks if the entered URL is valid before adding it to the bookmarks.
Display Bookmarks: Bookmarks are displayed in a table with options to visit or delete each bookmark.
Delete Bookmarks: Users can remove bookmarks from the list.
User Feedback: If the URL is invalid, an alert box with validation rules is displayed.
Persistent Data: Bookmarks are stored in local storage, ensuring they persist across page reloads.

Usage
Adding a Bookmark: Enter the website name and URL in the respective input fields and click the "Submit" button.
Visiting a Bookmark: Click the "Visit" button next to the bookmark you want to visit. This opens the website in a new tab.
Deleting a Bookmark: Click the "Delete" button next to the bookmark you want to remove.
Closing the Alert: If an invalid URL is entered, an alert box is displayed. Click the close button in the alert box to dismiss it.
Technologies Used

HTML: For the structure of the web page.
CSS: For styling the web page.
Bootstrap: For responsive design and styling.
FontAwesome: For icons.
JavaScript: For functionality and interactivity.
Installation
Clone the repository:
sh
Copy code
git clone https://github.com/your-username/bookmarker.git
Open the index.html file in your web browser to use the application.
License
This project is licensed under the MIT License.

JavaScript Code Summary
The JavaScript code handles the core functionality of the Bookmarker Application:

newSubmit: Validates the URL and, if valid, adds the bookmark to the list and updates the display. If invalid, it shows an alert.
displayWeb: Renders the list of bookmarks in a table format.
clearForm: Clears the input fields after a bookmark is added.
onDataChange: Updates the local storage and refreshes the display.
deleteRow: Removes a bookmark from the list and updates the display.
closeAlert: Hides the alert box when the close button is clicked.

