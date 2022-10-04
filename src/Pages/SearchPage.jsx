import AllActivities from "../Components/Activities/AllActivities";
import SearchBar from "../Components/Search/SearchBar";
import Title from "../Components/Title";
import Navigation from "../Templates/Navigation";

const SearchPage = () => {
    return ( 
        <main>
            <div className="p-[20px]">
                <Title text="Søg" />

                <SearchBar />

                <AllActivities />

            </div>
            <Navigation />
        </main>
     );
}
 
export default SearchPage;