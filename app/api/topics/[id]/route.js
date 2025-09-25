import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json();

    if (!id) {
      return NextResponse.json({ error: "Missing id parameter" }, { status: 400 });
    }

    await connectMongoDB();

    const updatedTopic = await Topic.findByIdAndUpdate(
      id,
      { title, description },
      { new: true } 
    );

    if (!updatedTopic) {
      return NextResponse.json({ error: "Topic not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Topic updated successfully", updatedTopic }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectMongoDB();

    const topic = await Topic.findOne({ _id: id });

    if (!topic) {
      return NextResponse.json({ error: "Topic not found" }, { status: 404 });
    }

    return NextResponse.json({ topic }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
