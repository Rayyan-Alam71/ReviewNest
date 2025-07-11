import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // used for cloudinary
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "res.cloudinary.com",
  //     },
  //   ],
  // },
  images: {
    remotePatterns: [new URL('https://dhmckee.com/wp-content/uploads/**'),
      new URL("https://www.eurekabookstore.com/public/uploads/**"),
      new URL('https://lh3.googleusercontent.com/**'),
      new URL('https://cdn.vectorstock.com/**')
    ],
  },
};

export default nextConfig;
