import Groq from "groq-sdk";

export const analyzeResumeWithAI = async (resumeText, jobDescription) => {
  try {
    // ✅ Create client INSIDE function
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content:
            "You are a strict JSON generator. Return ONLY valid JSON. No explanation, no markdown.",
        },
        {
          role: "user",
          content: `
Return ONLY valid JSON in this format:

{
  "score": number,
  "matchPercentage": number,
  "strengths": [],
  "weaknesses": [],
  "missingKeywords": [],
  "suggestions": []
}

Resume:
${resumeText}

Job Description:
${jobDescription}
          `,
        },
      ],
      temperature: 0.2,
    });

    // ✅ FIX: define text
    let text = response.choices?.[0]?.message?.content || "";

    console.log("RAW GROQ RESPONSE:", text);

    if (!text) throw new Error("Empty response from AI");

    // 🔥 STEP 1: remove markdown
    text = text.replace(/```json|```/g, "").trim();

    // 🔥 STEP 2: extract JSON safely
    const match = text.match(/\{[\s\S]*\}/);

    if (!match) {
      throw new Error("No JSON found");
    }

    let jsonString = match[0];

    // 🔥 STEP 3: fix common JSON issues
    jsonString = jsonString
      .replace(/,\s*}/g, "}")
      .replace(/,\s*]/g, "]");

    // 🔥 STEP 4: parse safely
    let parsed;
    try {
      parsed = JSON.parse(jsonString);
    } catch (err) {
      console.error("❌ JSON PARSE FAILED:", jsonString);
      throw new Error("Invalid JSON format");
    }

    // 🔥 STEP 5: return clean object
    return {
      score: Number(parsed.score) || 50,
      matchPercentage: Number(parsed.matchPercentage) || 50,
      strengths: Array.isArray(parsed.strengths) ? parsed.strengths : [],
      weaknesses: Array.isArray(parsed.weaknesses) ? parsed.weaknesses : [],
      missingKeywords: Array.isArray(parsed.missingKeywords)
        ? parsed.missingKeywords
        : [],
      suggestions: Array.isArray(parsed.suggestions)
        ? parsed.suggestions
        : [],
    };

  } catch (error) {
    console.error("🔥 GROQ FINAL ERROR:", error.message);

    return {
      score: 50,
      matchPercentage: 50,
      strengths: ["AI response failed"],
      weaknesses: [error.message],
      missingKeywords: [],
      suggestions: ["Try again or check API"],
    };
  }
};