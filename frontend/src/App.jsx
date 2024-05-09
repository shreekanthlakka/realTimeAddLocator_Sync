import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Map from "./components/Map";
import styled from "styled-components";
import { getposition } from "./components/service/apiServices";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    & main {
        margin: 10px;
        flex: 1;
        width: 90%;
        align-self: center;
    }
`;

const initialState = { lat: 15.85445, lng: 78.259247 };

function App() {
    const [search, setSearch] = useState("");
    const [position, setPosition] = useState(initialState);
    const [info, setInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        const data = await getposition(search);
        if (data.success) {
            setPosition(data.data.coordinates);
            setInfo(data.data);
            setIsLoading(false);
        } else {
            setIsLoading(false);
            setPosition(initialState);
        }
    }
    return (
        <Container>
            <Header />
            <Search
                search={search}
                setSearch={setSearch}
                handleSubmit={handleSubmit}
            />
            {position?.lat && position?.lng && !isLoading && (
                <main>
                    <Map position={position} info={info} />
                </main>
            )}
        </Container>
    );
}

export default App;
