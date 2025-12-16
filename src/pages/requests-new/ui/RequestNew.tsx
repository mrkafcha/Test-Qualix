import {Link, useNavigate} from "react-router-dom";
import {Button} from "../../../shared/Button.tsx";
import {RequestForm} from "../../../widgets/request-form/RequestForm.tsx";
import {useDispatch} from "react-redux";
import {addRequest} from "../../../ entities/requestsSlice.ts";


export const RequestNew = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        // console.log(values)
        dispatch(addRequest(values));
        navigate('/Test-Qualix/requests');
    }

    return (
        <div className="layout">
            <div className="header">
                <h1 className="title">Новая заявка</h1>
                <Link to="/Test-Qualix/requests">
                    <Button >Назад к списку</Button>
                </Link>
            </div>
            <div className="page-card">
                <RequestForm descriptionButton="Создать заявку"  onSubmit={handleSubmit} />
            </div>
        </div>
    )
}