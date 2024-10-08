function loadScriptsSequentially(scripts, index = 0) {
    if (index >= scripts.length) return; // All scripts loaded
    let scriptElement = document.createElement('script');
    scriptElement.src = scripts[index];
    scriptElement.onload = () => loadScriptsSequentially(scripts, index + 1); // Load the next script after the current one loads
    document.body.appendChild(scriptElement); // Or append to document.head
}

// Array of script URLs
const scripts = [
    "assets/js/jquery.min.js",
    "assets/js/jquery.scrolly.min.js",
    "assets/js/browser.min.js",
    "assets/js/breakpoints.min.js",
    "assets/js/util.js",
    "assets/js/main.js",
    "assets/webfonts/fontawesome-free-6.6.0-web/css/all.css"
];

// Start loading the scripts
loadScriptsSequentially(scripts);