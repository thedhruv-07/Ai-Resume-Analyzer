import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import API from "../services/api";

export default function ResumeUpload({ onResult }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [jobDesc, setJobDesc] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,
  });

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("resume", file); // MUST be "resume"
    formData.append("jobDescription", jobDesc);

    try {
      setLoading(true);

      const { data } = await API.post("/resume/upload", formData);
      console.log(data);

      onResult(data);
      setFile(null);
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mt-8">

      <div
        {...getRootProps()}
        className={`
          p-10 rounded-2xl text-center cursor-pointer transition-all duration-300
          border-2 border-dashed
          ${isDragActive
            ? "border-cyan-400 bg-cyan-500/10"
            : "border-gray-700 hover:border-purple-500"}
          bg-[#0f172a]
        `}
      >
        <input {...getInputProps()} />
        <textarea
          placeholder="Paste Job Description..."
          onChange={(e) => setJobDesc(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <p className="text-gray-300 text-lg">
          {isDragActive
            ? "Drop the resume here..."
            : "Drag & Drop your Resume (PDF only)"}
        </p>

        <p className="text-sm text-gray-500 mt-2">
          or click to browse
        </p>
      </div>

      {file && (
        <div className="mt-6 p-4 rounded-xl bg-[#111827] border border-gray-800 flex justify-between items-center">
          <span className="text-gray-300">{file.name}</span>

          <button
            onClick={handleUpload}
            disabled={loading}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:scale-105 transition"
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>
        </div>
      )}
    </div>
  );
}