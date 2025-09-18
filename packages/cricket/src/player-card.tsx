import React from "react";

export interface PlayerCardProps {
  name: string;
  role: "batsman" | "bowler" | "all-rounder" | "wicket-keeper";
  runs?: number;
  wickets?: number;
  catches?: number;
  children?: React.ReactNode;
}

const PlayerCard = ({ name, role, runs, wickets, catches, children }: PlayerCardProps): React.ReactElement => {
  return (
    <div className="cricket-player-card border rounded-lg p-4 bg-gray-50 shadow-sm">
      <div className="player-info">
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-sm text-gray-600 capitalize">{role}</p>
      </div>
      <div className="player-stats mt-2">
        {runs !== undefined && (
          <div className="stat">
            <span className="stat-label">Runs: </span>
            <span className="stat-value font-bold">{runs}</span>
          </div>
        )}
        {wickets !== undefined && (
          <div className="stat">
            <span className="stat-label">Wickets: </span>
            <span className="stat-value font-bold">{wickets}</span>
          </div>
        )}
        {catches !== undefined && (
          <div className="stat">
            <span className="stat-label">Catches: </span>
            <span className="stat-value font-bold">{catches}</span>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

PlayerCard.displayName = "PlayerCard";

export { PlayerCard }; 