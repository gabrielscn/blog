import "./topbar.css"

export default function TopBar() {
  return (
    <div className="top">
        <div className="topleft">
            <i className="topIcon fab fa-brands fa-facebook-square"></i>
            <i className="topIcon fab fa-brands fa-twitter-square"></i>
            <i className="topIcon fab fa-brands fa-pinterest-square"></i>
            <i className="topIcon fab fa-brands fa-instagram-square"></i>
        </div>
        <div className="topcenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topright">
            <img 
                className="topImg"
                src={require('./perfil.jpg')} 
                alt=""
            />
            <i className="topSearchIcon fab fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
    
  )
}
