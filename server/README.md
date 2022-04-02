# API Proxy - DuckDuckGo

This is an API Proxy for DuckDuckGo built by Tamir Shriki.

## Documentation

### Search

- Method: GET
- Path: /search
- Query: q={String};
- Description: Search DuckDuckGo for a query.

- Method: POST
- Path: /search
- Query: q={String};
- Description: Search DuckDuckGo for a query and save the query.

### Saved Queries

- Method: GET
- Path: /search/saved-queries
- Description: Returns saved queries ( Which was saved with POST /search ).

### Environment Variables

BASE_URL: http://api.duckduckgo.com/

### Running the server

- To run the server please run in the CLI the following command

```
npm run dev
```

