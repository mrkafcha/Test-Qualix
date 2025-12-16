import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const RequestsList = () => {
    const requests = useSelector((state) => state.requests.requests)
    // console.log(requests.length)
    return (
        <div className="list">
            {requests.length !== 0? requests.map((request) => (
                <Link key={request.id} to={`/Test-Qualix/requests/${request.id}`} className="request-card">
                    <div className="header">
                        <h2 className="header">{request.heading}</h2>
                        <p>{request.dateCreation}</p>
                    </div>
                    <div>Категория: {request.category}</div>
                </Link>
            )) : <div>Нет данных</div>}
        </div>
    )
}