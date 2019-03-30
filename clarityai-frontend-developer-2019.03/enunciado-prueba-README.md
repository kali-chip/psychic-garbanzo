Given the following endpoint, develop an application that parses and render the information about the movies provided. 

An small data set:

> GET https://bitbucket.org/!api/2.0/snippets/clarity-ai/zeGpkj/4e570253410cf420bc2c47d56adf1c8903b3dc31/files/movies-small.json

And a long one:

>  GET https://bitbucket.org/!api/2.0/snippets/clarity-ai/zeGpkj/57d3cf6d02c2fd3a41091a8529c36382c5eaea35/files/movies.json

| Title &#9650; | Year | Director | Cast | Genre | Notes |
|---------|------|----------|------|-------|-------|
| Movie 1 | 1900 | someone  | -    | abcde |       |
| Movie 2 | 1950 | someone  | -    | fghij |       |
| Movie 3 | 2000 | someone  | -    | klmno |       ||

The application should allow the user to _sort_ by different criterias and _filter_ by title.

Feel free to use any client side JS framework/library but we recommend you to use [Vue.js](https://vuejs.org/) as it is the technology we use everyday at [Clarity.ai](https://clarity.ai).

Focus on **performance** and **readability**. There is a lot of data to handle and you should take some decisions.

Consider any corner cases.

Write down any assumption you make.

Enjoy the exercise!

