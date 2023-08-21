const Navbar = ({msgCount, hasAny}) => {
 
  return (
    <div>
       {hasAny && <h3>you have {msgCount} messages</h3> }
    </div>
  )
}
export default Navbar