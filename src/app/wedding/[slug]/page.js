"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import FirstWebSite from "@/components/create-website/FirstWebSite";

export default function PublishedWeddingPage() {
  const params = useParams();
  const slug = params.slug;
  const [websiteData, setWebsiteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWebsiteData = async () => {
      try {
        // Fetch actual website data from API
        const response = await fetch(`/api/websites/${slug}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            setError('Wedding website not found');
          } else {
            setError('Failed to load wedding website');
          }
          return;
        }
        
        const result = await response.json();
        if (result.success && result.data) {
          setWebsiteData(result.data);
        } else {
          setError('Invalid website data');
        }
      } catch (err) {
        setError('Failed to load wedding website');
        console.error('Error fetching website data:', err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchWebsiteData();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading wedding website...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Website Not Found</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <a 
            href="/" 
            className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
          >
            Go Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Published Website Display */}
      <div className="">
        <FirstWebSite 
          view="desktop" 
          websiteData={websiteData}
          // No edit functionality for published sites
          onRemoveImage={null}
          isPublished={true}
        />
      </div>
      
      {/* Published Website Footer */}
      <div className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-500">
            Powered by <span className="font-semibold text-pink-600">PlanIt</span> - Create your own wedding website
          </p>
        </div>
      </div>
    </div>
  );
}
