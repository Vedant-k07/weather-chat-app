# Weather Agent Chat Interface

A responsive React chat interface for weather queries with real-time streaming responses.

## 🔗 Live Demo & Repository

- **Live Demo:** [https://weather-chat-app-blue.vercel.app/]()https://weather-chat-app-blue.vercel.app/
- **GitHub:** [https://github.com/Vedant-k07/weather-chat-app](https://github.com/Vedant-k07/weather-chat-app)

## ⚡ Quick Setup

```bash
# Clone and install
git clone https://github.com/yourusername/weather-chat-app.git
cd weather-chat-app
npm install

# Configure environment
echo "REACT_APP_THREAD_ID=your_college_roll_number" > .env

# Run locally
npm start
```

## 🚀 Features Implemented

### Core Requirements ✅
- Real-time chat interface with message display
- Streaming API integration with weather agent
- Responsive design (mobile-first, 320px+)
- Loading states and error handling
- Auto-scroll and conversation history

### Bonus Features ✅
- **Dark/Light Mode Toggle** - Theme switching
- **Message Search** - Find messages in chat history
- **Export Chat** - Download conversations as JSON
- **Real-time Streaming** - Live response building
- **Keyboard Shortcuts** - Enter to send, accessibility
- **Sample Questions** - Quick-start prompts

## 🛠️ Tech Stack

- **React** 18.2.0 with hooks
- **Tailwind CSS** for responsive styling  
- **Lucide React** icons
- **Vercel** deployment
- **Weather Agent API** integration

## 🔧 Project Structure

```
weather-chat-app/
├── src/
│   ├── WeatherChatApp.jsx    # Main component
│   ├── App.js               # App wrapper
│   └── index.css            # Tailwind styles
├── .env                     # Environment config
├── package.json             # Dependencies
└── tailwind.config.js       # Tailwind setup
```

## 🧪 Testing Scenarios

Test these queries to verify functionality:
- "What's the weather in London?"
- "Will it rain tomorrow in New York?"
- "Current temperature in Mumbai"

**Features to test:**
- Streaming responses appear in real-time
- Dark/light mode toggle works
- Mobile responsiveness (resize browser)
- Error handling (disconnect network)
- Search and export functionality

## 🚀 Deployment (Vercel)

```bash
# Push to GitHub
git add .
git commit -m "Ready for deployment"
git push origin main

# Deploy on Vercel
# 1. Go to vercel.com
# 2. Import GitHub repo
# 3. Add env var: REACT_APP_THREAD_ID
# 4. Deploy
```




## 🔍 Technical Approach

**State Management:** Used React hooks (useState, useRef, useEffect) for clean state management without external libraries.

**API Integration:** Implemented Server-Sent Events parsing for real-time streaming responses with proper error handling.

**Responsive Design:** Mobile-first approach using Tailwind CSS with breakpoints for desktop, tablet, and mobile.

**Performance:** Efficient re-rendering with proper key props, optimized API calls, and minimal state updates.

## 💡 Key Design Decisions

1. **Single Component Architecture** - Kept simple for maintainability while being easily extensible
2. **Streaming Implementation** - Real streaming vs fake typing for authentic UX
3. **Theme System** - CSS variables with Tailwind's dark mode for smooth transitions
4. **Error Recovery** - Multiple fallback strategies for robust user experience

# Weather Chat App

## Features
- Real-time streaming API responses
- Dark/Light theme toggle
- Message search
- Export chat history
- Responsive design with Tailwind

---

## Documentation
### 1. Brief Explanation of Approach
...
### 2. Assumptions Made
...
### 3. Known Limitations & Areas for Improvement
...


## 🎯 Future Enhancements

- Message persistence with localStorage
- Multiple conversation threads
- File upload support
- Voice input integration

---

**Assignment completed by:** [VEDANT KUMBHAR]  
**College Roll Number:** [AIMLA118]  
**Submission Date:** [19-9-2025]
