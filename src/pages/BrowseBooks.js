import FantasyBooks from "../genreImportFunctions/FantasyBooks";
import HistoryBooks from "../genreImportFunctions/HistoryBooks";
import MysteryBooks from "../genreImportFunctions/MysteryBooks";
import RomanceBooks from "../genreImportFunctions/RomanceBooks";
import ScienceBooks from "../genreImportFunctions/ScienceBooks";

const BrowseBooks = () => {
    return (
    <>
        <h1>Browse Books</h1>
        <p>Take a look through each genre. See something you like? Click on it for more information and to save it to your account!</p>
        <ul>
            <li>
                <HistoryBooks />
            </li>
            <li>
                <FantasyBooks />
            </li>
            <li>
                <MysteryBooks />
            </li>
            <li>
                <ScienceBooks />
            </li>
            <li>
                <RomanceBooks />
            </li>
        </ul>
    </>
    );
}

export default BrowseBooks;