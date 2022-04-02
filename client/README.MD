# API Proxy - DuckDuckGo

Front end ( React ) for searching at DuckDuckGo ( thru API Proxy ) built by Tamir Shriki.

## Documentation

### Search

- Searching by GET will add your query to the sidebar but it wont consist after reloads. 
- Searching by POST will add your query to the sidebar and will write it to a file in the server to consist after reloads.
- Search by clicking on enter is using GET.
- Clicking on saved query on the sidebar will execute the search but wont save it again in the sidebar or in the server.

### Environment Variables

REACT_APP_API_PROXY_URL: http://localhost:5000

### Running the server

- To run the server please run in the CLI the following command

```
npm start
```

