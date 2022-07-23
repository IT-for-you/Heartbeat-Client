// Heart. Beat. by IT for you
// WebSocket Connection
window.addEventListener('load', () => {
    // Use ".../10" for the interval of 10 seconds
    // Use the "60" code max connection duration in seconds
    let webSocket = new WebSocket("ws://127.0.0.1/interval/10", "60");
    // TODO: replace localhost with actual server IP, apply to demo js file and readme

    // WebSocket Event Handlers
    webSocket.onopen = function () {
        console.log('WebSocket connection established successfully.');
    }
    webSocket.onerror = function (event) {
        console.log("Error: " + event.data);
    }
    webSocket.onmessage = function (event) {
        /*** Your code here. ***/
        // This code will be executed repetitively as set with the interval.
        console.log(event.data);
    }
    webSocket.onclose = function () {
        console.log("WebSocket connection closed.");
    }
});
