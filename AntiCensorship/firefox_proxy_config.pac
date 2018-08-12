function FindProxyForURL(url, host) {
  if (shExpMatch(host, "(shneha.in|www.shneha.in|ojaloberoi.in|zinkwap.com)")){ // list of censored websites 
    return "PROXY 127.0.0.1:8182";  // port of the http_proxy
  } else {
    return "DIRECT";
  }
}