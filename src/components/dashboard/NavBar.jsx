import backIcon from "../images/back.svg";
import moreIcan from "../images/more.svg";

const NavBar = () => {
    return(
        <div className={"text-black h-20 flex flex-col justify-center fixed border-b-2 shadow-lg font-bold bg-gray-100"}>
            <div className={"w-screen flex justify-between"}>
                <img src={backIcon} className={"h-[30px] my-auto mx-8"}></img>
                <div className={"text-4xl font-raleway ml-6 flex flex-col font-bold pt-2"}>
                    <div>
                        <span>Thror</span><span className={"text-green-600"}>Map</span>
                    </div>
                    <span className={"text-sm ml-16"}>Just Ask</span>
                </div>
                <img src={moreIcan} className={"h-[50px] my-auto mx-8"}></img>
            </div>
        </div>
    )
}

export default NavBar;