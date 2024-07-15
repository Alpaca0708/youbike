import { NextResponse } from 'next/server';

export async function GET(req) {


  const blogPosts = [
    { id: 1, title: 'First Blog Post', content: 'This is the first blog post.' },
    { id: 2, title: 'Second Blog Post', content: 'This is the second blog post.' }
  ];


  if (blogPosts) {
    return NextResponse.json(blogPosts);
  } else {
    return NextResponse.json({ message: 'Blog post not found' }, { status: 404 });
  }
}