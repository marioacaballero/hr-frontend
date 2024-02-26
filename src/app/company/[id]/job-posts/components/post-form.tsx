"use client";

import InfoForm from "./info-form";
import QuestionForm from "./question-form";
import RequireForm from "./require-form";

export default function PostForm() {
  return (
    <form>
      <InfoForm />
      <RequireForm />
      <QuestionForm />
      <button>Publicar aviso</button>
    </form>
  );
}
