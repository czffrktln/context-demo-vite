import { useState } from "react"

const useMessages = () => {

  const initialState = ["hello", "szia", "szevasz", "csumi", "csá"]
  
  const [ messages, setMessages ] = useState(initialState)
  const [ loading, setLoading ] = useState(false)

  const deleteMessages = () => {
    setMessages([])
  }

  const loadMessages = (() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setMessages(["csumpi", "csöváz", "harcsamacska"])
      setLoading(false)
    }, 3000);
    return () => {
      clearTimeout(timer)
    };
  });

  const msgCount = messages.length
  const hasAny = !!msgCount
 
  return {messages, deleteMessages, loadMessages, loading, msgCount, hasAny}
}
export default useMessages