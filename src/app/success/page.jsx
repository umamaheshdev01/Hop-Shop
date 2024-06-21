'use client'

import { Pay } from '@/components/component/pay';
import Verify from '@/components/component/verify';
import { Loader } from 'lucide-react';
import CircularProgress from '@mui/material/CircularProgress';

// Page.js
import React, { useState, useEffect } from 'react';

const Page = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState(params.slug);

  useEffect(() => {
    // Simulate a delay of 3 seconds before showing the Pay component
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {loading ? (
        <div className="flex items-center justify-center text-xl space-x-2">
           <CircularProgress className='text-2xl'></CircularProgress>
          <p className="text-gray-700 text-2xll">Processing payment ...</p>
        </div>
      ) : (

            <Verify></Verify>
        

      )}
    </div>
  );
};

export default Page;
