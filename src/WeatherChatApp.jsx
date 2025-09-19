import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageSquare, CloudSun, Loader2, AlertCircle, Trash2, Sun, Moon } from 'lucide-react';

const WeatherChatApp = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'agent',
      content: 'Hello! I\'m your weather assistant. Ask me about weather conditions in any city!',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  
  // Your college roll number - REPLACE THIS
  const THREAD_ID = "AIMLA118";
  
  const API_ENDPOINT = "https://brief-thousands-sunset-9fcb1c78-485f-4967-ac04-2759a8fa1462.mastra.cloud/api/agents/weatherAgent/stream";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

 const handleSendMessage = async () => {
  if (!inputMessage.trim() || isLoading) return;

  const userMessage = {
    id: Date.now(),
    role: 'user',
    content: inputMessage,
    timestamp: new Date().toLocaleTimeString()
  };

  setMessages(prev => [...prev, userMessage]);
  setInputMessage('');
  setIsLoading(true);
  setError(null);

  try {
    // Mock delay to simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Extract city from message (simple version)
    const city = inputMessage.match(/(?:in|for)\s+([a-zA-Z\s]+)/i)?.[1]?.trim() || 'your city';
    
    // Mock weather response
    const mockResponses = [
      `The weather in ${city} is sunny with a temperature of 22°C. Perfect day to go outside!`,
      `Currently in ${city}: Partly cloudy, 18°C with light winds. Great weather for a walk!`,
      `${city} weather update: Clear skies, 25°C, very pleasant conditions today.`
    ];
    
    const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
    
    const agentMessage = {
      id: Date.now() + 1,
      role: 'agent',
      content: randomResponse,
      timestamp: new Date().toLocaleTimeString()
    };
    
    setMessages(prev => [...prev, agentMessage]);

  } catch (err) {
    console.error('Error:', err);
    setError('Something went wrong. Please try again.');
  } finally {
    setIsLoading(false);
  }
};

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([{
      id: 1,
      role: 'agent',
      content: 'Hello! I\'m your weather assistant. Ask me about weather conditions in any city!',
      timestamp: new Date().toLocaleTimeString()
    }]);
    setError(null);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const sampleQuestions = [
    "What's the weather in London?",
    "Will it rain tomorrow in New York?",
    "Weather forecast for next week in Tokyo"
  ];

  return (
    <div 
      className={`min-h-screen transition-colors duration-300 ${
        darkMode 
          ? 'bg-gray-900 text-white' 
          : 'text-white'
      }`}
      style={!darkMode ? {
        background: 'linear-gradient(180deg, #00c6ff, #0072ff)'
      } : {}}
    >
      {/* Header */}
      <div className={`sticky top-0 z-10 backdrop-blur-sm border-b transition-colors ${
        darkMode 
          ? 'bg-gray-800/95 border-gray-700' 
          : 'bg-white/20 border-white/30'
      }`}>
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-full ${
              darkMode ? 'bg-blue-600' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <CloudSun className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Weather Assistant</h1>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-white/80'}`}>
                Ask me about weather anywhere!
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                darkMode 
                  ? 'hover:bg-gray-700 text-gray-300' 
                  : 'hover:bg-white/20 text-white/80 hover:text-white'
              }`}
              title="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={clearChat}
              className={`p-2 rounded-full transition-colors ${
                darkMode 
                  ? 'hover:bg-gray-700 text-gray-300' 
                  : 'hover:bg-white/20 text-white/80 hover:text-white'
              }`}
              title="Clear chat"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Sample Questions */}
        {messages.length === 1 && (
          <div className="mb-6">
            <p className={`text-sm font-medium mb-3 ${
              darkMode ? 'text-gray-300' : 'text-white/90'
            }`}>
              Try asking:
            </p>
            <div className="flex flex-wrap gap-2">
              {sampleQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInputMessage(question)}
                  className={`px-3 py-2 rounded-full text-sm transition-colors ${
                    darkMode
                      ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700'
                      : 'bg-white/20 hover:bg-white/30 border border-white/30 text-white backdrop-blur-sm'
                  }`}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Messages */}
        <div className="space-y-4 mb-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] sm:max-w-[70%] ${message.role === 'user' ? 'order-2' : 'order-1'}`}>
                <div
                  className={`p-4 rounded-2xl ${
                    message.role === 'user'
                      ? darkMode
                        ? 'bg-blue-600 text-white'
                        : 'bg-white/90 text-gray-900 backdrop-blur-sm'
                      : message.isError
                      ? darkMode
                        ? 'bg-red-900/50 border border-red-700'
                        : 'bg-red-100/90 border border-red-300 text-red-800 backdrop-blur-sm'
                      : darkMode
                        ? 'bg-gray-800 border border-gray-700'
                        : 'bg-white/90 border border-white/50 text-gray-900 backdrop-blur-sm shadow-lg'
                  } relative`}
                >
                  {message.streaming && (
                    <div className="absolute -top-2 -right-2">
                      <div className={`w-4 h-4 rounded-full animate-pulse ${
                        darkMode ? 'bg-blue-400' : 'bg-blue-500'
                      }`}></div>
                    </div>
                  )}
                  
                  <p className="whitespace-pre-wrap break-words">
                    {message.content}
                    {message.streaming && (
                      <span className="inline-block w-2 h-5 bg-current animate-pulse ml-1"></span>
                    )}
                  </p>
                  
                  <div className={`text-xs mt-2 ${
                    message.role === 'user'
                      ? darkMode ? 'text-blue-100' : 'text-gray-600'
                      : darkMode
                        ? 'text-gray-400'
                        : 'text-gray-500'
                  }`}>
                    {message.timestamp}
                  </div>
                </div>
              </div>
              
              {message.role === 'agent' && (
                <div className={`order-2 ml-3 mt-1 ${message.role === 'user' ? 'order-1 mr-3' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    darkMode ? 'bg-gray-700' : 'bg-white/20 backdrop-blur-sm'
                  }`}>
                    <MessageSquare className={`w-4 h-4 ${darkMode ? 'text-gray-300' : 'text-white'}`} />
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {/* Loading indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className={`p-4 rounded-2xl ${
                darkMode ? 'bg-gray-800' : 'bg-white/90 backdrop-blur-sm border border-white/50'
              }`}>
                <div className="flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    Getting weather information...
                  </span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Error Display */}
        {error && (
          <div className={`mb-4 p-3 rounded-lg flex items-center space-x-2 ${
            darkMode 
              ? 'bg-red-900/50 border border-red-700 text-red-200' 
              : 'bg-red-100/90 border border-red-300 text-red-800 backdrop-blur-sm'
          }`}>
            <AlertCircle className="w-5 h-5" />
            <p>{error}</p>
          </div>
        )}

        {/* Input Area */}
        <div className={`sticky bottom-4 ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/90 border-white/50 backdrop-blur-sm'
        } border rounded-2xl shadow-lg`}>
          <div className="flex items-end space-x-3 p-4">
            <div className="flex-1">
              <textarea
                ref={inputRef}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about weather in any city..."
                className={`w-full resize-none rounded-lg border-0 focus:ring-0 bg-transparent ${
                  darkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                }`}
                rows="1"
                style={{ maxHeight: '120px' }}
                disabled={isLoading}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className={`p-3 rounded-full transition-all ${
                !inputMessage.trim() || isLoading
                  ? darkMode
                    ? 'bg-gray-700 text-gray-500'
                    : 'bg-gray-300 text-gray-500'
                  : darkMode
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherChatApp;