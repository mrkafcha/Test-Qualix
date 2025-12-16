export type RequestType = {
    id: string,
    heading: string,
    description: string,
    dateCreation: string,
    category: string,
}
export type RequestAdd = {
    heading: string,
    description: string,
    category: string,
}

export type RequestsState = {
    requests: RequestType[];
}