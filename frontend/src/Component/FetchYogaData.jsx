import UseFetch from "./UseFetch";
import './FetchFoodData.css'

const FetchYogaData = () => {
    const data = UseFetch('https://api.npoint.io/4459a9a10e43812e1152')
    console.log(data)
return(
    <div>
        <h1 className="useFetch_heading">Use Fetch Custom Hook</h1>
        <ul className="list_data_main">
            {data && data.map((item, idx) =>(
                <li key={idx} className="list_data">
                    <h3>{item.name}</h3>
                    <p><strong>Benefits: </strong>{item.benefits}</p>
                    <p><strong>Time to do: </strong>{item.time_duration}</p>
                </li>
            )
            )}
        </ul>
    </div>
)
}

export default FetchYogaData;