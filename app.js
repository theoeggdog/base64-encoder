function encodeText() {
    const inputText = document.getElementById('inputText').value; // Get input value
    if (inputText) {
        const encodedText = btoa(inputText); // Base64 encode the input
        document.getElementById('encodedText').value = encodedText; // Display the encoded text
    } else {
        alert("Please enter some text to encode!"); // Alert if no input
    }
}
