'use client';

import { useDashboardStore } from '@/store/dashboard';
import { Company } from '@/types';
import { BarChart3, Building2, FileText, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  companies: Company[];
  onCompanySelect: (company: Company | null) => void;
}

export function Navigation({ companies, onCompanySelect }: NavigationProps) {
  const { sidebarOpen, toggleSidebar, selectedCompany } = useDashboardStore();

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow lg:hidden"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div
        className={cn(
          'fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-8 h-8 text-green-600" />
              <h1 className="text-xl font-bold text-gray-900">Carbon Dashboard</h1>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              <button
                onClick={() => onCompanySelect(null)}
                className={cn(
                  'w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors',
                  !selectedCompany
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'text-gray-700 hover:bg-gray-50'
                )}
              >
                <BarChart3 className="w-5 h-5 mr-3" />
                Overview
              </button>

              <div className="pt-4">
                <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Companies
                </h3>
                <div className="space-y-1">
                  {companies.map((company) => (
                    <button
                      key={company.id}
                      onClick={() => onCompanySelect(company)}
                      className={cn(
                        'w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors',
                        selectedCompany?.id === company.id
                          ? 'bg-green-50 text-green-700 border border-green-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      )}
                    >
                      <Building2 className="w-5 h-5 mr-3" />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{company.name}</div>
                        <div className="text-xs text-gray-500">{company.country}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center text-xs text-gray-500">
              <FileText className="w-4 h-4 mr-2" />
              Emissions tracking for tax planning
            </div>
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}