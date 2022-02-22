import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../store/articles/actions";
import { selectArticles, selectArticlesLoading, selectError } from "../../store/articles/selectors";

export const Articles = () => {
    const dispatch = useDispatch();
    const error = useSelector(selectError);
    const isLoading = useSelector(selectArticlesLoading);
    const articles = useSelector(selectArticles);

const getData = async () => {
    dispatch(getArticles());
};

useEffect(() => {
    getData();
}, []);

    return ( 
        <>
        <h2>Articles</h2>
        <button onClick={getData}>Refresh</button>
        {error && <h3>Error: {error.message}</h3>}
        {isLoading ? (
            <CircularProgress />
        ) : (
            <ul>
            {articles.map((art) => (
                <li key={art.id}>{art.title}</li>
            ))}
        </ul>
        )}
        </>
)};