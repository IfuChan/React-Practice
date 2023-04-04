import useWindowWidth from "../hooks/useWindowWidth";


export default function LayoutComponentTwo() {
    // const [onSmallScreen, setOnSmallScreen] = useState(false);
    // const checkScreenSize = () => {
    //     setOnSmallScreen(window.innerWidth < 768);
    // };
    // useEffect(() => {
    //     checkScreenSize();
    //     window.addEventListener("resize", checkScreenSize);

    //     return () => window.removeEventListener('resize', checkScreenSize);
    // }, []) //NO LONGER NEEDED AS CUSTOM HOOKS USED!

    const onSmallScreen = useWindowWidth();

    return (
        <div>
            <h1 className={onSmallScreen ? " small" : "large"}>
                layout component two!
            </h1>
        </div>
    );
}