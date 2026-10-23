import { useEffect, useState } from 'react'

export default function Github() {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    fetch('https://api.github.com/users/Pavankumarkr0717', { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub request failed (${res.status})`)
        return res.json()
      })
      .then(setData)
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message)
      })
    return () => controller.abort()
  }, [])

  if (error) {
    return <p className="py-20 text-center text-red-600">{error}</p>
  }
  if (!data) {
    return <p className="py-20 text-center text-gray-500">Loading...</p>
  }

  const stats = [
    ['Followers', data.followers],
    ['Following', data.following],
    ['Repos', data.public_repos],
  ]

  return (
    <div className="mx-auto my-12 max-w-md rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-lg">
      <img
        src={data.avatar_url}
        alt={`${data.login} avatar`}
        className="mx-auto h-32 w-32 rounded-full ring-4 ring-orange-100"
      />
      <h1 className="mt-4 text-2xl font-bold text-gray-900">{data.name || data.login}</h1>
      <p className="text-gray-500">@{data.login}</p>
      <div className="mt-6 grid grid-cols-3 gap-4">
        {stats.map(([label, value]) => (
          <div key={label} className="rounded-lg bg-gray-50 p-3">
            <div className="text-xl font-semibold text-gray-900">{value}</div>
            <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
          </div>
        ))}
      </div>
      <a
        href={data.html_url}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block rounded-lg bg-orange-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-800"
      >
        View profile
      </a>
    </div>
  )
}
