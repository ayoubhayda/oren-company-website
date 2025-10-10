"use server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = newsletterSchema.parse(body);

    // Check if email already exists
    const existingSubscription = await prisma.newsletterSubscription.findUnique({
      where: { email },
    });

    if (existingSubscription) {
      if (existingSubscription.isActive) {
        return NextResponse.json(
          { message: "Email is already subscribed to our newsletter" },
          { status: 409 }
        );
      } else {
        // Reactivate subscription if it exists but is inactive
        await prisma.newsletterSubscription.update({
          where: { email },
          data: { isActive: true },
        });

        return NextResponse.json(
          { message: "Successfully subscribed to our newsletter" },
          { status: 200 }
        );
      }
    }

    // Create new subscription
    await prisma.newsletterSubscription.create({
      data: {
        email,
      },
    });

    return NextResponse.json(
      { message: "Successfully subscribed to our newsletter" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const subscriptions = await prisma.newsletterSubscription.findMany({
      where: { isActive: true },
      orderBy: { subscribedAt: "desc" },
      select: {
        id: true,
        email: true,
        subscribedAt: true,
      },
    });

    return NextResponse.json({ subscriptions }, { status: 200 });
  } catch (error) {
    console.error("Error fetching newsletter subscriptions:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
