import React from "react";
import headerLogo from '../../assets/header-logo.png'

function Header() {
    return (
        <>
            <section className="header">
                <div className="container">
                    <div className="header_content">
                        <div className="header_content_info">
                            <div className="header_logo_content">
                                <div className="header-logo">
        <img src={headerLogo} alt="" className="header-logo-img"/>
                                </div>
                            </div>
                        
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;
