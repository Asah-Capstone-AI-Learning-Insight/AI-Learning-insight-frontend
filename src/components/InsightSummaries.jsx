import React from 'react';

export function InsightSummaries({ insight }) {
  if (!insight) {
    return <p>Loading</p>;
  }

  return (
    <>
      <div className="insight-summaries">
        <h1>{insight.archetype_name}</h1>
        {/* <h1>The Architect</h1> */}
        <p className="label-categories">{insight.pattern_category}</p>
        {/* <p className="label-categories">Consistent Learner</p> */}
        <p>{insight.insight_text}</p>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
          ratione ipsam velit quidem distinctio perferendis quibusdam obcaecati
          qui eligendi mollitia?
        </p> */}
        <p>
          <strong>Saran Aksi : </strong>
          {insight.recommendation}
        </p>
        {/* <p>
          <strong>Saran Aksi : </strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          voluptatum fugiat natus architecto eum! Autem perspiciatis nam ipsam
          iure illo.
        </p> */}
      </div>
    </>
  );
}
