package main

import(
    "net/http"
    "fmt"
)

func main(){
    http.HandlerFunc("/",
        func(w http.ResponseWriter, r *http.Request){
            fmt.Fprintf(w, "hello go")
        })
    http.ListenAndServe(":80", nil)
}