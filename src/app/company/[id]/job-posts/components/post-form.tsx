"use client";

import { ActivityArea } from "@/utils/types/admin-dashboard";
import { useState } from "react";
import InfoForm from "./info-form";
import QuestionForm from "./question-form";
import RequireForm from "./require-form";

export default function PostForm({
  activityareas,
}: {
  activityareas: ActivityArea[];
}) {
  const [showSection, setShowSection] = useState({
    info: true,
    require: false,
    question: false,
  });

  return (
    <form>
      <h1 className="my-14 p-8 text-4xl">Completa tu aviso</h1>
      <section>
        <h2
          className="cursor-pointer px-8 py-6"
          onClick={() => {
            setShowSection({ ...showSection, info: !showSection.info });
          }}
        >
          Información del aviso
        </h2>
        {showSection.info && (
          <InfoForm activityareas={activityareas} set={setShowSection} />
        )}
        {!showSection.info && <hr />}
      </section>
      <section>
        <h2
          className="cursor-pointer px-8 py-6"
          onClick={() => {
            setShowSection({ ...showSection, require: !showSection.require });
          }}
        >
          Requisitos
        </h2>
        {!showSection.require && <hr />}
        {showSection.require && <RequireForm set={setShowSection} />}
      </section>
      <section>
        <h2
          className="cursor-pointer px-8 py-6"
          onClick={() => {
            setShowSection({ ...showSection, question: !showSection.question });
          }}
        >
          Preguntas
        </h2>
        {showSection.question && <QuestionForm />}
        <hr className={!showSection.question ? "mb-52" : "mb-10"} />
      </section>
    </form>
  );
}
