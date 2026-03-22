export default function AnalysisCard({ result }) {
  if (!result) return null;

  return (
    <div className="mt-6 bg-gray-100 p-6 rounded-2xl">
      <h2 className="text-xl font-bold mb-4">AI Analysis</h2>

      <p><strong>Score:</strong> {result.score}/100</p>
      <p><strong>Strengths:</strong> {result.strengths}</p>
      <p><strong>Weaknesses:</strong> {result.weaknesses}</p>
      <p><strong>Suggestions:</strong> {result.suggestions}</p>
    </div>
  );
}