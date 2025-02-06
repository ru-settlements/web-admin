import React, {useEffect, useMemo, useState} from "react";

export const Posts: React.FC = () => {
  const [posts, setPosts] = useState([])

  const abortController = useMemo(() => new AbortController(), [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', { signal: abortController.signal })
        if (!abortController.signal.aborted) {
          const data = await response.json()
          setPosts(data)
        }
      } catch (e) {
        console.error(e)
      }
    }

    fetchData()

    return () => {
      abortController.abort()
    }
  }, [abortController])

  return (
    <div>
      {
        posts.map((post, index) => (
          <div key={index} className="post" style={{ padding: '20px', border: '1px' }}>
            <b>{post.title}</b>
            <p>{post.body}</p>
          </div>
        ))
      }
    </div>
  )
}
