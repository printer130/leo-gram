import { useEffect, useState, useRef } from 'react'

export function useNearScreen() {
  const ref = useRef(null)
  const [show, setShow] = useState((false))

  useEffect(() => {
    // console.log(ref.current)
    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new IntersectionObserver((entries) => {
        // console.log(entries)
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(ref.current)
    })

  }, [ref])

  return [show, ref]
}