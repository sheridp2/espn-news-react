import newsFeedFetch from "../util/news-feed-fetch.js";

function formatDate(time){
  const options = { year: "numeric", month: "long", day: "numeric", hour: '2-digit', minute:'2-digit'}
  return new Date(time).toLocaleDateString(undefined, options)
}


export default function NewsFeed({ sport, league }) {
  const { news, loading } = newsFeedFetch(sport, league);
  return (
    <div>
      
      <div>
        {loading && <div>Loading</div>}
        {!loading && (
          <div>
            <div className="text-3xl font-bold underline ">{news.header}</div>
            {news.articles?.map((article) => (
              
              <div className="my-8" key={article.dataSourceIdentifier}>
                <div className="max-w-xl rounded overflow-hidden shadow-lg">
                  <img className="w-full" src={article.images[0].url} alt="Sunset in the mountains"></img>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{article.headline}</div>
                    <p className="text-gray-700 text-base">
                      {article.description}
                    </p>
                    <p>Published: {formatDate(article.published)}</p>
                  </div>
                </div>
              </div>
              
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
