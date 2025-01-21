const networkProtocolsConcepts = [
  "TCP/IP",
  "HTTP/HTTPS",
  "FTP",
  "SMTP",
  "Network Segmentation",
  "IMAP",
  "SSH",
  "Subnetting",
  "Port Forwarding",
];
const programmingConcepts = [
  "Memory Leak",
  "Functional Programming",
  "Design Patterns",
  "Staging Environment in GIT",
  "Parse",
  "Recursion",
  "Big O Notation",
  "RESTful APIs",
];
const networkProgrammingTools = [
  "Wireshark",
  "Nmap",
  "Netcat",
  "Cain & Abel",
  "Metasploit",
  "Burp Suite",
  "Kismet",
  "Aircrack-ng",
];

const randomConcept = (arrOfConcepts) => {
  const randomSelection =
    arrOfConcepts[Math.floor(Math.random() * arrOfConcepts.length)];
  return randomSelection;
};

const networkProtocolSelected = `Can you explain the network protocol ${randomConcept(
  networkProtocolsConcepts
)}?`;
const programmingConceptSelected = `What is ${randomConcept(
  programmingConcepts
)}?`;
const networkProgrammingToolSelected = `What is ${randomConcept(
  networkProgrammingTools
)} used for?`;

const triggerButton = document.querySelector("button");
triggerButton.addEventListener("click", () => {
  const buttonContainer = document.querySelector(".container");
  const messagesContainer = document.createElement("div");
  messagesContainer.classList.add("messages");
  messagesContainer.innerHTML = `
        <h1 style="color: #16404D">Random Concepts</h1>
        <h2>${networkProtocolSelected}</h2>
        <h2>${programmingConceptSelected}</h2>
        <h2>${networkProgrammingToolSelected}</h2>
    `;
  buttonContainer.replaceWith(messagesContainer);
});
