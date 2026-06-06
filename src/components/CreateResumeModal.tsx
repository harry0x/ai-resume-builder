interface CreateResumeModalProps {
  formData: {
    title: string;
    jobTitle: string;
    experienceLevel: string;
  };
  onChange: (field: keyof CreateResumeModalProps["formData"], value: string) => void;
  onClose: () => void;
  onSubmit: () => void;
}

export function CreateResumeModal({
  formData,
  onChange,
  onClose,
  onSubmit,
}: CreateResumeModalProps) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50">
      <div className="bg-white w-full max-w-lg rounded-3xl p-8">
        <h2 className="text-2xl font-bold mb-6">Create Resume</h2>

        <div className="space-y-4">
          <input
            placeholder="Resume Title"
            value={formData.title}
            onChange={(e) => onChange("title", e.target.value)}
            className="w-full border rounded-xl p-3"
          />

          <input
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={(e) => onChange("jobTitle", e.target.value)}
            className="w-full border rounded-xl p-3"
          />

          <select
            value={formData.experienceLevel}
            onChange={(e) => onChange("experienceLevel", e.target.value)}
            className="w-full border rounded-xl p-3"
          >
            <option>Fresher</option>
            <option>Junior</option>
            <option>Mid-Level</option>
            <option>Senior</option>
          </select>
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onClose}
            className="px-5 py-3 border rounded-xl"
          >
            Cancel
          </button>

          <button
            onClick={onSubmit}
            className="px-5 py-3 bg-violet-600 text-white rounded-xl"
          >
            Create Resume
          </button>
        </div>
      </div>
    </div>
  );
}
