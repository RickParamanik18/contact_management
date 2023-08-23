import { toggleModal } from "../actions";
import Button from "../components/Button";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";

const Contact: React.FC = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    console.log(state);
    return (
        <Layout>
            <div>
                <div className="text-center">
                    <Button onClick={() => dispatch(toggleModal())}>
                        Create Contact
                    </Button>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
