// This runs as soon as the page content is loaded
document.addEventListener('DOMContentLoaded', function () {

    // --- NEW: LOGIC TO SELECT THE CORRECT TAB ---
    // Get the full URL of the page
    const urlParams = new URLSearchParams(window.location.search);
    // Find the 'view' parameter (e.g., ?view=signup)
    const view = urlParams.get('view');

    // Check which tab to open
    if (view == 'signup') {
        // If the URL has ?view=signup, check the signup radio button
        document.getElementById('tab-signup').checked = true;
    } else {
        // Otherwise, default to checking the login radio button
        document.getElementById('tab-login').checked = true;
    }
});