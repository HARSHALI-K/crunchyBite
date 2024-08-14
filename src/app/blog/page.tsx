import React from 'react';
import type { Metadata } from "next";
import Blog from '.';

export const metadata: Metadata = {
  title: 'Blog | Crunchy Bite',
  description: 'Crunchy Bite',
}

const Page = () => {
  return (<Blog />)
}

export default Page;