export const loadImages = () => {
  const modules = import.meta.glob("../assets/gallery/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  });

  return Object.values(modules);
};
