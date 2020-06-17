import React, { useEffect, useState } from 'react'
import { Category } from '../category'
import { Ul, Li } from './styles'
import { useCategoriesData } from '../../hooks/useCategoriesData'
// import { categories as mockCategories } from '../../../api/db.json'


export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <Ul fixed={fixed}>
      {
        loading ? <Li key='loading'><Category /></Li>
          :
          categories.map(category => <Li key={category.id}>
            <Category
              {...category}
              path={`/pet/${category.id}`}
            />
          </Li>)
      }
    </Ul>
  )

  // if (loading) return 'Cargandooo...'

  return (<>
    {renderList()}
    {showFixed && renderList(true)}
  </>
  )
}
