const API_URL = 'https://travel-log-application-server.herokuapp.com';
// const API_URL = 'http://localhost:1337';

export const listEntryLogs = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export async function createEntryLogs(entry) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(entry)
    });
    return response.json();
}