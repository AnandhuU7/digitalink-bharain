import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // In a real application, you would save this to a database or send an email
    console.log('Contact form submission:', { name, email, subject, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'An error occurred' },
      { status: 500 }
    );
  }
}