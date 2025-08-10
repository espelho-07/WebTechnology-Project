import React from 'react';

function Header() {
    return (
        <>
            {/* Top bar Showing Stats. */}
            <div className="container mt-3 d-none d-lg-block small text-muted">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="stats">
                        <span className='pe-4 small'>Coins: <a href="#" className='fw-semibold text-dark text-decoration-none'>18,017</a></span>
                        <span className='pe-4 small'>Exchanges: <a href="#" className='fw-semibold text-dark text-decoration-none'>1,339</a></span>
                        <span className='pe-4 small'>Market Cap: <a href="#" className='fw-semibold text-dark text-decoration-none'>$4.019T <span className="text-success">▲ 2.0%</span></a></span>
                        <span className='pe-4 small'>24h Vol: <a href="#" className='fw-semibold text-dark text-decoration-none'>$144.952B</a></span>
                        <span className='pe-4 small'>Dominance: <a href="#" className='fw-semibold text-dark text-decoration-none'>BTC 56.0% ETH 12.6%</a></span>
                        <span className='pe-4 small'>Gas: <a href="#" className='fw-semibold text-dark text-decoration-none'>585 GWEI</a></span>
                    </div>
                    <div className="user-actions-top">
                        {/* Right Side: User Actions */}
                        <div className="d-none d-lg-flex align-items-center gap-2">

                            {/* Settings Dropdown */}
                            <div className="nav-item dropdown">
                                <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-gear"></i>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item d-flex justify-content-between" href="#">Language <span className="text-muted">English</span></a></li>
                                    <li><a className="dropdown-item d-flex justify-content-between" href="#">Currency <span className="text-muted">USD</span></a></li>
                                    <li><a className="dropdown-item d-flex justify-content-between" href="#">Dark Mode <i className="fas fa-toggle-off"></i></a></li>
                                </ul>
                            </div>

                            {/* Get App Dropdown */}
                            <div className="nav-item dropdown dropdown-hover">
                                <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-phone"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end p-3 text-center" style={{ width: '220px' }}>
                                    <img alt="app QR code" className="img-fluid mb-2" src="https://static.coingecko.com/s/navbar_gekko_app_qr_code-9c7a6abb02579193774328071d5a6b244564f81e6978c1ffc3d86904b54685f4.png" />
                                    <h6 className="fw-bold mb-1">Get the CoinGecko app</h6>
                                    <p className="small text-muted mb-0">Scan the QR code to track crypto prices on-the-go</p>
                                </div>
                            </div>

                            {/* Login and Sign Up Buttons */}
                            <a href="#" role="button" className="btn  btn-outline-secondary btn-sm">Login</a>
                            <a href="#" role="button" className="btn btn-3d-green btn-primary btn-sm">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Underline */}
            <hr className='hr-light'/>

            {/* Main Navigation Bar */}
            <nav className="navbar navbar-expand-xl mb-0 py-0">
                <div className="container">
                    {/* Logo */}
                    <a className="navbar-brand py-0 me-4" href="/">
                        <img alt="CoinGecko" src="https://static.coingecko.com/s/coingecko-logo-5683263fd3ea8a4f152dd5f7299acfc5f84ee73955428acff22913b8e59e6c54.svg" style={{ height: '30px' }} className="d-block" />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mainNavbar">
                        {/* Main Nav Links with Dropdowns */}
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown me-3"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Cryptocurrencies</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"><i className="fas fa-ranking-star fa-fw mb-2 text-muted"></i>By Market Cap</a></li>
                                    <li><a className="dropdown-item" href="#"><i className="fas fa-shapes fa-fw mb-2 text-muted"></i>Categories</a></li>
                                    <li><a className="dropdown-item" href="#"><i className="fas fa-link mb-2 text-muted"></i>Chains</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><h6 className="dropdown-header">Popular</h6></li>
                                    <li><a className="dropdown-item" href="#"><i className="fas fa-list-ol mb-2 text-muted"></i>Highlights</a></li>
                                    <li><a className="dropdown-item" href="#"><i className="fas fa-magic mb-2 text-muted"></i>New Cryptocurrencies</a></li>
                                    <li><a className="dropdown-item" href="#"><i className="fas fa-trophy mb-2 text-muted"></i>Gainers & Losers</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><h6 className="dropdown-header">Tools</h6></li>
                                    <li><a className="dropdown-item" href="#">All Coins</a></li>
                                    <li><a className="dropdown-item" href="#">Compare Coins and NFT</a></li>
                                    <li><a className="dropdown-item" href="#">Converter</a></li>
                                    <li><a className="dropdown-item" href="#">Global Chart</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown me-3"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Exchanges</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"><i className="fas fa-university mb-2 text-muted"></i>Crypto Exchanges</a></li>
                                    <li><a className="dropdown-item" href="#"><i className="fas fa-cubes mb-2 text-muted"></i>Decentralized Exchanges</a></li>
                                    <li><a className="dropdown-item" href="#"><i className="fas fa-chart-line mb-2 text-muted"></i>Derivatives</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown me-3"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">NFT</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"><i className="fas fa-image mb-2 text-muted"></i>NFT Floor Price</a></li>
                                    <li><a className="dropdown-item" href="#"><i className="fas fa-gem mb-2 text-muted"></i>NFT Related Coins</a></li>
                                    <li><a className="dropdown-item" href="#"><i className="fas fa-star mb-2 text-muted"></i>NFT Watchlist</a></li>
                                    <li><a className="dropdown-item" href="#"><i className="fas fa-globe mb-2 text-muted"></i>NFT Global Chart</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown me-3"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Learn</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"><i className="fas fa-book-open mb-2 text-muted"></i>Learn Crypto</a></li>
                                    <li><a className="dropdown-item" href="#"><i className="fas fa-lightbulb mb-2 text-muted"></i>Research Insights</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown me-3"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"><i className="fas fa-star mb-2 text-muted"></i>Crypto Portfolio</a></li>
                                    <li><a className="dropdown-item" href="#"><i className="fas fa-mobile-alt mb-2 text-muted"></i>CoinGecko App</a></li>
                                    <li><a className="dropdown-item" href="#"><i className="fas fa-crown mb-2 text-muted"></i>CoinGecko Premium</a></li>
                                </ul>
                            </li>
                            {/* --- API DROPDOWN ADDED HERE --- */}
                            <li className="nav-item dropdown me-3"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">API</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Crypto API</a></li>
                                    <li><a className="dropdown-item" href="#">On-chain DEX API</a></li>
                                    <li><a className="dropdown-item" href="#">NFT API</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><h6 className="dropdown-header">Resources</h6></li>
                                    <li><a className="dropdown-item" href="#">Pricing</a></li>
                                    <li><a className="dropdown-item" href="#">Documentation</a></li>
                                    <li><a className="dropdown-item" href="#">Learn API</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><h6 className="dropdown-header">Enterprise</h6></li>
                                    <li><a className="dropdown-item" href="#">API for Business</a></li>
                                    <li><a className="dropdown-item" href="#">Case Studies</a></li>
                                </ul>
                            </li>
                        </ul>

                        {/* Right-aligned items */}
                        <div className="d-flex align-items-center gap-3 ms-auto">
                            <a href="#" className="text-dark text-decoration-none fw-semibold small">
                                <i className="fas fa-candy-cane text-primary me-1"></i>Candy
                            </a>
                            <a href="#" className="text-dark text-decoration-none fw-semibold small">
                                <i className="fas fa-star text-warning me-1"></i>Portfolio
                            </a>
                            <form className="position-relative">
                                <i className="fas fa-search position-absolute top-50 translate-middle-y" style={{ left: '12px', color: '#aaa' }}></i>
                                <input className="form-control form-control-sm rounded-pill" type="search" placeholder="Search" aria-label="Search" style={{ paddingLeft: '34px', width: '250px' }} />
                            </form>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Underline */}
            <hr className='hr-light'/>
            
        </>
    );
}

export default Header;
