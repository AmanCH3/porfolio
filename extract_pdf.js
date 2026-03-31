const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('src/assets/aman_resume.pdf');

pdf(dataBuffer).then(function(data) {
    // Extract any URLs
    const urlRegex = /(https?:\/\/[^\s]+|github\.com[^\s]+|linkedin\.com[^\s]+)/g;
    const urls = data.text.match(urlRegex);
    console.log("Extracted URLs:");
    if (urls) {
        urls.forEach(url => console.log(url));
    } else {
        console.log("No URLs found by simple text matching. Might be embedded links.");
    }
    
    // Print the context around "Retail", "Town", "Market", "Customer", etc., to find project names and links near them
    const projects = ['Retail', 'Town', 'Market', 'Customer', 'Heart'];
    projects.forEach(proj => {
        const idx = data.text.indexOf(proj);
        if (idx !== -1) {
            console.log(`\nContext around ${proj}:`);
            console.log(data.text.substring(Math.max(0, idx - 50), Math.min(data.text.length, idx + 150)).replace(/\n/g, ' '));
        }
    });
});
