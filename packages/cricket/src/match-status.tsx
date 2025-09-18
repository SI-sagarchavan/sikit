import React from "react";

export interface MatchStatusProps {
  status: "upcoming" | "live" | "completed" | "abandoned";
  venue: string;
  date: string;
  result?: string;
  children?: React.ReactNode;
}

const MatchStatus = ({ status, venue, date, result, children }: MatchStatusProps): React.ReactElement => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      case "live":
        return "bg-green-100 text-green-800";
      case "completed":
        return "bg-gray-100 text-gray-800";
      case "abandoned":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="cricket-match-status border rounded-lg p-4 bg-white shadow-md">
      <div className="status-header flex items-center justify-between">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
        <div className="match-details text-right">
          <div className="venue text-sm font-medium">{venue}</div>
          <div className="date text-xs text-gray-500">{date}</div>
        </div>
      </div>
      {result && (
        <div className="match-result mt-3 p-2 bg-gray-50 rounded text-sm">
          <strong>Result:</strong> {result}
        </div>
      )}
      {children}
    </div>
  );
};

MatchStatus.displayName = "MatchStatus";

export { MatchStatus }; 