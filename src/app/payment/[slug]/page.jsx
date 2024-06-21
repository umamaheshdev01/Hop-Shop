'use client'

import { Pay } from '@/components/component/pay';
import { Loader } from 'lucide-react';
import CircularProgress from '@mui/material/CircularProgress';

// Page.js
import React, { useState, useEffect } from 'react';

const Page = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState(params.slug);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {loading ? (
        <div className="flex items-center justify-center text-xl space-x-2">
           <CircularProgress className='text-3xl'></CircularProgress>
          <p className="text-gray-700 text-2xl">Processing payment ...</p>
        </div>
      ) : (
        <div className="text-center">
          
          {/* Replace with your Pay component */}
          <Pay price={price} />
        </div>
      )}
    </div>
  );
};

export default Page;
