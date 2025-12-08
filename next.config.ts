import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // turbopack: {
  //   rules: {
  //     "*.svg": {
  //       loaders: [
  //         {
  //           loader: "@svgr/webpack",
  //           options: {
  //             // Automatically replace common hard-coded colors and set currentColor
  //             replaceAttrValues: {
  //               "#000": "currentColor",
  //               "#000000": "currentColor",
  //               "#fff": "currentColor",
  //               "#ffffff": "currentColor",
  //               // Add more if your icons use other colors
  //             },
  //             svgProps: {
  //               fill: "currentColor",
  //               stroke: "currentColor",
  //             },
  //           },
  //         },
  //       ],
  //       as: "*.js",
  //     },
  //   },
  // },
};

export default nextConfig;
