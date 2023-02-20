export const handleFilterMovies = (movies,input) => {
  return movies.filter((movie) =>
    movie.title.toLowerCase().startsWith(input.toLowerCase())
  );
};
