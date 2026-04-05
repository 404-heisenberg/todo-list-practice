# Todo List Practice

A lightweight browser-based todo app for practicing JavaScript state handling and CSS UI polish.

## What the app does

- Adds tasks from the input form.
- Renders tasks as interactive list items.
- Toggles tasks between incomplete and completed states.
- Updates the checkbox icon based on completion state.
- Deletes tasks from both the UI and in-memory task array.
- Generates unique IDs for each task using `crypto.randomUUID()`.
- Includes starter placeholder tasks on page load for quick testing.

## Tech stack

- HTML for structure
- CSS for styling and interaction states
- Vanilla JavaScript split by responsibility:
  - `state.js` for task state and model
  - `ui.js` for DOM rendering
  - `app.js` for event handling

## Notes

- Data is currently stored in memory only (no persistence after refresh).
- The project is focused on improving frontend fundamentals and UI implementation skills.
