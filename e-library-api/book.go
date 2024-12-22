package main

import (
	"github.com/gofiber/fiber/v2"
)

func getBooks(c *fiber.Ctx) error {
	return c.JSON(books)
}

func getBook(c *fiber.Ctx) error {
    id, err := c.ParamsInt("id")
    
    if err != nil {
        return c.Status(400).SendString("Invalid book ID")
    }

    for i := 0; i < len(books); i++ {
        if books[i].ID == id {
            return c.JSON(books[i])
        }
    }

    return c.Status(404).SendString("Book not found")
}

func createBook(c *fiber.Ctx) error {
    book := new(Book)
    if err := c.BodyParser(&book) ; err != nil {
        return c.Status(400).SendString("Invalid request")
    }
    
    books = append(books, *book)

    return c.JSON(book)
}

func registerUser(c *fiber.Ctx) error {
    var user = new(User)
    if err := c.BodyParser(&user); err != nil {
        return c.Status(400).SendString("Invalid request")
    }

    if user.Password != user.ConfirmPassword {
        return c.Status(400).SendString("Passwords do not match")
    }

    return c.JSON(user)
}