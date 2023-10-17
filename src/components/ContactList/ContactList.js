import { useDispatch, useSelector } from "react-redux";
import { Item, List, Button } from "./ContactList.styled";
import { selectVisibleContacts } from "redux/contacts/selectors";
import { deleteContact } from "redux/contacts/operations";


export const ContactList = () => {
    const dispatch = useDispatch();

    const visibilContact = useSelector(selectVisibleContacts);
    return (
        <List>
            {visibilContact.map(({ id, name, number }) => (
                <Item key={id}>
                    <p>{name} : {number}</p>
                    <Button type="button" onClick={() => dispatch(deleteContact(id))}>Delete</Button>
                </Item>
            ))}
        </List>
    );
};

