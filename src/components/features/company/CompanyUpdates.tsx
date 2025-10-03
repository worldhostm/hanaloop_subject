import { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';
import { Post } from '@/types';
import { fetchPostsByCompany } from '@/lib/api';
import { LoadingSpinner } from '@/components/ui';

interface CompanyUpdatesProps {
  companyId: string;
}

export function CompanyUpdates({ companyId }: CompanyUpdatesProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const companyPosts = await fetchPostsByCompany(companyId);
        setPosts(companyPosts);
      } catch (error) {
        console.error('Failed to load posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [companyId]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <FileText className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Recent Updates</h3>
        </div>
      </div>
      <div className="p-6">
        {loading ? (
          <LoadingSpinner />
        ) : posts.length > 0 ? (
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="border border-gray-100 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{post.title}</h4>
                    <p className="text-gray-600 mt-1">{post.content}</p>
                  </div>
                  <span className="text-sm text-gray-500 ml-4">{post.dateTime}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No updates available for this company
          </div>
        )}
      </div>
    </div>
  );
}