// src/app/api/chat-rooms/create/route.ts
import { NextResponse } from 'next/server';
import { ENDPOINTS } from '@/constants/endpoints';

export async function POST(request: Request) {
  const { title,content,image } = await request.json();
  const authHeader = request.headers.get('Authorization');

  if (!authHeader) {
    return NextResponse.json({ error: 'Authorization header missing' }, { status: 401 });
  }


  // Extract the token from the Authorization header
  const token = authHeader.split(' ')[1]; // This assumes the header format is "Bearer <token>"

  if (!token) {
    return NextResponse.json({ error: 'Token is missing' }, { status: 401 });
  }

  try {
    const response = await fetch(`${ENDPOINTS.POSTS}/create-posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,      },
      body: JSON.stringify({ title,content,image }), // Include userIds in the request
    });

    const data = await response.json();
    console.log('Backend API Response:', data); // Log the backend API response

    if (response.ok) {
      return NextResponse.json(data);
    } else {
      return NextResponse.json({ error: data.error || 'Failed to create chat room' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}