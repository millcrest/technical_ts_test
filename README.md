# Technical Test Brief

## Objective

Enhance and extend the functionality of a coin toss betting game simulation. The simulation features users with balances betting on coin toss outcomes over several rounds.

The `calculateBetAmount` function in the game closely mimics real-life betting psychology by adjusting risk tolerance based on a player's current funds. Players with higher balances are programmed to take greater risks, leading to larger bets, while those with lower funds bet more cautiously. This design not only adds strategic depth to the game but also suggests that higher risk tolerance and bigger bets increase the chances of 'winning', reflecting real-world betting behaviors.

## Tasks

1. **Implement Live Updates to the Scoring Table:**

   - Update the scoring table in real-time to reflect changes in user balances after each round.
   - Ensure that the table is dynamically refreshed without needing to reload the page.

2. **Bug Fixes:**

   - Conduct a thorough review of the provided code.
   - Identify and fix any bugs or issues that might affect the game's performance or user experience.

3. **Add Pause and Stop Functionality:**

   - Implement a feature to pause the ongoing game.
   - Add functionality to stop the game at any point.
   - Ensure these controls are intuitive and responsive.

4. **Reset the Page Before the Next Play:**

   - Develop a mechanism to reset the game to its initial state before starting a new play.
   - This includes resetting user balances and any other relevant game state variables.

5. **Stretch Goal: Make Games Run Parallel:**
   - Implement functionality to allow multiple games to run concurrently.
   - Ensure that each game operates independently and doesn't interfere with the others.
   - Update the UI and game management logic to handle multiple games simultaneously.

## Advice for Implementing Enhancements

### Understanding the Code

- Begin by understanding the flow of the current implementation. Note how users are fetched, how the game logic proceeds, and how the user interface is updated.
- Pay special attention to the `calculateBetAmount` function, as it involves a complex logic for determining the bet amount based on user's balance.

### Implementing Live Updates

- For updating the scoring table in real-time, consider how and when the user's balance changes. The `updateResultsTable` function should be called whenever there's a change in any user's balance.
- Think about the most efficient way to update the table without reloading it completely.

### Adding Pause and Stop Controls

- Implementing pause and stop functionality will require you to manage the game's state effectively. Consider using global flags or state management techniques.
- Ensure that these controls are responsive and do not lead to unexpected behavior in the game's flow.

### Resetting the Game

- When resetting the game, make sure all relevant variables are returned to their initial state. This might include resetting user balances, clearing logs, and resetting UI elements.
- Consider the user experience when implementing the reset functionality. It should be smooth and clear to the user that the game has been reset.

### Managing Input for Number of Rounds

- Ensure the input for the number of rounds is validated and used correctly in the game logic.
- Consider edge cases like invalid input or extremely high numbers.

### Debugging and Testing

- Thoroughly test each feature you implement. Check for edge cases and potential bugs.
- Console logs can be helpful for debugging but remember to clean them up before final submission.

### Stretch Goal: Parallel Games

- If you attempt the stretch goal of running games in parallel, consider how you will manage multiple game states simultaneously.
- This might require a more advanced state management approach and careful handling of UI updates.

## Communication and Approach

### Emphasis on Comfort and Communication

- **No Pressure to Complete Everything:** Understand that it is not mandatory to complete all tasks. The primary goal of this test is to assess your approach to problem-solving and coding, rather than just the end result. If you don't finish all tasks, that's perfectly okay.

- **Anxiety and Stress Management:** This is not intended to be a high-stress test. If at any point you feel anxious or overwhelmed, please communicate this. It's important to us that you feel comfortable during this process.

- **Valuing Logical Reasoning:** We are more interested in your logical reasoning and thought process. How you approach a problem is often more insightful than a complete solution. Explain your thought process, decisions, and any assumptions you make.

- **Feedback is a Two-Way Street:** We welcome your feedback on the test itself. If you find certain aspects confusing or think something could be better explained, let us know. Your input is valuable.

### Don't Panic: You've Got This, One Line of Code at a Time.

- **No Right or Wrong Answers:** In many cases, there are multiple ways to solve a problem. We don't expect a single "correct" answer, but rather a demonstration of your problem-solving skills.

- **Focus on Your Strengths:** If certain tasks play to your strengths more than others, feel free to focus on those. Showcasing your strengths is just as important as identifying areas for growth.

- **Encouragement to Ask Questions:** If you're uncertain about any aspect of the tasks, feel free to ask questions. We appreciate open communication and are here to clarify any doubts.

### Conclusion

- **Overall Objective:** Our aim is to understand you as a developer and see how you tackle challenges. We're looking for potential, adaptability, and a willingness to learn, rather than perfection.
