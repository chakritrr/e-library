package main

import (
	"github.com/gofiber/fiber/v2"
)

type Book struct {
	ID     int    `json:"id"`
	Title  string `json:"title"`
	Author string `json:"author"`
}

type User struct {
    Email string `json:"email"`
    Password string `json:"password"`
    ConfirmPassword string `json:"confirmPassword"`
}

var books []Book

func main() {
    app := fiber.New()

    books = append(books, Book{ID: 1, Title: "1984", Author: "George Orwell"})
	books = append(books, Book{ID: 2, Title: "The Great Gatsby", Author: "F. Scott Fitzgerald"})

    api := app.Group("/api")    

    api.Get("/books", getBooks)
    api.Get("/books/:id", getBook)
    api.Post("/books", createBook)

    api.Post("/register", registerUser)

    app.Listen(":3000")
}