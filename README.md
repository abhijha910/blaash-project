## Blaash Project

### Introduction
This project involves building a full-stack application with both frontend and backend functionalities, based on the design provided in Figma. The project focuses on implementing ReactJS frontend features, integrating APIs, creating draggable card components, and ensuring a seamless user experience. The backend will handle login with OTP, saving user layouts, and providing the necessary APIs.

### Figma Design
- The Figma design for the project can be found [here](https://www.figma.com/proto/TxyrZ70tJvV6yiGm5mHedL/blaash-2?node-id=0-1).

### Functionality Breakdown

#### Frontend (Functionality 01)
1. **Login Page with OTP via Email:**
   - Users can log in using an OTP sent to their email address.
   
2. **Import Button in Header:**
   - A button in the header allows users to import playlists from YouTube.
   
3. **Fetch and Display User's YouTube Playlists:**
   - Fetch the user's private YouTube playlists using OAuth and display them in the UI.
   
4. **Thumbnail Click Action:**
   - On clicking a playlist thumbnail, the videos in that playlist are listed in the right panel.
   
5. **Video List Icon:**
   - An icon will show a list of videos, with more than 5 items displayed.

#### Draggable Cards (Functionality 02)
1. **Drag-and-Drop Feature:**
   - Use the `react-dnd` library to implement drag-and-drop functionality for the playlist cards.
   
2. **Save Layout:**
   - A "Save Layout" button will save the current layout to Firebase.
   
3. **Load Layout:**
   - A "Load Layout" button retrieves the saved layout and displays it as per the saved positions.

4. **Visual Indicators:**
   - Enhance UX by adding visual indicators like shadow or opacity changes when a card is being dragged.

#### Backend APIs (Functionality 03)
1. **Login API with OTP via Email:**
   - Implement an API to handle user login with OTP via email. Store the user details in a database of your choice (e.g., Firebase, MongoDB).
   
2. **Layout Storage API:**
   - Implement an API that stores the layout when a card is reordered. The layout should be retrieved and displayed in the same position on the next load.

3. **Security for APIs:**
   - Implement appropriate security measures for the APIs, such as input validation, token-based authentication, and secure OTP validation.
   
4. **Edge Case Handling:**
   - Handle edge cases like invalid OTP, duplicate OTP submissions, and duplicate user sign-ups.
   
5. **Error Handling in UI:**
   - Provide clear error messages in the UI for any failed operations and handle errors gracefully in the backend.

### Project Setup

## Installation

Follow these steps to set up the project locally on your machine.

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/blaash-project.git
   ```

2. Navigate into the project directory:

   ```bash
   cd blaash-project/blaash-frontend
   ```

3. Install dependencies:

   If you're facing dependency conflicts, you can use:

   ```bash
   npm install --legacy-peer-deps
   ```

   Or if you prefer a clean install, run:

   ```bash
   npm install
   ```

## Usage

To start the development server:

```bash
npm start
```

The application will be accessible at [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- [List major features of the project, e.g., user login, profile management, dashboard, etc.]
- Integrates with [mention third-party APIs or services used, e.g., Google Login].
- Responsive design optimized for desktop and mobile devices.

## Contributing

Contributions are always welcome! If you would like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.


