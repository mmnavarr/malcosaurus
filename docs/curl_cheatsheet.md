---
id: curl_cheatsheet
title: cURL Cheatsheet
---

This cheatsheet includes `curl` commands and other useful shortcuts & flags that can be used to perform day to day actions.

## cURL GET/HEAD Requests
| Name                           	| Command                                                            	|
|--------------------------------	|--------------------------------------------------------------------	|
| Curl head request              	| curl -I https://www.google.com                                     	|
| Curl head request with verbose 	| curl -v -I https://www.google.com                                  	|
| Curl with explicit http method 	| curl -X GET https://www.google.com                                 	|
| Curl without http proxy        	| curl --noproxy 127.0.0.1 http://www.stackoverflow.com              	|
| Curl has no timeout by default 	| curl --connect-timeout 10 -I -k https://www.google.com             	|
| Curl get with extra headers    	| curl --verbose --header "Host: www.mytest.com:8182" www.google.com 	|
| Curl get response with headers 	| curl -k -v https://www.google.com                                  	|


## cURL POST Requests
| Name                	| Command                                                                   	|
|---------------------	|---------------------------------------------------------------------------	|
| Curl post request   	| curl -d "name=username&password=123456"                                   	|
| Curl post send json 	| curl `<URL>` -H "content-type: application/json" -d "{ \"woof\": \"bark\"}" 	|

## cURL Advanced
| Name                         	| Command                                                                                   	|
|------------------------------	|-------------------------------------------------------------------------------------------	|
| Get my public ip             	| curl -L -s http://ipecho.net/plain, curl -L -s http://whatismijnip.nl                     	|
| Curl with credential         	| curl -u `$username`:`$password` http://repo.dennyzhang.com/README.txt                         	|
| Curl upload                  	| curl -v -F key1=value1 -F upload=@localfilename                                           	|
| Install curl in alpine linux 	| apk add --update curl                                                                     	|
| Curl with http2              	| curl -k -v --http2 https://www.google.com/                                                	|
| Curl ftp upload              	| curl -T cryptopp552.zip -u test:test ftp://10.32.99.187/                                  	|
| Curl ftp download            	| curl -u test:test ftp://10.32.99.187/cryptopp552.zip -o cryptopp552.zip                   	|
| Curl upload with credential  	| curl -v -u admin:admin123 --upload-file package1.zip http://mysever:8081/dir/package1.zip 	|

## cURL Scripts
| Name                                   	| Command                 	|
|----------------------------------------	|-------------------------	|
| Install packages with curl             	| curl-install-package.sh 	|
| Check a website response time          	| curl-url-time.sh        	|
| Beautify json output for curl response 	| curl-format-json.sh     	|
| Curl run remote scripts                	| curl-remote-scripts.sh  	|

## WGET
| Name                    	| Command                                     	|
|-------------------------	|---------------------------------------------	|
| Download one url        	| wget -O /tmp/google.html https://google.com 	|
| Download multiple urls   	| wget https://google.com https://bing.com    	|
| Download a list of urls 	| wget -i url-list.txt, url-list.txt          	|