import useFetchInfo from "../../hooks/useFetchInfo";

const AlignmentInfo = (props) => {
    const alignmentInfo = useFetchInfo('alignments', props.index)
    
    return (
        <tr>
            <th scope="row">{alignmentInfo.name}</th>
            <td>{alignmentInfo.desc}</td>
        </tr>
    )
}

export default AlignmentInfo;