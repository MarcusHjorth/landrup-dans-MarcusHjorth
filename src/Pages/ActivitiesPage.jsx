import AllActivities from "../Components/Activities/AllActivities";
import Title from "../Components/Title";
import Navigation from "../Templates/Navigation";

const ActivitiesPage = () => {
    return ( 
        <main className="h-screen">
            <div className="p-[20px]">
                <Title text="Activities"/>



                <AllActivities />

                </div>
            <Navigation />
        </main>
     );
}
 
export default ActivitiesPage;