import { useEffect, useState } from "react";

const useFetchList = (tableName) => {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        const fetchFunction = async () => {
            const response = await fetch(`https://www.dnd5eapi.co/api/${tableName}`);
            if (!response.ok){
                console.log("Error loading response");
                throw new Error ("Something went wrong!")
            }

            const responseData = await response.json();
            const responseIndex = [];

            for (let i = 0; i < responseData.results?.length; i++){
                responseIndex.push(responseData.results[i].index);                
            }
            
            setDataList(responseIndex);
        }

        fetchFunction();
    }, [])

    return dataList;
}

export default useFetchList;