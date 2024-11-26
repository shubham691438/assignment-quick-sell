# Kanban Board Application

This project is an interactive **Kanban Board Application** built with **ReactJS** and pure **CSS**, using the provided API to fetch and display data dynamically. The application allows users to group and sort tickets, with functionality and design aligning closely with the provided requirements and screenshots.

---

## Features

- **Grouping Options**:  
  Users can group tickets in three ways:
  1. **By Status**: Group tickets based on their current status.  
  2. **By User**: Arrange tickets by assigned user.  
  3. **By Priority**: Group tickets based on priority levels (Urgent, High, Medium, Low, No Priority).  

- **Sorting Options**:  
  Tickets can be sorted by:
  1. **Priority**: Descending order.  
  2. **Title**: Ascending order.

- **Responsive Design**:  
  The layout is optimized for different screen sizes, ensuring usability across devices.

- **State Persistence**:  
  The user's selected view state (grouping and sorting) is saved and retained even after page reload.

- **Custom Styling**:  
  All styles are implemented in **pure CSS**, adhering to the provided design specifications.

---

## API

The application interacts with the API provided at:  
[https://api.quicksell.co/v1/internal/frontend-assignment](https://api.quicksell.co/v1/internal/frontend-assignment)

### Priority Levels:  
- **4** - Urgent  
- **3** - High  
- **2** - Medium  
- **1** - Low  
- **0** - No Priority  

---

## Project Setup

1. Clone the repository:  
   ```bash
   git clone <repository-url>
   `
   
2. Navigate to the project directory:

```bash
  cd kanban-board
   ```

3. Install dependencies:

```bash

npm install
```

4. Start the development server:

```
npm start
```

5. Access the application at:
```bash
http://localhost:3000
```
