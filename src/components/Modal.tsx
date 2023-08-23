interface ModalType {
    open: Boolean;
    title: String;
    children?: React.ReactElement | String;
    onClose?: () => void;
}
const Modal = (porps: ModalType) => {
    const { open, title, children = "", onClose = () => {} } = porps;

    const hideModal = (e: React.MouseEvent) => {
        e.target === e.currentTarget && onClose();
    };
    return (
        <div
            className={`${
                open ? "" : "hidden"
            } h-[100vh] w-[100vw] absolute top-0 left-0 flex justify-center items-center bg-[color:#000000c5]`}
            onClick={hideModal}
        >
            <div
                className="modal min-w-[300px] bg-white px-5 py-3"
                tabIndex={1}
            >
                <div className="flex justify-between items-center my-2">
                    <span className="text-xl font-semibold text-[color:var(--primary)]">
                        {title}
                    </span>
                    <span className="cursor-pointer" onClick={hideModal}>
                        X
                    </span>
                </div>
                <hr />
                <hr />
                <div className="mt-2">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
