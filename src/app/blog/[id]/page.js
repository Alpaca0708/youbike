'use client'
import Image from "next/image";
import Menu from '@/app/components/Menu';
import { useEffect, useState } from "react";

export default function User({ params: { id } }) {

  // const { id } = params; // destructuring params object
  const [blog, setBlog] = useState(null);
  // fetch /api/blog/:id, use aysnc/await
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/blog/${id}`);
      const data = await res.json();
      console.log('data::', data);
      setBlog(data);
    }
    fetchData();
  }, [])


  return (
    <div>
      ID: {id}
      <p>blog title: {blog && blog.title}</p>
      <p> blog content: {blog && blog.content}</p>

    </div>
  );
}
