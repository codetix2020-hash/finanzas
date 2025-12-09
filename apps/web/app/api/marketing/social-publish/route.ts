import { NextRequest, NextResponse } from "next/server";
import { publishToSocial, generateAndPublish, getPublerAccounts } from "@repo/api/modules/marketing/services/publer-service";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(request: NextRequest) {
  console.log("📤 Social publish endpoint llamado");

  try {
    const body = await request.json();
    const { action, ...params } = body;

    let result;

    switch (action) {
      case "get-accounts":
        const accounts = await getPublerAccounts();
        result = { success: true, accounts };
        break;

      case "publish":
        const publishResults = await publishToSocial({
          content: params.content,
          imageUrl: params.imageUrl,
          platforms: params.platforms || ["instagram", "tiktok"],
          scheduleAt: params.scheduleAt ? new Date(params.scheduleAt) : undefined
        });
        result = { success: true, results: publishResults };
        break;

      case "generate-and-publish":
        const genResult = await generateAndPublish({
          productName: params.productName,
          productDescription: params.productDescription,
          topic: params.topic,
          platforms: params.platforms || ["instagram", "tiktok"],
          imageUrl: params.imageUrl
        });
        result = { success: true, ...genResult };
        break;

      default:
        result = { success: false, error: "Invalid action. Use: get-accounts, publish, generate-and-publish" };
    }

    return NextResponse.json(result, { headers: corsHeaders });

  } catch (error: any) {
    console.error("❌ Error en social-publish:", error.message);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500, headers: corsHeaders }
    );
  }
}

