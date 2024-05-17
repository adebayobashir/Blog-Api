import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Deelete Account</span>
        </div>
        <form className="settingsForm">
            <label>Profile picture</label>
            <div className="settingsPP">
                <img src="images/Profile Picture.jpg" alt="" />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
            <label>username</label>
            <input type="text" placeholder="TechWhiz" />
            <label>Email</label>
            <input type="email" placeholder="TechWhiz@gmail.com" />
            <label>Password</label>
            <input type="password"/>
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
