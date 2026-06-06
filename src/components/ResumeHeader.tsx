import { Plus } from "lucide-react";

interface ResumeHeaderProps {
  onCreateClick: () => void;
}

export function ResumeHeader({ onCreateClick }: ResumeHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-10">
      <div>
        <h1 className="text-4xl font-bold">My Resumes</h1>

        <p className="text-slate-500 mt-2">
          Create ATS-friendly resumes using AI.
        </p>
      </div>

      <button
        onClick={onCreateClick}
        className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl flex items-center gap-2"
      >
        <Plus size={18} />
        Create Resume
      </button>
    </div>
  );
}
