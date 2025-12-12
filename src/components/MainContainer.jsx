import React from 'react';
import { InsightContainer } from './InsightContainer';

export function MainContainer({ insight }) {
  return (
    <div className="main-container">
      <InsightContainer insight={insight} />
    </div>
  );
}
