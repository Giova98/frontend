import { useEffect, useState } from 'react';
import fondo2 from '../../assets/fondo2.png'
import fondo3 from '../../assets/fondo3.png'

const ChatComponent = () => {
  const [activeChat, setActiveChat] = useState([]);
  const [message, setMessage] = useState('');
  const [chatlist, setChatlist] = useState([]);
  const [conversations, setConversations] = useState({})
  
  useEffect(() => {
    
    fetch('https://localhost:3000/chat')
    .then(res => res.json())
    .then(data => {
      setConversations()
    })
    .catch(console.log('error al traer el mensaje'))
  }, []);

  const handleSendMessage = () => {
    if (message.trim() === '') return;

    const newMessage = {
      sender: 'You',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: message,
      type: 'text'
    };

    setConversations(prev => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), newMessage]
    }));

    setMessage('');
  };


  return(
    <div className="grid grid-cols-[_1fr_ _1fr_ _1fr_ _1fr_] grid-rows-1 rounded-lg overflow-hidden shadow-lg relative">

      {/* Imagen izquierda */}
      <div className="col-start-1 col-end-2 max-h-auto">
        <img src={fondo2} alt="" className="w-full h-full object-cover object-left" />
      </div>

      {/* Lista de chats */}
      <div className="col-start-2 col-end-3 bg-[#40250D] text-white flex flex-col py-6 my-8">
        <div className="p-4">
          <h2 className="text-xl font-bold">Chats</h2>
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="Search for messages or contacts"
              className="w-full p-2 pl-8 rounded bg-[#60250D] text-white placeholder-gray-300 text-sm"
            />
            <svg
              className="absolute left-2 top-3 h-4 w-4 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Lista de conversaciones */}
        <div className="flex-1 overflow-y-auto">
          {chatlist.map((chat, index) => (
            <div
              key={index}
              className={`flex items-center p-3 border-b border-[#40250D] cursor-pointer hover:bg-[#60250D] hover:bg-opacity-10 ${activeChat === chat.name ? 'bg-[#60250D] bg-opacity-20' : ''}`}
              onClick={() => setActiveChat(chat.name)}
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#40250D] flex items-center justify-center text-white">
                {chat.name.charAt(0)}
              </div>
              <div className="ml-3 flex-1 overflow-hidden">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-white">{chat.name}</h3>
                  <span className="text-xs text-gray-300">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-300 truncate">{chat.lastMessage}</p>
              </div>
              {chat.unread && (
                <div className="ml-2 h-2 w-2 rounded-full bg-white"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Área de chat principal */}
      <div className="col-start-3 col-end-4 bg-[#FDE7B9] bg-opacity-70 relative z-10 flex flex-col py-6 my-2">

        {/* Encabezado del chat */}
        <div className="p-4 border-b border-[#40250D] bg-[#60250D] bg-opacity-10 flex items-center">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#40250D] flex items-center justify-center text-white">
            {activeChat.charAt(0)}
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-[#40250D]">{activeChat}</h3>
            <p className="text-xs text-gray-500">
              {conversations[activeChat]?.[conversations[activeChat]?.length - 1]?.time || ''} •
              {chatList.find(c => c.name === activeChat)?.lastMessage.includes('Typing') ? ' Typing...' : ' Online'}
            </p>
          </div>
        </div>

        {/* Mensajes */}
        <div className="flex-1 p-4 overflow-y-auto">
          {conversations[activeChat]?.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${msg.sender === 'You' ? 'bg-[#60250D] text-white' : 'bg-white text-[#40250D]'}`}
              >
                <div className="flex items-center mb-1">
                  <span className="font-medium">{msg.sender}</span>
                  <span className="ml-2 text-xs opacity-70">{msg.time}</span>
                </div>
                <p>{msg.text}</p>
                {msg.type === 'voice' && (
                  <div className="mt-1 flex items-center text-xs">
                    <svg
                      className="h-4 w-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                    Voice message
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input de mensaje */}
        <div className="p-4 border-t border-[#40250D]">
          <div className="flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ingresa tu mensaje..."
              className="flex-1 p-2 rounded-l border border-[#40250D] focus:outline-none focus:ring-1 focus:ring-[#60250D]"
            />
            <button
              onClick={handleSendMessage}
              className="bg-[#60250D] text-white px-4 py-2 rounded-r hover:bg-[#40250D] transition"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>

      {/* Imagen derecha */}
      <div className="col-start-4 col-end-5">
        <img src={fondo3} alt="" className="w-full h-full object-cover object-right" />
      </div>
    </div>
  );
};

export default ChatComponent;