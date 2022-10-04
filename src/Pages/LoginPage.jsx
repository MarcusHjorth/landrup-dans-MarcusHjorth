import Baggrund from "../Assets/Baggrund.png"

const LoginPage = () => {
    return ( 
        <main className="h-screen">
            <figure className="relative h-full w-full">
                <img src={Baggrund} alt="" className="h-full w-full object-cover" />
                <div className="absolute top-[-150px] h-[1000px] rotate-[70deg] w-[550px] bg-Dark bg-opacity-40 overflow-hidden"></div>
            
                <div className="absolute top-[30vh] p-[40px]">
                    <h1 className="text-[48px]">Log ind</h1>
                    <form className="flex flex-col items-center"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <p> {errors.username?.message} </p>
                    <input 
                    type="text" 
                    placeholder="Enter your email..." 
                    className="outline-none bg-OffWhite mt-[10px] py-[1rem] font-semibold rounded-full w-full border-LightGray border-2 pl-[15px]"
                        {...register("username")}
                    />

                    <p> {errors.password?.message} </p>
                    <input 
                    type="password" 
                    placeholder="Enter your password..." 
                    className="outline-none bg-OffWhite mt-[10px] py-[1rem] font-semibold rounded-full w-full border-LightGray border-2 pl-[15px]"
                        {...register("password")}
                    />
                    
                    <input 
                        type="submit" 
                        value="LOG IN" 
                        className="bg-Yellow mt-[10px] py-[1rem] font-semibold rounded-full w-full"/>
                </form>
                    dfsf
                </div>
            </figure>
        </main>
     );
}
 
export default LoginPage;