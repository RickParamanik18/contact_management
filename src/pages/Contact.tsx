import { toggleModal } from "../actions";
import Button from "../components/Button";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";

const Contact: React.FC = () => {
    const state: any = useSelector((state) => state);
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(toggleModal());
    };

    console.log(state);
    return (
        <Layout>
            <div>
                <div className="text-center">
                    <Button onClick={() => dispatch(toggleModal())}>
                        Create Contact
                    </Button>
                </div>
                <div>{/* contents */}</div>
                <Modal
                    open={state.toggleModal}
                    title={"Create Contact"}
                    onClose={closeModal}
                />
            </div>
        </Layout>
    );
};

export default Contact;
