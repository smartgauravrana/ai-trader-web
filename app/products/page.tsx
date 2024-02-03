// app/products/page.jsx
'use client'
import useSWR from 'swr';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

const fetcher = async (uri: string) => {
  const response = await fetch(uri);
  return response.json();
};

export default withPageAuthRequired(function Products() {
  const { data, error } = useSWR('/api/protected', fetcher);
  if (error) return <div>oops... {error.message}</div>;
  if (data === undefined) return <div>Loading...</div>;
  return <div>{data.protected}</div>;
});