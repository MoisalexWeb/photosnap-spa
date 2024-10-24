import "./ScrollTop.scss"
import { useScrollTop } from "./hook/useScrollTop"

const ScrollTop = () => {
    const { scrollToTop } = useScrollTop()

    return (
        <button className="scrollTop-btn" id="scrollTop-btn" aria-label="Scroll to top" onClick={scrollToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m12 3.879-7.061 7.06 2.122 2.122L12 8.121l4.939 4.94 2.122-2.122z"></path><path d="m4.939 17.939 2.122 2.122L12 15.121l4.939 4.94 2.122-2.122L12 10.879z"></path></svg>
        </button>
    )
}

export default ScrollTop