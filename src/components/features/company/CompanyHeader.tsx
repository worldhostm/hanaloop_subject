import { Company } from '@/types';
import { Building2, MapPin, TrendingUp, TrendingDown } from 'lucide-react';

interface CompanyHeaderProps {
  company: Company;
  trend: 'up' | 'down' | 'stable';
}

export function CompanyHeader({ company, trend }: CompanyHeaderProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-blue-50 rounded-lg">
            <Building2 className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{company.name}</h1>
            <div className="flex items-center text-gray-600 mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              {company.country}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-2">
            {trend === 'up' && <TrendingUp className="w-5 h-5 text-red-500" />}
            {trend === 'down' && <TrendingDown className="w-5 h-5 text-green-500" />}
            <span className={`text-sm font-medium ${
              trend === 'up' ? 'text-red-600' : trend === 'down' ? 'text-green-600' : 'text-gray-600'
            }`}>
              {trend === 'up' ? 'Increasing' : trend === 'down' ? 'Decreasing' : 'Stable'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}