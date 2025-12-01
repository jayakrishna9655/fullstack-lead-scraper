// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (changeInfo.status === "complete" && tab.url.includes("linkedin.com/in/")) {
//     chrome.scripting.executeScript({
//       target: { tabId: tabId },
//       files: ["content.js"]
//     });
//   }
// });

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === "sendLead") {

        fetch("http://localhost:8080/api/leads/save", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(msg.payload)
        })
        .then(res => res.text())
        .then(data => console.log("Saved lead:", data))
        .catch(err => console.error("Backend error:", err));
    }
});

