import React from "react";
import { InsightContainer } from "./InsightContainer";

export function MainContainer({ insight, errorMsg, summary }) {
  return (
    <div className="main-container">
      {errorMsg ? (
        <div style={{ padding: 12, color: "red" }}>{errorMsg}</div>
      ) : (
        <InsightContainer insight={insight} summary={summary} />
      )}
    </div>
  );
}
