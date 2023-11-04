import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading,setLoading]=useState(true)
  const [page, setpage] = useState(1);
  const [totalResult, settotalResult] = useState(0);

  const host="http://localhost:5000"
  const updateNews = async () => {
    props.setProgress(20);
    const url=`${host}`
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=68cef29466d44cef89e0d613453136b2&page=${page}&pageSize=${props.pagesize}`;
    let data = await fetch(url,{
      method:'POST',
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({category:props.category,country:props.country,page:page,pageSize:props.pagesize})
    });
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(70);
    setarticles(parsedData.articles);
    settotalResult(parsedData.totalResults);
    setLoading(false)
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line 
  }, []);

  const fetchMoreData = async () => {
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=68cef29466d44cef89e0d613453136b2&page=${page+1}&pageSize=${props.pagesize}`;
    const url=`${host}`
    let data = await fetch(url,{
      method:'POST',
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({category:props.category,country:props.country,page:page+1,pageSize:props.pagesize})
    });
    let parsedData = await data.json();
    setpage(page + 1);
    setarticles(articles.concat(parsedData.articles));
    settotalResult(parsedData.totalResults);
  };
  console.log(totalResult)
  return (
    <>
      <div className="news">
        <div className="max-width">
        <h1 className="text">News Monkey Top Headlines</h1>
        {loading&&<Spinner/>}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResult}
            loader={<Spinner/>}
          >
            <div className="news-content">
              {articles.map((element,index) => {
                return (
                  <NewsItem
                    key={index}x
                    title={element.title}
                    desc={element.description}
                    newsUrl={element.url}
                    imageUrl={element.urlToImage}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source}
                  />
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};
export default News;
