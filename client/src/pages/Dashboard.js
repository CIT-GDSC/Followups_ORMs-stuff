import { BiUserCircle } from "react-icons/bi";





function Dashboard() {
  return (
	<section className="dashboard">
    <div className="logo">
      <h3>Eccomerce</h3>
    </div>
    <div className="user">
      <h2>Hello User</h2>
    </div>
    <div className="user-icon">
      <BiUserCircle className="icon" />
    </div>
  </section>
  )
}

export default Dashboard