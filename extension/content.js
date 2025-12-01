function showSpinner() {
    const overlay = document.createElement("div");
    overlay.id = "lead-spinner-overlay";

    overlay.innerHTML = `
        <div id="lead-spinner"></div>

        <style>
            #lead-spinner-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.4); /* blur */
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 999999;
                pointer-events: auto;
            }

            #lead-spinner {
                width: 60px;
                height: 60px;
                border: 6px solid #ccc;
                border-top-color: #007bff;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }

            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        </style>
    `;

    document.body.appendChild(overlay);

    document.body.style.overflow = "hidden";
}

function hideSpinner() {
    const overlay = document.getElementById("lead-spinner-overlay");
    if (overlay) overlay.remove();

    document.body.style.overflow = "auto";
}

showSpinner(); // <-- spinner shows immediately
function extractEmails() {
    const html = document.body.innerHTML;
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    return html.match(emailRegex) || [];
}
function extractPhones() {
    const html = document.body.innerText;
    const phoneRegex = /(\+\d{1,3}[- ]?)?\d{10,12}/g;
    return html.match(phoneRegex) || [];
}

function extractSocialLinks() {
    return [...document.querySelectorAll('a[href]')]
        .map(a => a.href)
        .filter(link =>
            link.includes("linkedin.com") ||
            link.includes("facebook.com") ||
            link.includes("twitter.com") ||
            link.includes("instagram.com")
        );
}

function extractName() {
    return document.title.split("|")[0].trim();
}

function getLeadData() {
    return {
        name: extractName(),
        emails: extractEmails(),
        phones: extractPhones(),
        socialLinks: extractSocialLinks(),
        pageUrl: window.location.href
    };
}

function sendToBackend() {
    const data = getLeadData();
    chrome.runtime.sendMessage({
        action: "sendLead",
        payload: data
    });

    console.log("Message sent to background:", data);
    
      setTimeout(() => {
    hideSpinner();
}, 7000); 

}
sendToBackend();