import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3/';

export interface IMovie {
  backdrop_path: string;
  genres: { id: number; name: string }[];
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  revenue: number;
  runtime: number;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface IReview {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string | null;
    rating: number | null;
  };
  content: string;
  created_at: string;
  id: string;
  url: string;
}

export const movieLatest = async () => {
  const res: IMovie[] = await axios.get(
    `${baseUrl}movie/latest?api_key=${process.env.NEXT_MOVIE_API_KEY}`
  );
  return res;
};

export const reviews = async (id: number) => {
  const res: { id: number; result: IReview[]; total_pages: number } =
    await axios.get(
      `${baseUrl}movie/{movie_id}/reviews?api_key=${process.env.NEXT_MOVIE_API_KEY}`
    );
  return res.result;
};
