"use client";

import React from "react";
import InfoForm from "./info-form";
import RequireForm from "./require-form";
import QuestionForm from "./question-form";

export default function PostForm(): React.ReactElement {
  return (
    <form>
      <InfoForm />
      <RequireForm />
      <QuestionForm />
      <button>Publicar aviso</button>
    </form>
  );
}
