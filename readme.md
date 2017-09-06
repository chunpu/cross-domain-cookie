# crossdomain cookie test

Conclusion: 

Safari will fuck crossdomain cookie if you never request the website, even with credentials request and response

## Usage

add Host

```
127.0.0.1 myhost.com crossdomain.com sub.crossdomain.com
```

1. open <http://myhost.com/static/>
1. wait for 1 second
1. page will show json which set cookie success
1. if show empty json
	1. it means set cookie fail
