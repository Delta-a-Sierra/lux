package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/api/hello", func(w http.ResponseWriter, r *http.Request) {
		err := json.NewEncoder(w).Encode(map[string]any{"message": "hi there"})
		if err != nil {
			http.Error(w, "failed to encode json response", http.StatusInternalServerError)
		}
	})
	if err := http.ListenAndServe(":8081", nil); err != nil {
		panic(fmt.Errorf("http.ListenAndServe: %w", err))
	}
}
