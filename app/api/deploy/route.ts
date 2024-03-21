import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    return new NextResponse(JSON.stringify({ message: "Hello World" }));
};

export const POST = async (request: NextRequest) => {
    const body = await request.json();
    const { repoUrl } = body;
    if (!repoUrl) return new NextResponse(JSON.stringify({ message: "Missing repoUrl" }), { status: 400 });
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
