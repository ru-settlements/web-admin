import { useParams } from 'react-router-dom'
import dictionaryListData from '../../data/dictionary.json'
import { FC } from 'react'

export const DictionaryId: FC = () => {
  const { dictionaryId } = useParams()

  const dictionaryData = dictionaryListData.find(
    (item) => item.id === Number(dictionaryId)
  )

  return dictionaryData ? (
    <>
      <div>author: {dictionaryData.author}</div>
      <div>title: {dictionaryData.title}</div>
    </>
  ) : (
    <div>not found</div>
  )
}
