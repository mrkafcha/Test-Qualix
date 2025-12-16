import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";
import {Button} from "../../../shared/Button.tsx";
import {useState} from "react";
import {Modal} from "../../../shared/Modal.tsx";
import {RequestForm} from "../../../widgets/request-form/RequestForm.tsx";
import { deleteRequests, updateRequest } from "../../../ entities/requestsSlice.ts";
import type {RootState} from "../../../ entities/store.ts";
import type {RequestAdd} from "../../../ entities/model/request-type.ts";

export const RequestDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams()
    const request = useSelector((state: RootState) => state.requests.requests.find((item: any) => item.id === id));
    const [modalShow, setModalShow] = useState(false);
    const initialValues = {
        heading: request.heading,
        description: request.description,
        category: request.category,
    }
    // console.log(request)

    const handleEditSubmit = (changes: RequestAdd) => {
        // console.log(changes)
        dispatch(updateRequest({ id:request.id, changes }));
        setModalShow(false);
    };

    const handleDelete = () => {
        dispatch(deleteRequests({id:request.id}))
        navigate('/Test-Qualix/requests/')
    }

    return (
        <div className="layout">
            <div className="header">
                <h1 className="title">{request.heading}</h1>
                <Link to='/Test-Qualix/requests/'>
                    <Button>Вернуться назад</Button>
                </Link>
            </div>
            <div className="page-card">
                <div className="page-basic">
                    <div><strong>Категория:</strong> {request.category}</div>
                    <div><strong>Дата создания:</strong> {request.dateCreation}</div>
                </div>
                <p>{request.description}</p>
                <div>
                    <Button onClick={() => setModalShow(true)}>Редактировать заявку</Button>
                    <Button onClick={handleDelete}>Удалить</Button>
                </div>
            </div>

            {modalShow? (
                <Modal onClose={() => setModalShow(false)}>
                    <RequestForm initialValues={initialValues} onSubmit={handleEditSubmit}/>
                </Modal>
            ) : null }

        </div>
    )
}