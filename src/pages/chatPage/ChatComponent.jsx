import { useEffect, useState, useRef } from 'react';
import fondo2 from '../../assets/fondo2.png'
import fondo3 from '../../assets/fondo3.png'
import { useAuth } from '../../services/auth/AuthContext';
import { useLocation, useNavigate } from 'react-router';
import { io } from 'socket.io-client';

const socket = io("http://localhost:3000");

const ChatComponent = () => {
  const [activeChat, setActiveChat] = useState('');
  const [message, setMessage] = useState('');
  const [chatlist, setChatlist] = useState([]);
  const [conversations, setConversations] = useState([])
  const [searchTerm, setSearchTerm] = useState('');

  const { user } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const chatUsers = location.state?.chatUsers;
  const userID = chatUsers?.userID;
  const sellerID = chatUsers?.sellerID;

  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [conversations[activeChat]]);

  useEffect(() => {
    if (activeChat) {
      socket.emit("join", activeChat);
    }
  }, [activeChat]);

  useEffect(() => {
    const handler = (newMsg) => {
      const chatId = String(newMsg.chat_id || newMsg.ID_Chat);

      setConversations(prev => ({
        ...prev,
        [chatId]: [...(prev[chatId] || []), newMsg]
      }));
    };

    socket.on("receiveMessage", handler);

    return () => {
      socket.off("receiveMessage", handler);
    };
  }, []);

  useEffect(() => {
    const initChat = async () => {
      try {
        const res = await fetch(`http://localhost:3000/chat/${user.id}`);
        const chats = await res.json();

        setChatlist(chats);

        const existingChat = chats.find(chat =>
          (chat.ID_User === userID && chat.ID_Buyers === sellerID) ||
          (chat.ID_User === sellerID && chat.ID_Buyers === userID)
        );

        if (!existingChat && userID && sellerID) {
          const createdChat = await fetchCreateChat();

          const updatedRes = await fetch(`http://localhost:3000/chat/${user.id}`);
          const updatedChats = await updatedRes.json();

          setChatlist(updatedChats);

          const newChat = updatedChats.find(chat => chat.ID_Chat === createdChat.ID_Chat);
          setActiveChat(newChat?.ID_Chat || createdChat.ID_Chat);
        } else if (existingChat) {
          setActiveChat(existingChat.ID_Chat);
        } else if (chats.length > 0) {
          setActiveChat(chats[0].ID_Chat);
        }

      } catch (error) {
        console.error("Error al inicializar el chat:", error);
      }
    };

    initChat();
  }, [user.id, userID, sellerID]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!activeChat) return;
      try {
        const res = await fetch(`http://localhost:3000/message/${activeChat}`);
        const msgs = await res.json();
        setConversations(prev => ({ ...prev, [activeChat]: msgs }));
      } catch (err) {
        console.error("Error al traer mensajes:", err);
      }
    };
    fetchMessages();
  }, [String(activeChat)]);

  const handleSendMessage = async () => {
    if (message.trim() === '') return;

    const newMessage = {
      chat_id: activeChat,
      sender_id: user.id,
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    try {
      const res = await fetch('http://localhost:3000/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMessage)
      });

      const savedMessage = await res.json();

      socket.emit("sendMessage", {
        ...savedMessage,
        chat_id: savedMessage.ID_Chat,
        Sender: {
          BuyersName: user.name,
          BuyersLastName: user.lastname
        }
      });

      setMessage('');
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
    }
  };


  const fetchCreateChat = async () => {
    const res = await fetch('http://localhost:3000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: userID,
        seller_id: sellerID
      })
    });
    return await res.json();
  };


  return (
    <div className="grid grid-cols-[_1fr_ _1fr_ _1fr_ _1fr_] grid-rows-1 rounded-lg overflow-hidden shadow-lg relative">

      <div className="col-start-1 col-end-2 max-h-auto">
        <img src={fondo2} alt="" className="w-full h-full object-cover object-left" />
      </div>

      <div className="min-w-[300px] min-h-[700px] col-start-2 col-end-3 bg-[#40250D] text-white flex flex-col py-6">
        <div className="p-4">
          <h2 className="text-xl font-bold">Chats</h2>
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="Buscar por nombre o apellido"
              className="w-full p-2 pl-8 rounded bg-[#60250D] text-white placeholder-gray-300 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
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

        <div className="flex-1 p-4 overflow-y-auto max-h-[540px]">
          {chatlist
            .filter(chat => {
              const otherUser = chat.ID_User === user.id ? chat.Buyer : chat.User;
              const fullName = `${otherUser?.BuyersName || ''} ${otherUser?.BuyersLastName || ''}`.toLowerCase();
              return fullName.includes(searchTerm);
            })
            .map((chat, index) => {
              const otherUser = chat.ID_User === user.id ? chat.Buyer : chat.User;
              const fullName = `${otherUser?.BuyersName} ${otherUser?.BuyersLastName}`;
              const avatar = otherUser?.avatarUrl;
              const nickname = otherUser?.NickName;

              return (
                <div
                  key={index}
                  className={`flex items-center p-3 border-b border-[#40250D] cursor-pointer hover:bg-[#60250D] ${String(activeChat) === String(chat.ID_Chat) ? 'bg-[#60250D]' : ''
                    }`} onClick={() => setActiveChat(chat.ID_Chat)}
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#40250D] overflow-hidden">
                    {avatar ? (
                      <img src={`http://localhost:3000${avatar}`} alt="avatar" className="w-full h-full object-cover" />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-white text-sm">
                        {otherUser?.BuyersName?.charAt(0) || '?'}
                      </div>
                    )}
                  </div>
                  <div className="ml-3 flex-1 overflow-hidden">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-medium text-white">{fullName}</h3>
                    </div>
                    <p className="text-sm text-gray-300 truncate">{nickname ? `@${nickname}` : ''}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="min-w-[500px] min-h-[700px] col-start-3 col-end-4 bg-[#FDE7B9] bg-opacity-70 relative z-10 flex flex-col py-6">

        <div className="p-4 border-b border-[#40250D] bg-[#60250D] bg-opacity-10 flex items-center">
          {(() => {
            const chat = chatlist.find(c => c.ID_Chat === activeChat);
            const otherUser = chat ? (chat.ID_User === user.id ? chat.Buyer : chat.User) : null;

            return (
              <>
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#40250D] flex items-center justify-center text-white overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/perfil/${otherUser.ID_Buyers}`)}>
                  {otherUser?.avatarUrl ? (
                    <img
                      src={`http://localhost:3000${otherUser.avatarUrl}`}
                      alt="avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-sm">{otherUser?.BuyersName?.charAt(0) || '?'}</span>
                  )}
                </div>
                <div className="ml-3">
                  <h3
                    className="text-lg font-medium text-[#40250D] cursor-pointer hover:underline"
                    onClick={() => navigate(`/perfil/${otherUser.ID_Buyers}`)}
                  >
                    {otherUser ? `${otherUser.BuyersName} ${otherUser.BuyersLastName}` : "Usuario"}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {conversations[activeChat]?.at(-1)?.time || 'Activo'}
                  </p>
                </div>
              </>
            );
          })()}
        </div>

        <div
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto px-4 max-h-[540px]">
          {conversations[activeChat]?.map((msg, index) => {
            const isSender = msg.sender_id === user.id;
            const senderName = msg.Sender
              ? `${msg.Sender.BuyersName} ${msg.Sender.BuyersLastName}`
              : isSender ? "Tú" : "Desconocido";

            return (
              <div key={index} className={`mb-4 flex ${isSender ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${isSender ? 'bg-[#60250D] text-white' : 'bg-white text-[#40250D]'}`}>
                  <div className="flex items-center mb-1">
                    <span className="font-medium">{senderName}</span>
                    <span className="ml-2 text-xs opacity-70">{msg.time}</span>
                  </div>
                  <p>{msg.text}</p>
                </div>
              </div>
            );
          })}
          <div />
        </div>

        {/* Input de mensaje */}
        <div className="p-4 border-t border-[#40250D]">
          <div className="flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Escribí tu mensaje..."
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

      < div className="col-start-4 col-end-5" >
        <img src={fondo3} alt="" className="w-full h-full object-cover object-right" />
      </div >
    </div >
  );
};

export default ChatComponent;