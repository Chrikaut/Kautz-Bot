function searchText() {
    const inputText = document.getElementById("inputField").value;
    const regex = /Received: from \[(.*?)\][\s\S]*?(\w{3}, \d{2} \w{3} \d{4} \d{2}:\d{2}:\d{2} [+-]\d{4})(?![\s\S]*Received: from \[.*?\][\s\S]*?\w{3}, \d{2} \w{3} \d{4} \d{2}:\d{2}:\d{2} [+-]\d{4})/g;

    let sender = "";
    let timestamp = "";
    let match;

    while ((match = regex.exec(inputText)) !== null) {
        sender = match[1];
        timestamp = match[2];
    }

    if (sender !== "" && timestamp !== "") {
        document.getElementById("senderOutput").value = sender;
        document.getElementById("timestampOutput").value = timestamp;
    } else {
        alert("Keine Übereinstimmungen gefunden.");
    }
}

function clearFields() {
    document.getElementById("inputField").value = "";
    document.getElementById("senderOutput").value = "";
    document.getElementById("timestampOutput").value = "";
}

function confirmClose() {
    const result = confirm("Wollen Sie wirklich beenden?");
    if (result) {
        window.close();
    }
}