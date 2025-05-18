import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {

  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)


 const capataliseFirstLetter=(string)=>{
return string.charAt(0).toUpperCase()+string.slice(1);
  }

     
    
  

  const update= async()=> {
    props.setProgress(20);
    let url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    
    props.setProgress(35);
    let data = await fetch(url);
    let parseData = await data.json()
props.setProgress(70);
setArticles(parseData.articles)
setTotalResults(parseData.totalResults)
setLoading(false)

    props.setProgress(100);
  }

useEffect(()=>{
   document.title = `${capataliseFirstLetter(props.category)}-NewsMonkey`;
update();
},[])


 /* handleNextClick = async () => {

    setState({ page: state.page + 1 })
    update();
  }

  handlePreviousClick = async () => {

   setState({ page: state.page - 1 })
    update();

  }
    */

 const fetchMoreData= async () => {
 

 let url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
 setPage(page+1)
 let data = await fetch(url);
 let parseData = await data.json()
setArticles(articles.concat(parseData.articles))
setTotalResults(parseData.totalResults)
  };

  

    return (

      <>
        <h1 className="text-center" style={{ margin: "25px 0px" , marginTop: "67px"}}>NewsMonkey - Top {capataliseFirstLetter(props.category)} Headlines</h1>
        

      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length <=55 }
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
          {articles.map((element) => {

            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 44) : ""} description={element.description ? element.description.slice(0, 86) : ""} author={element.author} date={element.publishedAt} source={element.source.name} imageUrl={element.urlToImage ? element.urlToImage : "https://c.ndtvimg.com/2024-07/qlbcqpi4_hardik-pandya_640x480_04_July_24.jpg?im=FitAndFill,algorithm=dnn"} newsUrl={element.url} />
            </div>
          })}
</div>
        </div>
        </InfiniteScroll>
      

      </>

    )
  
  }

export default News

News.defaultProps = {
  pageSize: 5,
  category: "india"
}

 News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string
}