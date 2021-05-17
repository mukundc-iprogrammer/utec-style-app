import React from 'react'

const promise = () => {

    const headers = {
        'Authorization': 'eyJraWQiOiI1WEhDQWNOWDV6NGhTUVwvRk9uUkVYMUt0ZWpwam9mcFkyTWM2aHltM1NlYz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxYjFmNDIyOS00YTYwLTRhYzQtOGE1Ny0zZDEyYjljYTMxYWQiLCJjb2duaXRvOmdyb3VwcyI6WyJzdXBlckFkbWluIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xXzdlQnJ4WklrVyIsImlzU3VwZXJBZG1pbiI6InRydWUiLCJjb2duaXRvOnVzZXJuYW1lIjoiMWIxZjQyMjktNGE2MC00YWM0LThhNTctM2QxMmI5Y2EzMWFkIiwiaXNBZG1pbiI6InRydWUiLCJhdWQiOiI2bXVvNDhqYzM0NjJjb2E4NTBjdGxuYzh'
    }

    useEffect(() => {
        axios.post('https://14hdqvbxrb.execute-api.ap-south-1.amazonaws.com/Stage/v1/generateUniqueId',
        {
            "source":"CS",
            "event_for":"styles"
        }, { headers } ).then(res => console.log(res))
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default promise