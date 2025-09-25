import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {title , description} = await request.json();
    await connectMongoDB();
    await Topic.create({title ,description});
    return NextResponse.json({message:"topic created"} , {status:201})
}

export async function GET() {
  try {
    await connectMongoDB();
    const topics = await Topic.find();

    // ✅ Log the number of topics in the server console
    console.log("Number of topics:", topics.length);

    return NextResponse.json({ topics }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

 export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Missing id parameter" },
        { status: 400 }
      );
    }

    await connectMongoDB();

    const deletedTopic = await Topic.findByIdAndDelete(id);

    if (!deletedTopic) {
      return NextResponse.json(
        { error: "Topic id not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Topic deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}