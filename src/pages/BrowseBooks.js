import HistoryBooks from "../genreImportFunctions/HistoryBooks";

const BrowseBooks = () => {
    return (
    <>
        <h1>Browse Books</h1>
        <p>Take a look through each genre. See something you like? Click on it for more information and to save it to your account!</p>
        <ul>
            <li>
                <HistoryBooks />
            </li>
        </ul>
    </>
    );
}

export default BrowseBooks;