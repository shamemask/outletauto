import BasePage from "./base/base";
import MainPage from "./main";

const IndexPage = (props) => {
    return (
        <>
            <BasePage />
            <MainPage props={props} />
        </>
    )
}

export default IndexPage