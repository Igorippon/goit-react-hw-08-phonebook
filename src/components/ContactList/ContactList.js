import { useDispatch, useSelector } from "react-redux";
import { Item, List, Button } from "./ContactList.styled";
import { selectVisibleContacts } from "redux/contacts/selectors";
import { deleteContact, fetchContacts } from "redux/contacts/operations";
import { useEffect } from "react";

export const ContactList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

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

