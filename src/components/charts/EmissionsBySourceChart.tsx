import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { GhgEmission } from '@/types';

interface EmissionsBySourceChartProps {
  emissions: GhgEmission[];
}

const COLORS = ['#10B981', '#3B82F6', '#F59E0B', '#EF4444'];

export function EmissionsBySourceChart({ emissions }: EmissionsBySourceChartProps) {
  const sourceData = emissions.reduce((acc: Array<{source: string; total: number}>, emission) => {
    const existing = acc.find(item => item.source === emission.source);
    if (existing) {
      existing.total += emission.emissions;
    } else {
      acc.push({
        source: emission.source,
        total: emission.emissions,
      });
    }
    return acc;
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Emissions by Source</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={sourceData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ source, percent }) => `${source} ${((percent as number) * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="total"
          >
            {sourceData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            formatter={(value: number) => [`${value.toFixed(1)} tons`, 'Total']}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}