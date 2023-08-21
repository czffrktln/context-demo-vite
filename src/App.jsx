import './App.css'
import Chat from './components/Chat'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import useMessages from './hooks/useMessages'

function App() {
  
  const {
    messages, 
    deleteMessages, 
    loadMessages, 
    loading, 
    msgCount, 
    hasAny
  } = useMessages()

  return (
    <div className="App">
      <Navbar msgCount={msgCount} hasAny={hasAny}></Navbar>
      <Chat messages={messages} deleteMessages={deleteMessages} loadMessages={loadMessages} loading={loading}></Chat>
      <Footer msgCount={msgCount}></Footer>
    </div>
  )
}
export default App
