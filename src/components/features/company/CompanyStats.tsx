import { Calendar, TrendingUp } from 'lucide-react';

interface CompanyStatsProps {
  totalEmissions: number;
  averageEmissions: number;
}

export function CompanyStats({ totalEmissions, averageEmissions }: CompanyStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-gray-600">Total Emissions</p>
          <Calendar className="w-5 h-5 text-gray-400" />
        </div>
        <p className="text-3xl font-bold text-gray-900">{totalEmissions.toFixed(1)} tons</p>
        <p className="text-sm text-gray-500 mt-1">CO₂ equivalent</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-gray-600">Average Monthly</p>
          <TrendingUp className="w-5 h-5 text-gray-400" />
        </div>
        <p className="text-3xl font-bold text-gray-900">{averageEmissions.toFixed(1)} tons</p>
        <p className="text-sm text-gray-500 mt-1">Per month</p>
      </div>
    </div>
  );
}