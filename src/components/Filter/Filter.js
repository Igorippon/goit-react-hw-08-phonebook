import { filterName } from "redux/contacts/filterSlice";
import { H, Input, Wrapper } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "redux/contacts/selectors";

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    const handleChange = e => {
        dispatch(filterName(e.target.value))
    };
    return (
        <Wrapper>
            <H>Contacts</H>
            <Input type="text"
                name="filter"
                value={filter}
                placeholder="Find contacts by name"
                onChange={handleChange} />
        </Wrapper>
    );

}

