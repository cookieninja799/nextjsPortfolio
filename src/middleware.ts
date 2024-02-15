import { NextRequest, NextResponse } from "next/server";
import { analytics } from "./utils/analytics";

export default async function middleware(req: NextRequest) {
    if (req.nextUrl.pathname === '/') {
        const pageViewEvent = {
            page: '/',
            country: req.geo?.country || 'Unknown', // Default value if country is not available
            userAgent: req.headers.get('user-agent'), // Optional: Track the user agent
            timestamp: new Date().toISOString(), // Optional: Track the timestamp
            // Add more properties as needed
        };

        try {
            await analytics.track("pageview", pageViewEvent); // Assuming `analytics.track` returns a Promise
        } catch (err) {
            console.error("Analytics tracking failed", err);
            // Optionally send to an error tracking service
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/'], // Ensuring middleware applies only to the homepage
};
