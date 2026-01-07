import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import type { EventsData } from '../../../../types/events';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventId, email } = body;

    // Validate input
    if (!eventId || !email) {
      return NextResponse.json(
        { error: 'Event ID and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Read the data file
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data: EventsData = JSON.parse(fileContents);

    // Find the event
    const event = data.allEvents.find((ev) => ev.id === eventId);

    if (!event) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      );
    }

    // Check if email is already registered
    if (event.emails_registered.includes(email)) {
      return NextResponse.json(
        { error: 'This email is already registered for this event' },
        { status: 409 }
      );
    }

    // Add email to the event's registered emails
    event.emails_registered.push(email);

    // Write back to the file
    await fs.writeFile(filePath, JSON.stringify(data, null, 4), 'utf8');

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully registered for the event!',
        registeredCount: event.emails_registered.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Failed to register. Please try again later.' },
      { status: 500 }
    );
  }
}
