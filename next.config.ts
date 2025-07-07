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
      new URL("https://www.eurekabookstore.com/public/uploads/**")
    ],
  },
};

export default nextConfig;
