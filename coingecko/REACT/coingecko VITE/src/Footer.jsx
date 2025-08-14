import React from 'react';

function Footer() {
    return (
        <>

        <hr className='hr-light'/>

            <div className='container py-3'>
                <div className='row'>
                    {/* Logo & Description Section Section */}
                    <div className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                        <a className="navbar-brand py-0 mb-3 d-block" href="/">
                            <img
                                alt="CoinGecko"
                                src="https://static.coingecko.com/s/coingecko-logo-5683263fd3ea8a4f152dd5f7299acfc5f84ee73955428acff22913b8e59e6c54.svg"
                                style={{ height: '40px' }}
                            />
                        </a>
                        <small className='text-muted'>
                            CoinGecko provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalisation, CoinGecko tracks community growth, open-source code development, major events and on-chain metrics.
                        </small>
                    </div>

                    {/* Footer LEFT Part With All Helpful Links */}
                    <div className='col-lg-8 col-md-12'>
                        <div className='row'>
                            {/* Resources Column */}
                            <div className='col-md-6 col-lg-3'>
                                <div className="mt-4 mt-lg-0">
                                    <a className="fw-semibold text-muted text-decoration-none d-flex justify-content-between align-items-center py-2 border-lg-0" data-bs-toggle="collapse" href="#footerResources" role="button">
                                        Resources <span className="d-lg-none"><i className="fas fa-plus"></i></span>
                                    </a>
                                    <div className="collapse d-lg-block" id="footerResources">
                                        <ul className="list-unstyled d-flex flex-column gap-3 pt-2">
                                            <li><a href="/en/news" className="text-muted text-decoration-none">Crypto News</a></li>
                                            <li><a href="/en/public-companies-bitcoin" className="text-muted text-decoration-none">Bitcoin Treasury</a></li>
                                            <li><a href="/en/cryptocurrency-heatmap" className="text-muted text-decoration-none">Crypto Heatmap</a></li>
                                            <li><a href="/en/api" className="text-muted text-decoration-none">Crypto API</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Support Column (with your new links) */}
                            <div className='col-md-6 col-lg-3'>
                                <div className="mt-4 mt-lg-0">
                                    <a className="fw-semibold text-muted text-decoration-none d-flex justify-content-between align-items-center py-2 border-lg-0" data-bs-toggle="collapse" href="#footerSupport" role="button">
                                        Support <span className="d-lg-none"><i className="fas fa-plus"></i></span>
                                    </a>
                                    <div className="collapse d-lg-block" id="footerSupport">
                                        <ul className="list-unstyled d-flex flex-column gap-3 pt-2">
                                            <li><a href="/request-form?locale=en" className="text-muted text-decoration-none">Request Form</a></li>
                                            <li><a href="https://gcko.io/coingeckoads" className="text-muted text-decoration-none">Advertising</a></li>
                                            <li><a href="/en/candy/partners-getting-started" className="text-muted text-decoration-none">Candy Rewards Listing</a></li>
                                            <li><a href="https://support.coingecko.com/" className="text-muted text-decoration-none">Help Center</a></li>
                                            <li><a href="https://hackenproof.com/coingecko/coingecko" className="text-muted text-decoration-none">Bug Bounty</a></li>
                                            <li><a href="/en/faq" className="text-muted text-decoration-none">FAQ</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* About Column */}
                            <div className='col-md-6 col-lg-3'>
                                <div className="mt-4 mt-lg-0">
                                    {/* Accordion Trigger */}
                                    <a className="fw-semibold text-muted text-decoration-none d-flex justify-content-between align-items-center py-2 border-lg-0" data-bs-toggle="collapse" href="#footerAbout" role="button">
                                        About CoinGecko
                                        <span className="d-lg-none"><i className="fas fa-plus"></i></span>
                                    </a>
                                    {/* Collapsible Content */}
                                    <div className="collapse d-lg-block" id="footerAbout">
                                        <ul className="list-unstyled d-flex flex-column gap-3 pt-2">
                                            <li><a href="/en/about" className="text-muted text-decoration-none">About Us</a></li>
                                            <li>
                                                <a target="_blank" rel="noreferrer" href="https://careers.coingecko.com/" className="text-muted text-decoration-none">
                                                    Careers <span className="badge-custom-green text-muted ms-1">Join Us</span>
                                                </a>
                                            </li>
                                            <li><a href="https://brand.coingecko.com" className="text-muted text-decoration-none">Branding Guide</a></li>
                                            <li><a href="/en/methodology" className="text-muted text-decoration-none">Methodology</a></li>
                                            <li><a href="/en/disclaimer" className="text-muted text-decoration-none">Disclaimer</a></li>
                                            <li><a href="/en/terms" className="text-muted text-decoration-none">Terms of Service</a></li>
                                            <li><a href="/en/privacy" className="text-muted text-decoration-none">Privacy Policy</a></li>
                                            <li><a href="/en/ad-policy" className="text-muted text-decoration-none">Ad Policy</a></li>
                                            <li><div id="ot-sdk-btn" className="text-muted" style={{ cursor: 'pointer' }}>Cookie Preferences</div></li>
                                            <li><a target="_blank" rel="noreferrer" href="https://trust.coingecko.com" className="text-muted text-decoration-none">Trust Center</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Community Column */}
                            <div className='col-md-6 col-lg-3'>
                                <div className="mt-4 mt-lg-0">
                                    {/* Accordion Trigger */}
                                    <a className="fw-semibold text-muted text-decoration-none d-flex justify-content-between align-items-center py-2  border-lg-0" data-bs-toggle="collapse" href="#footerCommunity" role="button">
                                        Community
                                        <span className="d-lg-none"><i className="fas fa-plus"></i></span>
                                    </a>
                                    {/* Collapsible Content */}
                                    <div className="collapse d-lg-block" id="footerCommunity">
                                        <ul className="list-unstyled d-flex flex-column gap-3 pt-2">
                                            <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/coingecko" className="text-muted text-decoration-none">X/Twitter</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href="https://t.me/coingecko" className="text-muted text-decoration-none">Telegram Chat</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href="https://t.me/coingeckonews" className="text-muted text-decoration-none">Telegram News</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/coingecko/" className="text-muted text-decoration-none">Instagram</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/r/coingecko/" className="text-muted text-decoration-none">Reddit</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href="https://discord.gg/EhrkaCH" className="text-muted text-decoration-none">Discord</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/coingecko" className="text-muted text-decoration-none">Facebook</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC-OTgwOAI7KmP0eDAtqN3Ow?sub_confirmation=1" className="text-muted text-decoration-none">Youtube</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@coingeckotv" className="text-muted text-decoration-none">TikTok</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <hr className='hr-light'/>

            {/* Newletter Section */}
            <div className="container my-4">
                <small>
                    <div className="row align-items-center">
                        {/* Newletter Described */}
                        <div className="col-lg-9 mb-4 mb-lg-0">
                            <h5 className="fw-semibold">
                                Interested to stay up-to-date with cryptocurrencies?
                            </h5>
                            <p className="text-muted mb-0">
                                Get the latest crypto news, updates, and reports by subscribing to our free newsletter.
                            </p>
                        </div>

                        {/* Email-Input */}
                        <div className="col-lg-3">
                            <form>
                                <div className="d-flex flex-column flex-md-row gap-2">
                                    <input
                                        type="email"
                                        className="form-control form-control-sm"
                                        placeholder="Enter your email address"
                                        aria-label="Enter your email address"
                                    />
                                    <button
                                        type="submit"
                                        className="btn-3d-green"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                                {/* This div is a placeholder for a service like hCaptcha or reCAPTCHA */}
                                <div id="subscribe-newsletter-captcha-footer" className="mt-3"></div>
                            </form>
                        </div>
                    </div>
                </small>
            </div>

            <hr className='hr-light'/>

            {/* End App Install & Important Description Section */}
            <div className="container my-5">
                <div className="d-lg-flex justify-content-between align-items-center">

                    <div className="text-center text-lg-start mb-4 mb-lg-0">
                        <small className="text-muted">© 2025 CoinGecko. All Rights Reserved.</small>
                    </div>

                    <div className="text-center text-lg-end">
                        <a target="_blank" rel="noopener" href="https://coingecko.app.link/footer-android" className="me-2">
                            <img loading="lazy" alt="Google Play Store Button" width="135" height="40" src="https://static.coingecko.com/s/coingecko_logos/google_play_store-cb1f298b04afa7f74639a948d9b2e22e4aa6eea9486a2b0442c2cf9bdcda63e8.svg" />
                        </a>
                        <a target="_blank" rel="noopener" href="https://coingecko.app.link/footer-ios">
                            <img loading="lazy" alt="Apple App Store Button" width="135" height="40" src="https://static.coingecko.com/s/coingecko_logos/apple_app_store-558245a688cc13737dfb861fd82b252d75d5afbaf343c06e3067a454675bbe05.svg" />
                        </a>
                    </div>
                </div>

                {/* Important Disclaimer */}
                <div className="text-muted my-4" role="alert">
                    <b><a href="#" className="text-muted text-decoration-none fw-semibold small">
                        <u><b className='text-dark fw-semibold'>IMPORTANT DISCLAIMER:</b></u>
                    </a></b>
                    <small className='ps-2'>
                        All content provided herein our website, hyperlinked sites, associated applications, forums, blogs, social media accounts and other platforms (“Site”) is for your general information only, procured from third party sources. We make no warranties of any kind in relation to our content, including but not limited to accuracy and updatedness. No part of the content that we provide constitutes financial advice, legal advice or any other form of advice meant for your specific reliance for any purpose. Any use or reliance on our content is solely at your own risk and discretion. You should conduct your own research, review, analyse and verify our content before relying on them. Trading is a highly risky activity that can lead to major losses, please therefore consult your financial advisor before making any decision. No content on our Site is meant to be a solicitation or offer.
                    </small>
                </div>
            </div>

        </>
    );
}

export default Footer;
