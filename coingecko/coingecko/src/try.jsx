import React from 'react';

function Header() {
    return (
        <>
            {/* Top statistics bar */}
            <div className="container-fluid border-bottom py-2 small text-muted d-none d-lg-block">
                <div className="d-flex justify-content-between align-items-center">
                    {/* Left Side: Stats */}
                    <div className="d-flex align-items-center gap-4">
                        <span>Coins: <a href="#" className='fw-semibold text-dark text-decoration-none'>18,020</a></span>
                        <span>Exchanges: <a href="#" className='fw-semibold text-dark text-decoration-none'>1,339</a></span>
                        <span>Market Cap: <a href="#" className='fw-semibold text-dark text-decoration-none'>$4.011T</a> <span className="text-success"><i className="fas fa-caret-up"></i> 1.8%</span></span>
                        <span>24h Vol: <a href="#" className='fw-semibold text-dark text-decoration-none'>$133.859B</a></span>
                        <span>Dominance: <a href="#" className='fw-semibold text-dark text-decoration-none'>BTC 58.0% ETH 12.7%</a></span>
                        <span><i className="fab fa-ethereum"></i> Gas: <a href="#" className='fw-semibold text-dark text-decoration-none'>0.832 GWEI</a></span>
                    </div>

                    {/* Right Side: User Actions */}
                    <div className="d-flex align-items-center gap-2">
                        <div className="nav-item dropdown">
                            <button className="btn btn-sm btn-outline-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-cog"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">Language</a></li>
                                <li><a className="dropdown-item" href="#">Currency</a></li>
                                <li><a className="dropdown-item" href="#">Dark Mode</a></li>
                            </ul>
                        </div>
                        <a href="#" role="button" className="btn btn-sm btn-outline-secondary">Login</a>
                        <a href="#" role="button" className="btn btn-sm btn-success">Sign up</a>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <nav className="navbar navbar-expand-xl bg-body-tertiary">
                <div className="container-fluid">
                    {/* Logo and Main Nav Links */}
                    <a className="navbar-brand py-0 me-4" href="/">
                        <img alt="CoinGecko" src="https://static.coingecko.com/s/coingecko-logo-5683263fd3ea8a4f152dd5f7299acfc5f84ee73955428acff22913b8e59e6c54.svg" style={{ height: '30px' }} className="d-block" />
                    </a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mainNavbar">
                        <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                            <li className="nav-item"><a className="nav-link" href="#">Cryptocurrencies</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Exchanges</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">NFT</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Learn</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">API</a></li>
                        </ul>

                        {/* Right-aligned items */}
                        <div className="d-flex align-items-center gap-3">
                            <a href="#" className="text-dark text-decoration-none fw-semibold small">
                                <i className="fas fa-candy-cane text-primary me-1"></i>Candy
                            </a>
                            <a href="#" className="text-dark text-decoration-none fw-semibold small">
                                <i className="fas fa-star text-warning me-1"></i>Portfolio
                            </a>
                            <form className="position-relative">
                                <i className="fas fa-search position-absolute top-50 translate-middle-y" style={{left: '12px', color: '#aaa'}}></i>
                                <input className="form-control form-control-sm rounded-pill" type="search" placeholder="Search" aria-label="Search" style={{paddingLeft: '34px', width: '250px'}} />
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
