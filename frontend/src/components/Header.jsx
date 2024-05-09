import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: aliceblue;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    & h2 {
        padding: 10px;
        margin-left: 20px;
    }
`;

function Header() {
    return (
        <StyledHeader>
            <h2>RealTimeAddressApp</h2>
        </StyledHeader>
    );
}

export default Header;
