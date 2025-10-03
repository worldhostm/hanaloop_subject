import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GhgEmission } from '@/types';

interface MonthlyEmissionsChartProps {
  emissions: GhgEmission[];
}

export function MonthlyEmissionsChart({ emissions }: MonthlyEmissionsChartProps) {
  const monthlyData = emissions
    .sort((a, b) => a.yearMonth.localeCompare(b.yearMonth))
    .map(emission => ({
      ...emission,
      month: emission.yearMonth.slice(-2),
    }));

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Emissions</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={monthlyData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            formatter={(value: number) => [`${value} tons`, 'Emissions']}
          />
          <Bar dataKey="emissions" fill="#3B82F6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}