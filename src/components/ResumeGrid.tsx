import { Briefcase, FileText, Trash2 } from "lucide-react";

export interface ResumeSummary {
  _id: string;
  title: string;
  jobTitle: string;
  experienceLevel: string;
}

interface ResumeGridProps {
  resumes: ResumeSummary[];
  loading: boolean;
  onCreateClick: () => void;
  onDelete: (resumeId: string) => void;
  onResumeSelect: (resumeId: string) => void;
}

export function ResumeGrid({
  resumes,
  loading,
  onCreateClick,
  onDelete,
  onResumeSelect,
}: ResumeGridProps) {
  if (!loading && resumes.length === 0) {
    return (
      <div className="bg-white rounded-3xl border p-16 text-center">
        <FileText size={70} className="mx-auto text-slate-300" />

        <h2 className="text-2xl font-semibold mt-6">No Resume Yet</h2>

        <p className="text-slate-500 mt-2">
          Create your first AI powered resume.
        </p>

        <button
          onClick={onCreateClick}
          className="mt-6 bg-violet-600 text-white px-6 py-3 rounded-xl"
        >
          Create Resume
        </button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resumes.map((resume) => (
        <div
          key={resume._id}
          className="bg-white rounded-3xl p-6 border border-slate-200 hover:shadow-lg transition"
        >
          <div className="flex justify-between">
            <div>
              <h2 className="font-bold text-xl">{resume.title}</h2>

              <div className="flex items-center gap-2 text-slate-500 mt-2">
                <Briefcase size={16} />
                {resume.jobTitle}
              </div>

              <span className="inline-block mt-4 bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm">
                {resume.experienceLevel}
              </span>
            </div>

            <button
              onClick={() => onDelete(resume._id)}
              className="text-red-500"
            >
              <Trash2 size={18} />
            </button>
          </div>

          <button
            onClick={() => onResumeSelect(resume._id)}
            className="mt-6 w-full bg-slate-900 text-white py-3 rounded-xl"
          >
            Continue Building
          </button>
        </div>
      ))}
    </div>
  );
}
