import ClassInfo from "../components/ClassInfo";
import useFetchList from "../hooks/useFetchList";

const ClassListPage = () => {
    const classesList = useFetchList('classes');
    const classDisplay = classesList.map(className => {
        return <ClassInfo index={className} />
    })

    return (
        <>
            <h1 className="page-header">Classes</h1>
            <div className="custom-list-header">
                {classDisplay}
            </div>
        </>
    )
}

export default ClassListPage;