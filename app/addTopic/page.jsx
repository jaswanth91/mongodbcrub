'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";  

export default function AddTopic() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      return alert("Title and Description are required");
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",  
        headers: {
          "Content-Type": "application/json",  
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/"); 
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="new-topic-container">
      <form onSubmit={handleSubmit}>
        <h2>Add New Topic</h2>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Enter New Title"
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Enter New Description"
        ></textarea>
        <button type="submit">ADD Topic</button>
      </form>
    </div>
  );
}
