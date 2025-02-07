import { NextResponse } from 'next/server';
import { ENDPOINTS } from '@/constants/endpoints';

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse>  {
  const authHeader = request.headers.get('Authorization');

  if (!authHeader) {
    return NextResponse.json(
      { error: 'Authorization header missing' },
      { status: 401 }
    );
  }
  
  const token = authHeader.split(' ')[1]; // Assumes the format "Bearer <token>"
  if (!token) {
    return NextResponse.json(
      { error: 'Token is missing' },
      { status: 401 }
    );
  }

  const { id } = await params;
  console.log(`Updating post with ID: ${id}`);

  // Here you might want to extract the new status from the request body.
  // For example, if the client sends JSON like { status: "newStatus" }:
  const {status} = await request.json();
  
  if (!status) {
    return NextResponse.json(
      { error: 'Status is missing in the request body' },
      { status: 400 }
    );
  }

  // Make a call to your backend to update the post status.
  const response = await fetch(`${ENDPOINTS.POSTS}/edit-post/${id}`, {
    method: 'PUT', // Use PUT (or PATCH) for updating
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ status }),
  });

  if (response.ok) {
    return NextResponse.json({ message: 'Post updated successfully' });
  } else {
    return NextResponse.json(
      { error: 'Failed to update post' },
      { status: 500 }
    );
  }
}
