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
        // TODO: check if repo already exists
        // TODO: check if repo is empty
        // TODO: check if repo is not a git repo
        // clone the repo and store it in the repos folder
        const id = uuidv4();
        const CURRENT_DIR = process.cwd();
        const repoPath = `${CURRENT_DIR}/repos/${id}`;
        await simpleGit().clone(repoUrl, repoPath);
        // TODO: check if react code or vanilla js code
        // TODO: Upload to supabase storage
    } catch (e) {
        console.log(e);
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
