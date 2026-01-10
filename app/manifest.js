
export default function manifest() {
  return {
    name: "M Trading",
    short_name: "M Trading",
    description: "Global Trading Partner — sourcing and trading support.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0A1E46",
    icons: [
      {
        src: "/favicon.png",
        sizes: "64x64",
        type: "image/png",
      },
    ],
  };
}
