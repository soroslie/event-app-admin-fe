import React from 'react';
import PageHeader from '../components/PageHeader';
import PrimarryButton from '../components/inputs/PrimaryButton';
import { useGetProfileQuery } from '../store/slices/apiSlice';

function Profile() {
  const { data, error, isLoading } = useGetProfileQuery();
  return (
    <>
      <PageHeader title="Profile" />
      <div className="p-8 bg-white shadow-xl mt-4 max-w-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0" />
          <div className="">
            {isLoading || error ? (
              <div className="animate-pulse rounded-full bg-slate-200 h-24 w-24 mx-auto shadow-2xl flex items-center justify-center" />
            ) : (
              <div className="w-24 h-24 bg-orange-100 mx-auto rounded-full shadow-2xl  flex items-center justify-center text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10s"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
        <div className="text-center border-b pb-12 mt-4 md:mt-10">
          {isLoading || error ? (
            <>
              <div className="animate-pulse h-10 bg-slate-200 rounded" />
              <div className="animate-pulse h-4 bg-slate-200 rounded mt-3" />
            </>
          ) : (
            <div>
              <h1 className="text-md md:text-2xl font-medium text-gray-700">
                {data.data.email}
              </h1>
              <p className="font-light text-gray-600 mt-3">
                {data.data.role}
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 flex flex-col justify-center">
          {isLoading ? (
            <div className="animate-pulse h-10 bg-slate-200 rounded" />
          ) : (
            <PrimarryButton title="edit" />
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
