'use client';

import { useEffect, useState, useCallback } from 'react';
import { useDashboardStore } from '@/store/dashboard';
import { fetchCompanies, fetchPosts, fetchCountries } from '@/lib/api';
import { Navigation, DashboardOverview } from '@/components/features/dashboard';
import { CompanyDetail } from '@/components/features/company';
import { LoadingSpinner, ErrorMessage } from '@/components/ui';

export default function Home() {
  const {
    companies,
    selectedCompany,
    isLoading,
    error,
    setCompanies,
    setPosts,
    setCountries,
    setSelectedCompany,
    setLoading,
    setError,
  } = useDashboardStore();

  const [initialLoad, setInitialLoad] = useState(true);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const [companiesData, postsData, countriesData] = await Promise.all([
        fetchCompanies(),
        fetchPosts(),
        fetchCountries(),
      ]);

      setCompanies(companiesData);
      setPosts(postsData);
      setCountries(countriesData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load data');
    } finally {
      setLoading(false);
      setInitialLoad(false);
    }
  }, [setCompanies, setPosts, setCountries, setLoading, setError]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (initialLoad && isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading dashboard..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <ErrorMessage message={error} onRetry={loadData} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation companies={companies} onCompanySelect={setSelectedCompany} />

      <main className="transition-all duration-300 lg:ml-64">
        <div className="p-6 pt-20 lg:pt-6">
          {selectedCompany ? (
            <CompanyDetail company={selectedCompany} />
          ) : (
            <DashboardOverview companies={companies} />
          )}
        </div>
      </main>
    </div>
  );
}
