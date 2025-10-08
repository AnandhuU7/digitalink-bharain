import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// For demo purposes, we'll use hardcoded admin credentials
// In a real app, you would check against a database
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'password';
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Create a JWT token
      const token = jwt.sign(
        { username, role: 'admin' },
        JWT_SECRET,
        { expiresIn: '1h' }
      );

      return NextResponse.json({ success: true, token });
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'An error occurred' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('admin_token')?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, message: 'No token provided' },
        { status: 401 }
      );
    }

    // Verify the token
    jwt.verify(token, JWT_SECRET);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Invalid or expired token' },
      { status: 401 }
    );
  }
}