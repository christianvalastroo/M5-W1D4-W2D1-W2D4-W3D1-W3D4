import { render, screen } from "@testing-library/react"
import Welcome from "./Welcome"
import { ThemeProvider } from "../../context/ThemeHome/ThemeHome"

describe("Welcome component", () => {
    it("should render welcome title", () => {
        render(
            <ThemeProvider>
                <Welcome />
            </ThemeProvider>
        )

        const title = screen.getByText(/benvenuto su epibooks/i)

        expect(title).toBeInTheDocument()
    })

    it("should render welcome subtitle", () => {
        render(
            <ThemeProvider>
                <Welcome />
            </ThemeProvider>
        )

        const subtitle = screen.getByText(/scegli il tuo libro preferito/i)

        expect(subtitle).toBeInTheDocument()
    })
})