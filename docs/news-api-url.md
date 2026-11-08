## News API URL
Base URL : curl https://newsapi.org/v2/

## Everything Endpoint
- Endpoint : /everything
- Request Parameters : 
    - q : Keywords or phrases to search for in the article title and body.
    - searchIn : The fields to restrict your search to. Possible options: title, description, content. Default: title, description, content.
    - sources : A comma-seperated string of identifiers (maximum 20) for the news sources or blogs you want headlines from. Use the /sources endpoint to locate these programmatically or look at the sources index.
    - domains : A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to restrict the search to.
    - from : A date and optional time for the oldest article allowed. This should be in ISO 8601 format (e.g. 2026-11-08 or 2026-11-08T03:23:20)
    - to : A date and optional time for the newest article allowed. This should be in ISO 8601 format (e.g. 2026-11-08 or 2026-11-08T03:23:20)
    - language : The 2-letter ISO-639-1 code of the language you want to get headlines for. Possible options: ar de en es fr he it nl no pt ru sv uk zh.
    - sortBy : The order to sort the articles in. Possible options: relevancy, popularity, publishedAt.
                relevancy = articles more closely related to q come first.
                popularity = articles from popular sources and publishers come first.
                publishedAt = newest articles come first.
                Default: publishedAt    
    - pageSize : The number of results to return per page (request). 20 is the default, 100 is the maximum.
    - page : Use this to page through the results.

## Response Object : 
- status : If the request was successful or not. Options: ok, error. In the case of error a code and message property will be populated.
- totalResults: The total number of results available for your request. Only a limited number are shown at a time though, so use the page parameter in your requests to page through them.
- articles : The results of the request.
- source : The identifier id and a display name name for the source this article came from.
- author : The author of the article
- title : The headline or title of the article.
- description : A description or snippet from the article.
- url : The direct URL to the article.
- urlToImage : The URL to a relevant image for the article.
- publishedAt : The date and time that the article was published, in UTC (+000)
- content : The unformatted content of the article, where available. This is truncated to 200 chars.

## Top Headlines Endpoint
- Endpoint : /top-headlines
- Request Parameters : 
    - country : The 2-letter ISO 3166-1 code of the country you want to get headlines for. Possible options: ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za. Note: you can't mix this param with the sources param.
    - category : The category you want to get headlines for. Possible options: business entertainment general health science sports technology. Note: you can't mix this param with the sources param.
    - sources : A comma-seperated string of identifiers (maximum 20) for the news sources or blogs you want headlines from. Use the /sources endpoint to locate these programmatically or look at the sources index. Note: you can't mix this param with the country or category params.
    - q : Keywords or phrases to search for in the article title and body.
    - pageSize : The number of results to return per page (request). 20 is the default, 100 is the maximum.
    - page : Use this to page through the results.

## Response Object :

## Response Object : 
- status : If the request was successful or not. Options: ok, error. In the case of error a code and message property will be populated.
- totalResults: The total number of results available for your request. Only a limited number are shown at a time though, so use the page parameter in your requests to page through them.
- articles : The results of the request.
- source : The identifier id and a display name name for the source this article came from.
- author : The author of the article
- title : The headline or title of the article.
- description : A description or snippet from the article.
- url : The direct URL to the article.
- urlToImage : The URL to a relevant image for the article.
- publishedAt : The date and time that the article was published, in UTC (+000)
- content : The unformatted content of the article, where available. This is truncated to 200 chars.
