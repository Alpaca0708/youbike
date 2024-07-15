import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  let { id } = params;
  console.log('id:', id);
  // change id to number
  id = parseInt(id, 10);

  const blogPosts = {
    1: { id: 1, title: 'First Blog Post', content: 'This is the first blog post.' },
    2: { id: 2, title: 'Second Blog Post', content: 'This is the second blog post.' },
  };

  const post = blogPosts[id];

  if (post) {
    return NextResponse.json(post);
  } else {
    return NextResponse.json({ message: 'Blog post not found' }, { status: 404 });
  }
}