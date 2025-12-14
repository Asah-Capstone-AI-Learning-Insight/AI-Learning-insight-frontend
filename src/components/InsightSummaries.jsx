export function InsightSummaries({ insight }) {
  if (!insight) {
    return (
      <div className="insight-summaries">
        <p>Loading</p>
      </div>
    );
  }

  return (
    <div className="insight-summaries">
      <h1>{insight.cluster_label}</h1>

      <p>
        <strong>Insight: </strong>
      </p>
      <p>{insight.insight}</p>

      <p>
        <strong>Rekomendasi: </strong>
      </p>
      <p>{insight.recommendation}</p>
    </div>
  );
}
