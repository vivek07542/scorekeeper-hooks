import { render, screen } from "@testing-library/react";
import Player from "../Player";
import userEvent from "@testing-library/user-event";

test("Check Button able to click if game is onn", () => {
    render(<Player score1="0" 
        score2="0"
        play="5" 
        score1Handler={()=>{}} 
        score2Handler={() =>{}} 
        resetHandler={() =>{}} 
    />)
    const player1Element = screen.getByRole("button", { name: /player01/i })
    userEvent.click(player1Element);
    expect(player1Element).not.toBeDisabled();
    const player2Element = screen.getByRole("button", { name: /player02/i })
    userEvent.click(player2Element);
    expect(player2Element).not.toBeDisabled();
})

test("Check Button disabled if game ends", () => {
    render(<Player score1="5" 
        score2="0"
        play="5" 
    />)
    const player1Element = screen.getByRole("button", { name: /player01/i })
    userEvent.click(player1Element);
    expect(player1Element).toBeDisabled();
    const player2Element = screen.getByRole("button", { name: /player02/i })
    userEvent.click(player2Element);
    expect(player2Element).toBeDisabled();
})
test("check if score1 & score2 get enabled on reset click", () => {
    render(<Player score1="0" score2="0" play="5" />)
    const resetElement = screen.getByRole("button", { name: /reset/i })
    userEvent.click(resetElement);
    expect(screen.getByRole("button", { name: /player01/i })).toBeEnabled();
    expect(screen.getByRole("button", { name: /player02/i })).toBeEnabled();
})
