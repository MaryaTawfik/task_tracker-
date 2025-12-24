Task Tracker Application
A responsive Task Tracker built with React, featuring dark mode, task management, statistics, and persistent storage.

🚀 Features
1️⃣ Header Section (Title + Dark Mode Toggle)
Displays app title (h1).

Dark Mode toggle button.

Switches between Light Mode and Dark Mode.

Preference stored in React state and persisted with localStorage.

2️⃣ Task Input Section (Add Task)
Text input for entering tasks.

"Add Task" button.

Prevents adding empty tasks.

Each task includes:

id

text

completed (boolean)

3️⃣ Task List Section (Display Tasks)
Displays all tasks in a list.

Each task item includes:

Checkbox (mark completed).

Task text.

Delete button.

Completed tasks are visually distinguishable.

Checkbox updates completion state instantly.

Delete button removes tasks immediately.

4️⃣ Delete Task Feature
Every task is deletable.

Deletion updates UI and stored data instantly.

5️⃣ Stats Page (Navigation Required)
Displays:

Total number of tasks.

Number of completed tasks.

Number of remaining tasks.

Uses React Router for navigation.

Task data shared across pages.

6️⃣ Global State Management
Uses Context API (or Jotai).

Tasks stored in global state.

Both Home and Stats pages access the same task data.

💾 Persistence
Tasks persist after page refresh.

Dark mode preference persists.

Uses localStorage.

🎨 Styling
Styled with Plain CSS or Tailwind CSS.

Clear distinction between light and dark mode.

Responsive layout.

📱 Responsive Design
Fully responsive across devices.

On small screens:

Layout adapts properly.

Buttons remain usable.

Text remains readable.
📊 Future Improvements
Add task editing functionality.

Implement task categories/tags.

Add animations for task transitions.

Sync tasks with a backend API.