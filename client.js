// Heart. Beat. by IT for you
// WebSocket Connection
function buildWebSocketConnection() {
    // Use ".../10" for the interval of 10 seconds
    // Use the "60" code max connection duration in seconds
    let webSocket = new WebSocket("ws://127.0.0.1/interval/10", "60");

    // WebSocket Event Handlers
    webSocket.onopen = function () {
        console.log('WebSocket connection established successfully.');
    }
    webSocket.onerror = function () {
        console.log("Error.");
    }
    webSocket.onmessage = function (event) {
        // Your code here.
        // This code will be executed repetitively as set with the interval.
        console.log(event.data);
    }
    webSocket.onclose = function (event) {
        console.log("WebSocket connection closed with status code " + event.code);
        console.log("Reason being: " + event.reason);

        // Re-open the connection
        if (event.code !== 1006 && event.code !== 1008) {
            console.log("Re-opening connection...");
            buildWebSocketConnection();
        }
    }
}

window.addEventListener('load', () => {
    buildWebSocketConnection();
});
