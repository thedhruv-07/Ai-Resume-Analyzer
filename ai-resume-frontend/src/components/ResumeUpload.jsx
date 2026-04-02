import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import API from "../services/api";

export default function ResumeUpload({ onResult }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [jobDesc, setJobDesc] = useState("");
  const [error, setError] = useState("");

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      setError("Please upload a PDF file");
      return;
    }
    setError("");
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
    if (!file) {
      setError("Please upload a resume");
      return;
    }
    if (!jobDesc.trim()) {
      setError("Please paste a job description");
      return;
    }

    setError("");
    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jobDescription", jobDesc);

    try {
      setLoading(true);
      const { data } = await API.post("/resume/upload", formData);
      onResult(data);
      setFile(null);
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full space-y-6 mb-8 bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
      {/* Job Description Input */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Job Description</label>
        <textarea
          placeholder="Paste the job description here..."
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
          rows="5"
        />
        <p className="text-xs text-gray-500 mt-2">Include responsibilities, required skills, and keywords from the job posting</p>
      </div>

      {/* Resume Upload */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Resume (PDF)</label>
        <div
          {...getRootProps()}
          className={`
            p-12 rounded-2xl text-center cursor-pointer transition-all duration-300
            border-2 border-dashed
            ${
              isDragActive
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 bg-gray-50 hover:border-blue-400"
            }
          `}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center">
            <svg className="w-10 h-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="text-gray-700 font-medium">
              {isDragActive ? "Drop your resume here" : "Drag & drop your resume, or click to select"}
            </p>
            <p className="text-sm text-gray-500 mt-1">PDF format only</p>
          </div>
        </div>
      </div>

      {/* Selected File Display */}
      {file && (
        <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 16.5a1 1 0 11-2 0 1 1 0 012 0zM15 7H4v5h2.05A2.5 2.5 0 018 9.5a.5.5 0 011 0A2.5 2.5 0 0113.95 12H15V7z" />
            </svg>
            <div>
              <p className="text-sm font-medium text-gray-900">{file.name}</p>
              <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </div>
          <button
            onClick={() => setFile(null)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        disabled={loading || !file}
        className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Analyzing...</span>
          </>
        ) : (
          <span>Analyze Resume</span>
        )}
      </button>
    </div>
  );
}