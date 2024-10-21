import styles from "./BodyStyles.module.css";
import bodyIcons from "./BodyIcons.jsx";
import decorOpen from "../../../../../public/build/assets/Sidebar_OpenDesign.svg";

function OpenBody() {
    return (
        <>
            <div
                className={`w-72 h-screen ${styles.backgroundGradient} border-r border-gray-300 border-opacity-40 rounded-r-lg flex flex-col justify-between`}
            >
                {/* <img src={decorOpen} className="" /> */}
            </div>
        </>
    );
}

export default OpenBody;
