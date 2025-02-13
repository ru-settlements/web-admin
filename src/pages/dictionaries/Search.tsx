import { useSearchParams } from 'react-router-dom'
import React, { useEffect, useMemo, useState } from 'react'
import dictionaryListData from '../../data/dictionary.json'

const dictionaryList = dictionaryListData

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTitle, setSearchTitle] = useState('')

  const searchResult = useMemo(() => {
    return searchTitle
      ? dictionaryList.filter((item) => item.title.includes(searchTitle))
      : []
  }, [searchTitle])

  function findByTitle() {
    setSearchParams({
      title: searchTitle,
    })
  }

  function onSearchTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTitle(event.target.value)
  }

  useEffect(() => {
    if (searchParams.get('title')) {
      setSearchTitle(searchParams.get('title'))
    }
  }, [searchParams])

  return (
    <div>
      <div className="search">
        <input
          value={searchTitle}
          type="text"
          placeholder="Введите заголовок"
          onChange={onSearchTitleChange}
        />
        <button onClick={findByTitle}>Найти</button>
      </div>

      <div className="result">
        {searchResult.map((item) => (
          <div
            key={item.id}
            style={{ padding: '10px', border: '1px', margin: '5px' }}
          >
            <div className="title">{item.title}</div>
            <div className="author">{item.author}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
