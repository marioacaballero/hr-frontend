"use client";

import React from "react";
import InfoForm from "./info-form";

export default function PostForm(): React.ReactElement {
  return (
    <form>
      <h2>Completa tu aviso</h2>
      <InfoForm />
    </form>
  );
}
