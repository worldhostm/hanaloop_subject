import { create } from 'zustand';
import { Company, Post, Country } from '@/types';

interface DashboardState {
  companies: Company[];
  posts: Post[];
  countries: Country[];
  selectedCompany: Company | null;
  isLoading: boolean;
  error: string | null;
  sidebarOpen: boolean;

  setCompanies: (companies: Company[]) => void;
  setPosts: (posts: Post[]) => void;
  setCountries: (countries: Country[]) => void;
  setSelectedCompany: (company: Company | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  companies: [],
  posts: [],
  countries: [],
  selectedCompany: null,
  isLoading: false,
  error: null,
  sidebarOpen: true,

  setCompanies: (companies) => set({ companies }),
  setPosts: (posts) => set({ posts }),
  setCountries: (countries) => set({ countries }),
  setSelectedCompany: (company) => set({ selectedCompany: company }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));