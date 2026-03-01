export const loadImages = () => {
  const modules = import.meta.glob("../assets/images/*.{png,jpg,jpeg}", {
    eager: true,
    import: "default",
  });

  return Object.values(modules);
};
