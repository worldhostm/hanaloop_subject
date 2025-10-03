'use client';

import { Company } from '@/types';
import { CompanyHeader, CompanyStats, CompanyUpdates } from './';
import {
  MonthlyEmissionsChart,
  EmissionsBySourceChart,
  EmissionsTrendChart
} from '@/components/charts';

interface CompanyDetailProps {
  company: Company;
}

export function CompanyDetail({ company }: CompanyDetailProps) {
  const totalEmissions = company.emissions.reduce((sum, emission) => sum + emission.emissions, 0);
  const averageEmissions = company.emissions.length > 0 ? totalEmissions / company.emissions.length : 0;

  const trend = (() => {
    if (company.emissions.length < 2) return 'stable';
    const sorted = [...company.emissions].sort((a, b) => a.yearMonth.localeCompare(b.yearMonth));
    const first = sorted[0].emissions;
    const last = sorted[sorted.length - 1].emissions;
    const change = ((last - first) / first) * 100;

    if (change > 5) return 'up';
    if (change < -5) return 'down';
    return 'stable';
  })();

  return (
    <div className="space-y-6">
      <CompanyHeader company={company} trend={trend} />

      <CompanyStats
        totalEmissions={totalEmissions}
        averageEmissions={averageEmissions}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MonthlyEmissionsChart emissions={company.emissions} />
        <EmissionsBySourceChart emissions={company.emissions} />
      </div>

      <EmissionsTrendChart emissions={company.emissions} />

      <CompanyUpdates companyId={company.id} />
    </div>
  );
}