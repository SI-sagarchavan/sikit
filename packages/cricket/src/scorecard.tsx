import React from "react";

export interface ScorecardProps {
  team: string;
  score: number;
  wickets: number;
  overs: number;
  children?: React.ReactNode;
}

const Scorecard = ({ team, score, wickets, overs, children }: ScorecardProps): React.ReactElement => {
  return (
    <div className="cricket-scorecard border rounded-lg p-4 bg-white shadow-md">
      <div className="team-info">
        <h3 className="text-lg font-bold">{team}</h3>
        <div className="score-display">
          <span className="score text-2xl font-bold">{score}</span>
          <span className="wickets">/{wickets}</span>
          <span className="overs ml-2">({overs} overs)</span>
        </div>
      </div>
      {children}
    </div>
  );
};

Scorecard.displayName = "Scorecard";

export { Scorecard }; 