import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameCondition from "../GameCondition";

describe("Game Condition", () => {
    test("Check the Input Form Value Should be 5 At Initial", () => {
        render(<GameCondition play="5" inputHandler={()=>{}} />)
        expect(screen.getByRole("textbox").value).toBe("5");
    })
    test("Check the Input form value should able to type", () => {
        render(<GameCondition play="6" inputHandler={() => { }} />)
        const gameInputElement = screen.getByRole("textbox")
        userEvent.type(gameInputElement,"6")
        expect(gameInputElement.value).toBe("6");
    })   
    test("check the gameCondition matches Playing With", () => {
        render(<GameCondition play="5" inputHandler={() => { }} />)
        expect(screen.getByText(/playing with : 5/i)).toBeInTheDocument();
    })
})

