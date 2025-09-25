import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Error fetching topics");
    }

    const data = await res.json();
    return data.topics; 
  } catch (error) {
    console.log("Error loading topics", error);
    return []; 
  }
};

export default async function Topiclist() {
  const topics = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div key={t._id} className="topic-container">
          <div className="topic-headings">
            <h1 className="title">{t.title}</h1>
            <h2>{t.description}</h2>
          </div>

          <div className="topic-controls">
            <RemoveBtn id={t._id}/>
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
