import React from 'react';

function ProfileSkeleton() {
  return (
    <div className="p-8 bg-white shadow-xl mt-4 max-w-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0" />
        <div>
          <div className="animate-pulse rounded-full bg-slate-200 h-24 w-24 mx-auto shadow-2xl flex items-center justify-center" />
        </div>
      </div>
      <div className="text-center border-b pb-12 mt-4 md:mt-10">
        <div className="animate-pulse h-10 bg-slate-200 rounded" />
        <div className="animate-pulse h-4 bg-slate-200 rounded mt-3" />
      </div>
      <div className="mt-12 flex flex-col justify-center">
        <div className="animate-pulse h-10 bg-slate-200 rounded" />
      </div>
    </div>
  );
}

export default ProfileSkeleton;
