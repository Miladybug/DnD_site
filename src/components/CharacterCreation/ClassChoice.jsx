import useFetchList from "../../hooks/useFetchList";
import ClassInfo from "../ClassInfo";

const ClassChoice = ({ onChooseClass }) => {
    const classesList = useFetchList('classes');
    
    const selectHandler = (index, event) => {
        onChooseClass(index.className);
    }
    
    const classDisplay = classesList.map(className => {
        return (
            <div className="d-flex flex-column justify-content-center">
                <ClassInfo index={className} id={className}/>
                <button type="button" className="btn btn-light" onClick={(event) => selectHandler({className}, event)}>Select</button>
            </div>
        )
    })

    return (
        <>
            <h3 className="page-header">Choose a class</h3>
            <div className="custom-list-header">
                {classDisplay}
            </div>
        </>
    )
}

export default ClassChoice;