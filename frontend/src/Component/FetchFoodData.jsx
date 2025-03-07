import UseFetch from "./UseFetch";
import './FetchFoodData.css'
const FetchFoodData = () => {
    const data = UseFetch('https://api.npoint.io/9045c260b1565daa9e15')
    console.log(data)
    return(
        <div>
            <h1 className="useFetch_heading">Use Fetch Custom Hook</h1>
            <ul className="list_data_main">
                {data && data.map((item, idx) => (
                    <li className="list_data" key={idx}>
                        <h3>{item.name}</h3>
                            <p><strong>Importance: </strong>{item.importance}</p>
                            <p><strong>Benefits: </strong>{item.benefits}</p>
                            <p><strong>Time to eat:  </strong>{item.best_time_to_intake}</p>
                            <img src={item.image} alt={item.name} style={{width: '150px', height: '150px', objectFit: 'cover'}}/>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}

export default FetchFoodData;