import { render, screen } from "@testing-library/react";
import ScoreBoard from "../ScoreBoard";

describe("Score Board", () => {
    test("Check Wether Number is Score is updating or not", () => {
        render(<ScoreBoard score1="0" score2="0" play="5"/>)
        const score1HeadingElement = screen.getByTestId("score1");
        const score2HeadingElement = screen.getByTestId("score2");
        expect(score2HeadingElement).toBeInTheDocument("0")
        expect(score1HeadingElement).toBeInTheDocument("0")
    })
})