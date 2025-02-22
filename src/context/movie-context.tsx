import { ReactNode, createContext, useReducer } from "react";
import { MovieDataType, moviesData } from "../assets/data";

interface MovieContextProps {
  children: ReactNode;
}

interface MovieState {
  movies: MovieDataType[];
}

interface MovieAction {
  type: string;
  id: string;
}

const MovieList: MovieDataType[] = moviesData;

const initialmovieState: MovieState = {
  movies: MovieList,
};

const MovieReducer = (state: MovieState, action: MovieAction): MovieState => {
  switch (action.type) {
    case "TOOGLE BOOKMARK":
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie.id === action.id) {
            return { ...movie, isBookmarked: !movie.isBookmarked };
          }
          return movie;
        }),
      };
      default:
        return state;
  }
};

export const MovieContext = createContext<{
  state: MovieState;
  dispatch: React.Dispatch<MovieAction>;
}>({ state: initialmovieState, dispatch: () => {} });

export const MovieProvider = ({ children }: MovieContextProps) => {
  const [state, dispatch] = useReducer(MovieReducer, initialmovieState);
  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
