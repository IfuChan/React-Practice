import useWindowWidth from "../hooks/useWindowWidth";

export default function LayoutComponentOne() {
    // const [onSmallScreen, setOnSmallScreen] = useState(false);
    // const checkScreenSize = () => {
    //     setOnSmallScreen(window.innerWidth < 768);
    // };
    // useEffect(() => {
    //     checkScreenSize();
    //     window.addEventListener("resize", checkScreenSize);

    //     return () => window.removeEventListener('resize', checkScreenSize);
    // }, []) //NO LONGER NEEDED AS CUSTOM HOOK USED!
    const onSmallScreen = useWindowWidth(600);
    return (
        <div>
            <h1>
                You are browsing on {onSmallScreen ? "small" : "large"} device
            </h1>
        </div>
    );
}