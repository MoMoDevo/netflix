import prisma from "../../../lib/prismaDb"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"
 
export async function POST(
  request: Request
) {
  const body = await request.json();
  const {
    email,
    name,
    password
  } = body;

  const hashedPassword = await bcrypt.hash(password,8);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword
    }
  });

  return NextResponse.json(user);
}