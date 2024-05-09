import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    & input {
        height: 40px;
        width: 300px;
        margin-top: 20px;
        font-size: larger;
        font-weight: 600;
        border-radius: 10px;
        text-align: center;
    }
    & button {
        height: 40px;
        margin-top: 20px;
        width: 100px;
        margin-left: 20px;
        font-size: larger;
        border-radius: 10px;
    }
`;

function Search({ search, setSearch, handleSubmit }) {
    return (
        <Form onSubmit={handleSubmit}>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search location"
            />
            <button type="submit">Search</button>
        </Form>
    );
}

export default Search;
