import { NextRequest, NextResponse } from "next/server";
import { db } from "@/utils/firebase";
import { doc, setDoc } from "firebase/firestore";

export async function POST(req: NextRequest) {
  try {
    const { phone, role } = await req.json();

    const userRef = doc(db, "users", phone);
    await setDoc(userRef, {
      phone,
      role,
      trustScore: 50,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: "User verified & stored" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
