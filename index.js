const networkProtocolsConcepts = ["TCP/IP", "HTTP/HTTPS", "FTP", "SMTP", "Network Segmentation", "IMAP", "SSH", "Subnetting", "Port Forwarding"];
const programmingConcepts = ["Memory Leak", "Functional Programming", "Design Patterns", "Staging Environment in GIT", "Parse", "Recursion", "Big O Notation", "RESTful APIs"];
const networkProgrammingTools = ["Wireshark", "Nmap", "Netcat", "Cain & Abel", "Metasploit", "Burp Suite", "Kismet", "Aircrack-ng"];

const randomConcept = arrOfConcepts => {
    const randomSelection = arrOfConcepts[Math.floor(Math.random() * arrOfConcepts.length)];
    return randomSelection;
}

const networkProtocolSelected = `Can you explain the network protocol ${randomConcept(networkProtocolsConcepts)}?`;
const programmingConceptSelected = `What is ${randomConcept(programmingConcepts)}?`;
const networkProgrammingToolSelected = `What is ${randomConcept(networkProgrammingTools)} used for?`;

console.log(networkProtocolSelected);
console.log(programmingConceptSelected);
console.log(networkProgrammingToolSelected);