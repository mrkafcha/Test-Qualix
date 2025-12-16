import {Link} from "react-router-dom";
import {Button} from "../../../shared/Button.tsx";
import {RequestsList} from "../../../widgets/requests-list/RequestsList.tsx";


export const Requests = () => {
    return (
        <div className="layout">
            <div className="header">
                <h1 className="title">Заявки</h1>
                <Link to='/Test-Qualix/requests/new'>
                    <Button>Создать заявку</Button>
                </Link>
            </div>
            <div className="page-card">
                <RequestsList />
            </div>
        </div>
    );
}

