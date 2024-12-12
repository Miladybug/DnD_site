import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
    return (
        <>
            <MainNavigation />
            <main className="text-light">
                <h1>An error has occured</h1>
                <p>Could not find this page</p>
            </main>
        </>
    )
}

export default ErrorPage;