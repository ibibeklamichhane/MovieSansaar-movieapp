
//import { Suspense } from 'react';

export default function NotFound() {
  return (
    <div suppressHydrationWarning={true} className='flex dark:bg-white bg-amber-100  text-black p-4 lg:text-2xl justify-center gap-6'>
        <h1>Page not found</h1>
    </div>

  );
}