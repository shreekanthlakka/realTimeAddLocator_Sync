const URL = "http://localhost:5000/api/v1";

const getposition = async (location) => {
    try {
        const res = await fetch(`${URL}/address?location=${location}`);
        if (!res.ok) {
            throw new Error("Something went wrong");
        }
        const data = await res.json();
        console.log("data ====> ", data);
        return data;
    } catch (error) {
        console.log("error ====> ", error);
    }
};

export { getposition };
