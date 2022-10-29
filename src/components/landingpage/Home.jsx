import landingOne from '../images/landingpage1.png';

const Home = () => {
    return(
        <div className={"text-amber-50 h-screen border-b-2 border-b-green-500"}>
            <div className={"ml-8 pt-60 text-[60px] font-raleway"}>
                <h1>We provide unlimited access to <span className={"text-green-400"}>all</span> public sector data</h1>
                <h1>through <span className={"text-green-400"}>one standardized</span> access point.</h1>
            </div>
            <div className={"ml-16 mt-40 text-[30px] font-raleway w-2/3"}>
                <h1>Precise, standardized, and formatted data delivered instantaneously.</h1>
                <h1>Support your project and research with the full data power of the <span className={"text-green-400"}>U.S. federal government</span>.</h1>
                <div className={"w-full flex justify-center mt-16"}>
                    <button className={"border-0 rounded-2xl px-6 py-2 text-[20px] bg-green-700 text-black font-bold hover:border-2 hover:border-green-500 hover:text-green-500 hover:bg-black font-lora"}>Get Started</button>
                </div>
            </div>
            <img src={landingOne} className={"w-1/5 h-[400px] right-4 top-[300px] absolute"}></img>
        </div>
    )
}

export default Home;