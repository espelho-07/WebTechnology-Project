import React from 'react';

function Header() {
    return (
        <>

            <div class="container mt-3 d-none d-lg-block small text-muted">
                <div class="stats">
                    <span className='pe-5 small'>Coins: <a href="#" className='fw-semibold text-dark text-decoration-none'>18,017</a></span>
                    <span className='pe-5 small'>Exchanges: <a href="#" className='fw-semibold text-dark text-decoration-none'>1,339</a></span>
                    <span className='pe-5 small'>Market Cap: <a href="#" className='fw-semibold text-dark text-decoration-none'>$4.019T <span class="change green">▲ 2.0%</span></a></span>
                    <span className='pe-5 small'>24h Vol: <a href="#" className='fw-semibold text-dark text-decoration-none'>$144.952B</a></span>
                    <span className='pe-5 small'>Dominance: <a href="#" className='fw-semibold text-dark text-decoration-none'>BTC 56.0% ETH 12.6%</a></span>
                    <span className='pe-5 small'>Gas: <a href="#" className='fw-semibold text-dark text-decoration-none'>585 GWEI</a></span>
                </div>
                <div class="user-actions-top">
                </div>
            </div>

            <hr></hr>
            <div>
                <nav class="navbar navbar-expand-xl">
                    <div class="container flex-column flex-xl-row">

                        <div id="top-logo-bar" class="d-flex align-items-center w-100 w-xl-auto">
                            <button class="navbar-toggler d-none d-sm-inline-flex d-xl-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="far fa-fw fa-bars"></i>
                            </button>

                            <a id="use-app-btn" class="ms-auto d-lg-none" href="#">
                                <button type="button" class="btn btn-primary btn-sm">Use App</button>
                            </a>
                            <button type="button" class="ms-auto d-none d-lg-inline-block d-xl-none btn btn-primary btn-sm">
                                <i class="fas fa-qrcode"></i> Get App
                            </button>
                        </div>

                        <div class="collapse navbar-collapse" id="mainNavbar">
                            <ul class="navbar-nav me-auto mb-2 mb-xl-0">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Cryptocurrencies
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#"><i class="fas fa-ranking-star fa-fw me-2 text-muted"></i>By Market Cap</a></li>
                                        <li><a class="dropdown-item" href="#"><i class="fas fa-shapes fa-fw me-2 text-muted"></i>Categories</a></li>
                                        <li><a class="dropdown-item" href="#"><i class="fas fa-link fa-fw me-2 text-muted"></i>Chains</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><h6 class="dropdown-header">Popular</h6></li>
                                        <li><a class="dropdown-item" href="#"><i class="fas fa-list-ol fa-fw me-2 text-muted"></i>Highlights</a></li>
                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Exchanges
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#"><i class="fas fa-building-columns fa-fw me-2 text-muted"></i>Crypto Exchanges</a></li>
                                        <li><a class="dropdown-item" href="#"><i class="fas fa-cubes fa-fw me-2 text-muted"></i>Decentralized Exchanges</a></li>
                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Products
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#"><i class="fas fa-star fa-fw me-2 text-muted"></i>Crypto Portfolio</a></li>
                                        <li><a class="dropdown-item" href="#"><i class="fas fa-mobile-screen-button fa-fw me-2 text-muted"></i>CoinGecko App</a></li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#">API</a>
                                </li>
                            </ul>

                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                        </div>

                    </div>
                </nav>
            </div>

        </>
    )
}

export default Header;