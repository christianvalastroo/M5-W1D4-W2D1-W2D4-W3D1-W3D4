import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import MyNav from "./MyNav"
import { ThemeProvider } from "../../context/ThemeHome/ThemeHome"

describe("MyNav component", () => {
    it("should update the input value correctly", () => {
        const setSearch = vi.fn()

        render(
            <BrowserRouter>
                <ThemeProvider>
                    <MyNav search="" setSearch={setSearch} />
                </ThemeProvider>
            </BrowserRouter>
        )

        const input = screen.getByPlaceholderText(/cerca un libro/i)

        fireEvent.change(input, {
            target: { value: "harry" },
        })

        expect(setSearch).toHaveBeenCalledWith("harry")
    })
})