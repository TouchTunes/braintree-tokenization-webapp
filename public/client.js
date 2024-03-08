document.addEventListener('DOMContentLoaded', function() {

    // Fetch the client token from the server
    fetch('/client_token')
    .then(response => response.json())
    .then(data => {
        const clientToken = data.clientToken;

        // Initialize Braintree client
        braintree.client.create({
        authorization: clientToken
        }, function(clientErr, clientInstance) {
            if (clientErr) {
                console.error('Error:', clientErr);
                return;
            }

            // Initialize Braintree DataCollector
            braintree.dataCollector.create({
                client: clientInstance,
                paypal: true
            }, function(dataCollectorErr, dataCollectorInstance) {
                if (dataCollectorErr) {
                    console.error('Error:', dataCollectorErr);
                    return;
                }

                // Handle payment form submission
                document.getElementById('tokenizeForm').addEventListener('submit', function(event) {
                    event.preventDefault();
                    const form = event.target;
                    var data = {
                        creditCard: {
                            number: form.card_number.value,
                            expirationDate: form.expiration_date.value,
                            cvv: form.cvv.value,
                            billingAddress: {
                                postalCode: form.postal_code.value
                            },
                            options: {
                                validate: false
                            }
                        }
                    };

                    // Tokenize credit card information
                    clientInstance.request({
                        endpoint: 'payment_methods/credit_cards',
                        method: 'post',
                        data: data
                    }, function (requestErr, response) {
                        // More detailed example of handling API errors: https://codepen.io/braintree/pen/MbwjdM
                        if (requestErr) {
                            console.error('Error:', requestErr);
                            document.getElementById('result').innerText = `Error: ${requestErr.message}`;
                        } else {
                            document.getElementById('result').innerText = `Payment method nonce: ${response.creditCards[0].nonce}`;
                            document.getElementById('deviceData').innerText = `Device Data: ${dataCollectorInstance.deviceData}`
                        }
                    });
                });
            });
        });
    });
});