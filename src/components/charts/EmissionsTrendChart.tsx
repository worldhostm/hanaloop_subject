'use client';

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GhgEmission } from '@/types';

interface EmissionsTrendChartProps {
  emissions: GhgEmission[];
}

type Period = 'weekly' | 'monthly' | 'yearly';

export function EmissionsTrendChart({ emissions }: EmissionsTrendChartProps) {
  const [period, setPeriod] = useState<Period>('monthly');

  const getChartData = () => {
    const sorted = [...emissions].sort((a, b) => a.yearMonth.localeCompare(b.yearMonth));

    switch (period) {
      case 'weekly': {
        // Aggregate by week
        const weeklyMap = new Map<string, { emissions: number; weekNumber: number }>();
        sorted.forEach(emission => {
          const [year, month] = emission.yearMonth.split('-');
          const date = new Date(parseInt(year), parseInt(month) - 1, 1);
          const weekOfYear = Math.ceil((date.getTime() - new Date(date.getFullYear(), 0, 1).getTime()) / (7 * 24 * 60 * 60 * 1000));
          const weekKey = `${year}-W${weekOfYear}`;
          const existing = weeklyMap.get(weekKey);
          weeklyMap.set(weekKey, {
            emissions: (existing?.emissions || 0) + emission.emissions,
            weekNumber: weekOfYear
          });
        });
        return Array.from(weeklyMap.entries())
          .sort((a, b) => a[0].localeCompare(b[0]))
          .map(([_, data], index) => ({
            period: `${index + 1}주차`,
            emissions: data.emissions,
          }));
      }

      case 'monthly': {
        // Aggregate by month
        const monthlyMap = new Map<string, number>();
        sorted.forEach(emission => {
          monthlyMap.set(emission.yearMonth, (monthlyMap.get(emission.yearMonth) || 0) + emission.emissions);
        });
        return Array.from(monthlyMap.entries()).map(([month, emissions]) => ({
          period: month,
          emissions,
        }));
      }

      case 'yearly': {
        // Aggregate by year
        const yearlyMap = new Map<string, number>();
        sorted.forEach(emission => {
          const year = emission.yearMonth.split('-')[0];
          yearlyMap.set(year, (yearlyMap.get(year) || 0) + emission.emissions);
        });
        return Array.from(yearlyMap.entries()).map(([year, emissions]) => ({
          period: year,
          emissions,
        }));
      }
    }
  };

  const chartData = getChartData();

  const getPeriodLabel = () => {
    switch (period) {
      case 'weekly': return 'Weekly Trend';
      case 'monthly': return 'Monthly Trend';
      case 'yearly': return 'Yearly Trend';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{getPeriodLabel()}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setPeriod('weekly')}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              period === 'weekly'
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            주간
          </button>
          <button
            onClick={() => setPeriod('monthly')}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              period === 'monthly'
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            월간
          </button>
          <button
            onClick={() => setPeriod('yearly')}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              period === 'yearly'
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            연간
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="period" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Line
            type="monotone"
            dataKey="emissions"
            stroke="#10B981"
            strokeWidth={3}
            dot={{ fill: '#10B981', strokeWidth: 2, r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}