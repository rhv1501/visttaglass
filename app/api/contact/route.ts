import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // This will pull from your .env or .env.local file
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
    
    if (!GOOGLE_SCRIPT_URL) {
      console.error("GOOGLE_SCRIPT_URL is not defined in environment variables.");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: "Failed to submit to Google Sheets" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
