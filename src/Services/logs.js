import axios from "axios"

const registerApi = axios.create({baseURL: "https://log-back-end.vercel.app/"})

async function getLogs() {
    const logsApi = await registerApi.get("/register") 
    return logsApi.data
}

async function createLog(newLog) {
    const userLog = await registerApi.post("/register", newLog)
    return userLog.data
}

export {
    getLogs,
    createLog
}