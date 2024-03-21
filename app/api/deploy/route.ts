import { NextRequest, NextResponse } from "next/server";
import simpleGit from "simple-git";
import { v4 as uuidv4 } from 'uuid';

export const GET = async () => {
    return new NextResponse(JSON.stringify({ message: "Hello World" }));
};

export const POST = async (request: NextRequest) => {
    const body = await request.json();
    const { repoUrl } = body;
    if (!repoUrl) return new NextResponse(JSON.stringify({ message: "Missing repoUrl" }), { status: 400 });
    try {
        const id = uuidv4();
        await simpleGit().clone(repoUrl, `/repos/${id}`);
    } catch (e) {
        return new NextResponse(JSON.stringify({ message: "Error cloning repo" }), { status: 500 });
    }
    return new NextResponse(JSON.stringify({ message: "Hello World", body }));
};

export const PUT = async (request: NextRequest) => {
    const body = await request.json();
    return new NextResponse(JSON.stringify({ message: "Hello World", body }));
};

export const DELETE = async (request: NextRequest) => {
    const body = await request.json();
    return new NextResponse(JSON.stringify({ message: "Hello World", body }));
};
