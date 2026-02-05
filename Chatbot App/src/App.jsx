import { useState } from 'react'
import './App.css'

function App() {  
        const [chatMessages, setChatMessages] = useState([{
          message: 'hello Chatbot',
          sender: 'user',
          id: 'id1'
        },{
          message: 'Hello! How can i help you?',
          sender: 'robot',
          id: 'id2'
        },{
          message: 'can you get me todays date?',
          sender: 'user',
          id: 'id3'
        },{
          message: 'Today is September 27',
          sender: 'robot',
          id: 'id4'
      }]); 
        // const [chatMessages, setChatMessages] = array; // array destructing
       // const chatMessages = array[0];// current data
       // const setChatMessages = array[1];//destructuring, update the data
      
        return (
          <div className="app-container">          
           <ChatMessages 
            chatMessages={chatMessages}
           />  
            <ChatInput
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
           />               
          </div>
        );
      }

export default App
