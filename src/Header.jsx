import './App.css'
import logo from '../FrontEndPracticeStarter/images/logo.svg'

function Header(){
    return(
        <div className="header">
            <div className="headerContainer">
                <div className="balance">
                    <p>My balance</p>
                    <span>$948.41</span>
                </div>

                <div className="svg">
                    <img src={logo} alt="logo" className="logoImg" />
                </div>
            </div>
        </div>
    )
}

export default Header