import  StayLogo  from "./assets/StayLogo.svg";

function Header () {
    return (
        <header>
            <div className="headerLine">
                <div className="menu">
                    <img src={StayLogo} alt="" />
                    <button className="btn" ></button>
                    <button className="btn"></button>
                    <button className="btn" ></button>
                    <button className="btn" ></button>
                </div>
                <div className="userBtns">
                    <button className="btn2"></button>
                    <button className="btn2" ></button>
                    <button className="btn2" ></button>
                    <button className="btn2" ></button>
                </div>
            </div>
        </header>
    );

    
}

export default Header;