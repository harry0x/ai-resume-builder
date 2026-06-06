"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { createResumeApi, getAllResumesApi, deleteResumeApi } from "../../apis/resume.api";
import { CreateResumeModal } from "../../components/CreateResumeModal";
import { ResumeGrid, ResumeSummary } from "../../components/ResumeGrid";
import { ResumeHeader } from "../../components/ResumeHeader";

export default function ResumePage() {
  const router = useRouter();

  const [resumes, setResumes] = useState<ResumeSummary[]>([]);

  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    jobTitle: "",
    experienceLevel: "Fresher",
  });

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const data = await getAllResumesApi();

      setResumes(data.resumes || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateResume = async () => {
    try {
      const response = await createResumeApi({
        title: formData.title,
        jobTitle: formData.jobTitle,
        experienceLevel: formData.experienceLevel,
      });

      console.log(response);

      const resumeId = response.data._id;
      console.log("reached...");

      router.push(`/resume/${resumeId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (resumeId: string) => {
    try {
      await deleteResumeApi(resumeId);

      fetchResumes();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <ResumeHeader onCreateClick={() => setShowModal(true)} />

        <ResumeGrid
          resumes={resumes}
          loading={loading}
          onCreateClick={() => setShowModal(true)}
          onDelete={handleDelete}
          onResumeSelect={(resumeId) => router.push(`/resume/${resumeId}`)}
        />
      </div>

      {showModal && (
        <CreateResumeModal
          formData={formData}
          onChange={(field, value) =>
            setFormData((prev) => ({ ...prev, [field]: value }))
          }
          onClose={() => setShowModal(false)}
          onSubmit={handleCreateResume}
        />
      )}
    </div>
  );
}
