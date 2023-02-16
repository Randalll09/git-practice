export const imgpath = (path: string, width?: number | undefined) => {
  return `https://image.tmdb.org/t/p/${width ? 'w500' : 'original'}/${path}`;
};
