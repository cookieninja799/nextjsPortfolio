
const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;
const GA_API_SECRET = process.env.GA_API_SECRET;

// This function sends data to Google Analytics using the Measurement Protocol
const sendToAnalyticsService = async (data: Record<string, any>) => {
    const requestBody = {
        client_id: data.client_id || '0000000000', // Ideally, use a unique client identifier
        events: [{
            name: data.event,
            params: data.params,
        }],
    };

    try {
        const response = await fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`, {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error(`Failed to send data to GA: ${response.statusText}`);
        }

        console.log(`Event '${data.event}' tracked successfully.`);
    } catch (error) {
        console.error(`Error sending data to GA:`, error);
    }
};

export const analytics = {
    track: async (event: string, params: Record<string, any>) => {
        // Prepare the event data for Google Analytics
        const eventData = {
            event,
            params,
            // Additional properties like 'client_id' can be added here
        };

        // Send the event data to Google Analytics
        await sendToAnalyticsService(eventData);
    },
    // Additional analytics methods can be defined here
};
