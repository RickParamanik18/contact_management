const initState = false;
interface actionType {
    type: string;
}
const toggleModal = (state: boolean = initState, action: actionType) => {
    return action.type == "TOGGLE" ? !state : state;
};

export default toggleModal;
