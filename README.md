<img src="https://firebasestorage.googleapis.com/v0/b/ddiv-7c8a9.appspot.com/o/IMG_20240806_121659%20(1).jpg?alt=media&token=acfde23f-3d1d-4478-8875-e2bae381051e" alt="Abdifitaah moha" style="width: 100px; border: 3px solid #4CAF50; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); display: block; margin: 10px;"/>

# Socket.IO Chat Application

A real-time chat application built with Socket.IO, Express, and TypeScript. This project demonstrates real-time bidirectional communication between clients and server using WebSockets.

## 🚀 Features
✔ *Real-time Messaging* – Instant message delivery between users  
✔ *User Identification* – Unique usernames for each participant  
✔ *Direct Messaging* – Send private messages to specific users  
✔ *Emoji Support* – Express yourself with emojis  
✔ *Responsive Design* – Works on all devices  
✔ *Clean UI* – Modern and user-friendly interface  

## Project Structure

```
.
├── client/                 # Frontend application
│   └── index.html         # Chat interface
├── server/                # Backend server
│   ├── server.ts         # Socket.IO server implementation
│   ├── package.json      # Server dependencies
│   └── tsconfig.json     # TypeScript configuration
└── readme.md             # Project documentation
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Server Setup
1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`

### Client Setup
1. Open the `client/index.html` file in your web browser
2. Enter a username to join the chat
3. Start messaging!

## Usage
1. Enter your username and click "Join Chat"
2. To send a message:
   - Enter the recipient's username in the "Recipient username" field
   - Type your message in the "Type your message" field
   - Click "Send Message"
3. Use the emoji button (😊) to add emojis to your messages

## Technical Details

### Server Implementation
- Built with Express.js and Socket.IO
- TypeScript for type safety
- CORS enabled for cross-origin communication
- User session management
- Real-time message routing

### Client Implementation
- Simple HTML/CSS interface
- Socket.IO client for WebSocket communication
- Responsive design
- Real-time message updates


## Security Considerations

- The current implementation allows all origins (`*`) for CORS
- In a production environment, you should:
  - Restrict CORS to specific origins
  - Implement proper authentication
  - Add input validation
  - Use HTTPS

## License

This project is open source and available under the MIT License.

## Author
*Abdifitaah moha Hassan*  
[Website](https://ddiv.online) | [GitHub](https://github.com/Abdifitahmohamuud)
