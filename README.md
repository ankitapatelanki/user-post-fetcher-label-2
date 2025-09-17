# JavaScript API Practice Project

This project is a JavaScript-based exercise focused on working with asynchronous data fetching and manipulating data retrieved from a fake REST API (`jsonplaceholder.typicode.com`). The project includes multiple challenges that simulate real-world tasks such as filtering, transforming, and updating JSON data.

## 🔗 API Endpoint Used

All operations use the following API endpoint:
https://jsonplaceholder.typicode.com/posts


---

## 📁 Project Structure

- `getAllUsersData()` – Fetches all post data.
- Each question is implemented as a separate `async` function.
- Uses `fetch()` and `async/await` for data handling.

---

## ✅ Assignment Questions

1. **Fetch all posts where the userId is greater than a given number.**
2. **Return all posts where the title contains the word "labore" (case insensitive).**
3. **Fetch all posts, and return the total count of posts by a given userId.**
4. **Find and return the post with the longest body content.**
5. **Return the post with the smallest title length.**
6. **Fetch all posts with an id between two specific numbers (e.g., between 10 and 20).**
7. **Fetch posts where the body contains the phrase "qui officia" (case insensitive).**
8. **Take an id, and return an object with the post's `id`, `userId`, and a new key `postStatus` (set to "active").**
9. **For a given `userId`, return the titles of all the posts written by the user.**
10. **Given a userId, return the first post that was created by that user, based on the `id` (smallest `id`).**

---

## 🛠 Technologies Used

- JavaScript (ES6+)
- Fetch API
- Async/Await
- JSONPlaceholder (Mock API)

---

## 🚀 How to Run

1. Copy the code into a JavaScript file (e.g., `assignment.js`)
2. Run it in a modern browser or use Node.js with a fetch-compatible environment (like `node-fetch`)
3. Uncomment the desired function call at the bottom of the file to test each question.

---

## ✍️ Author

Created by a JavaScript enthusiast for learning and practicing data fetching & manipulation.

---

