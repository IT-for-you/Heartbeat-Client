# Heart. Beat. Client

Heart. Beat. by IT for you WebSocket Client

## General Information

This public repository contains documentation and demo implementations for the Heart. Beat. by IT for you WebSocket API
which is a service to allow for scheduling of processes and non-throttled background activity regardless of the
clientside browser in any web-based software project.

Visit the shop ([https://shop.it-for-you.com](https://shop.it-for-you.com)) to find and select the plan that fits your
needs. Free plans are available for testing purposes.

The contents of this repository are licensed under the MIT software license. For more information, please refer to
the `LICENSE` file or visit [https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT).

## Getting Started

1. Select a subscription plan that fits your very needs. Free plans are available for testing. Get subscription plans
   and manage your account, go to [https://shop.it-for-you.com](https://shop.it-for-you.com). For more information, go
   to [Subscription Plans](#subscription-plans).
2. Your new subscriptions will be displayed upon completion of your purchase, for that,
   visit [https://heartbeat.it-for-you.com/subscriptions](https://heartbeat.it-for-you.com/subscriptions). To
   authenticate connection requests, enter the site URL implementing the Heartbeat.
3. Kickstart your software project by referring to the [Demo Implementation](#demo-implementation) below.

## Subscription Plans

Different subscription plans offer a wide range of application possibilities. Plans differ in a few selected parameters.

1. Frequency [Min. Seconds] represents the smallest heartbeat interval in seconds that the plan allows for. A value of
   10 means, that the WebSocket API sends a heartbeat every ten seconds. The heartbeat, in particular, is a string
   representing the current timestamp (UTC, Unix epoch format, seconds since 01/01/1970).
2. Connections [Max. Users] represent the number of maximum allowable simultaneous connections from the domain assigned
   to the subscription plan.
3. Timeout [Max. Minutes] represents the time in minutes after which the WebSocket server automatically disconnects
   incoming connections from the domain that is associated with the respective subscription plan.

When implementing the WebSocket client, make sure to only set the parameters to the permissible limit according to the
subscription plan. Impermissible values will automatically be reset to the maximum permissible values.

## Demo Implementation

### JavaScript

```javascript
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
```

## Troubleshooting

For the WebSocket API to accept incoming connection, the client must send the connection request from a valid origin.
For that to be the case, the domain needs to be registered to an active subscription plan.
Manage the allocation of subscriptions
at [https://heartbeat.it-for-you.com/subscriptions](https://heartbeat.it-for-you.com/subscriptions).
Get a new subscription plan at [https://shop.it-for-you.com](https://shop.it-for-you.com). Free plans are available for
testing purposes. Please note, you can only register one domain to one subscription plan and, consequently, you can only
assign one subscription plan to a certain domain.

Also, make sure to address the correct server in your WebSocket connection and check for the correct path and
parameters.

If you find yourself unable to successfully connect to the WebSocket API, please e-mail us
at [heartbeat@it-for-you.com](mailto:heartbeat@it-for-you.com). In that, please state the order ID of the subscription
plan that you are trying to activate and the domain that the subscription plan should be registered to.

## Feedback

This repository is meant for demonstration purposes only and is not targeted for collaboration. Still, we greatly
appreciate any feedback and ideas to enhance our offer. Please direct your inquiries
to [heartbeat@it-for-you.com](mailto:heartbeat@it-for-you.com).

Check out our newest projects and talk to us!

- [GitHub](https://github.com/IT-for-you)
- [LinkedIn](https://linkedin.com/company/it-for-you/)
- [Instagram](https://www.instagram.com/it.for.you/)
- [Website](https://it-for-you.com)

© 2017-2022, IT for you GbR, Frankfurt/Main, Germany
