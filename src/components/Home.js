import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

  const loop = <FontAwesomeIcon icon={faSearch} size="2x" />
  const angleRight = <FontAwesomeIcon icon={faAngleRight} size="1x" />

  // The gifs return from API stored in this object
  const [gifs, setGifs] = useState({})
  // Search term and current input to manage search API call
  const [searchTerm, setSearchTerm] = useState('')
  const [searchInput, setSearchInput] = useState('')
  // Toggle between trending and search, used for API call
  const [mode, setMode] = useState('trending')
  // Current pagination index for API call, jumps 20 results each time when handleMoreGifs() is fired
  const [page, setPage] = useState(0)
  // Loader is displayed between API call and response
  const [loaded, setLoaded] = useState(false)
  // Keep track of the gifs loading state in a boolean array, only display a certain image when it is fully loaded.
  const [imageLoading, setImageLoading] = useState([])


  useEffect(() => {

    try {
      axios.get(`https://api.giphy.com/v1/gifs/${mode}?api_key=6vSx4w8I68CeIv4A0q1QycYQOEZkZdZN&q=${searchTerm}&limit=20&offset=${page}`)

        .then((resp) => {
          if (page === 0) {
            setGifs(resp.data)
            setLoaded(true)
          }
          else if (page > 0) {
            let updatedGifs = { ...gifs }
            let newGifs = resp.data.data
            newGifs.forEach((gif) => updatedGifs.data.push(gif))
            setGifs(updatedGifs)
            setLoaded(true)
          }
        })

    } catch (e) {
      console.log(e)
    }

  }, [page, searchTerm])

  function handleSearch(event) {
    event.preventDefault()
    if (searchInput.length < 1) return
    setLoaded(false)
    setMode('search')
    setPage(0)
    setSearchTerm(searchInput)
  }

  // Get 20 more results, useEffect and axios triggered when pagination index is changed
  function handleMoreGifs() {
    setLoaded(false)
    setPage(page + 20)
  }

  // Confirm a certain image is loaded, and then display it by updating the boolean array to true at its index.
  function loadImage(index) {
    let updatedIndex = [...imageLoading]
    updatedIndex[index] = true
    setImageLoading(updatedIndex)
  }
  console.log(imageLoading[imageLoading.length - 1])
  return (
    <div className="landing-page" >

      <form id="search-bar" onSubmit={handleSearch}>
        <input id="search-input" type="text" placeholder="Search all the GIF's and Stickers" onChange={() => setSearchInput(event.target.value)} />
        <button type="submit" id="submit">{loop}</button>
      </form>

      <div className="promo-container">
        <img id="promo" src="./src/img/promo.gif" />
      </div>

      <div className="trending">

        <div className="trending-header">

          {mode === 'trending' ? <div className="trending-title">
            <svg width="25" height="20" viewBox="0 0 25 20" xmlns="http://www.w3.org/2000/svg">
              <defs><linearGradient x1="5.615%" y1="77.472%" x2="100%" y2="26.124%" id="trending">
                <stop stopColor="#3191FF" offset="0%">
                </stop>
                <stop stopColor="#0CF" offset="100%">
                </stop>
              </linearGradient>
              </defs>
              <path d="M25.333 4.635l-6.45-.032a.47.47 0 00-.471.468l.004 1.575.008.085a.47.47 0 00.462.383h2.94l-7.544 8.101-3.878-3.125a1.119 1.119 0 00-1.631-.009l-7.584 7.73a1 1 0 00-.002 1.4l.288.295a1 1 0 001.431 0L9.652 14.6l3.782 3.042.093.1c.442.442.964.541 1.498.145l8.43-8.998v3.103c0 .25.197.456.446.468l1.407.069a.47.47 0 00.491-.446V5.104a.47.47 0 00-.466-.469z" fill="url(#trending)" fillRule="nonzero" transform="rotate(-5 -21.505 23.157)">
              </path>
            </svg>
            <h4>Trending</h4>
          </div> :
            <h2 className="search-term-heading">{searchTerm} {Object.keys(gifs).length > 0 ? <span>{gifs.pagination.total_count} GIF's</span> : null}</h2>}

          <div className="trending-link">
            <Link to="/">All the GIFS's {angleRight}</Link>
          </div>

        </div>

        {loaded ? <div>
          <div className="grid-container">

            {gifs.data.map((gif, index) => {
              return <Slide up key={index} spy={imageLoading[index]} delay={index % 2 === 0 ? 100 : 300} ssrReveal={true} duration={750} width={`${gif.images.original.width}px`} height={`${gif.images.original.height}px`}>
                <div width={`${gif.images.original.width}px`} height={`${gif.images.original.height}px`}>
                  <img src={gif.images.downsized_medium.url} style={imageLoading[index] ? { opacity: '1' } : { opacity: '0' }} width={gif.images.original.width} height={gif.images.original.height} onLoad={() => loadImage(index)} />
                </div>
              </Slide>
            })}

          </div>

          <div className="load-more-container">
            {gifs.pagination.total_count > 0 ? <Slide up delay={1500} spy={imageLoading[imageLoading.length - 1]}><button onClick={handleMoreGifs}>Load more</button></Slide> :
              <p>No GIFs found for {searchTerm}<br />
              Try searching for Stickers instead?</p>}
          </div>


        </div> :

          <div className="loader-container">
            <div className="custom-loader"><div></div><div></div><div></div></div>
          </div>}

      </div>

      <footer>
        <a href="https://support.giphy.com/hc/en-us/articles/360032872931">Privacy</a>
        <a href="https://support.giphy.com/hc/en-us/articles/360020027752-GIPHY-Terms-of-Service">Terms</a>
      </footer>

    </div >

  )

}

export default Home