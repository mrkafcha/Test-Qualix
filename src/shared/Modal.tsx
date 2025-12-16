import {Button} from "./Button.tsx";

export const Modal = ({ onClose ,children }: any) => {
    return (
        <div className="modal-overlay" role="dialog" aria-modal="true">
            <div className="modal-content">
                <div className="header">
                    <h3 className="title">Редактировать заявку</h3>
                    <Button onClick={onClose} >
                        Закрыть
                    </Button>
                </div>
                {children}
            </div>
        </div>
    )
};