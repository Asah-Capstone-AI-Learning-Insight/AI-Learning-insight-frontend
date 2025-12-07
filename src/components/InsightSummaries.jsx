import React from 'react';

export function InsightSummaries({
  insightLabels,
  insightCategories,
  insightSummaries,
  insightAction,
}) {
  return (
    <>
      <div className="insight-summaries">
        {/* <h1>{insightLabels}</h1> */}
        <h1>The Architect</h1>
        {/* <p className="label-categories">{insightCategories}</p> */}
        <p className="label-categories">Consistent Learner</p>
        {/* <p>{insightSummaries}</p> */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
          ratione ipsam velit quidem distinctio perferendis quibusdam obcaecati
          qui eligendi mollitia?
        </p>
        {/* <p>
          <strong>Saran Aksi : </strong>
          {insightAction}
        </p> */}
        <p>
          <strong>Saran Aksi : </strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          voluptatum fugiat natus architecto eum! Autem perspiciatis nam ipsam
          iure illo.
        </p>
      </div>
    </>
  );
}
