
type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
export async function request<T>(
    url: string,
    method: HttpMethod,
    body?: never
): Promise<T> {
    const res = await fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
    })
    if (!res.ok) {
        const errorText = await res.text()
        throw new Error(`API Error: ${res.status} - ${errorText}`)
    }
    return res.json()
}