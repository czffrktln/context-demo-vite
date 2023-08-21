const Chat = ({messages, deleteMessages, loadMessages, loading}) => {
      
  return (
    <div>
      {loading ? <h3>Loading...</h3> : (messages.map(msg => <h2>{msg}</h2>))}
      <button onClick={deleteMessages}>Delete messages</button>
      <button onClick={loadMessages}>Load messages</button>
    </div>
  )
}
export default Chat