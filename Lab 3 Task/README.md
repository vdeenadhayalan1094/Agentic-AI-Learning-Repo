🔹 Task Scenario

As a user, I wanted to check the bank home loan appraisal details, specifically the final payable loan amount based on given inputs.

🔹 Solution Overview

I have implemented a multi-agent system to accomplish this task using the ReAct framework along with a calculator tool.

The system consists of the following agents:

Agent 1 – User Data Extractor
Extracts loan amount, interest rate, and duration from the user query.
Agent 2 – Calculator Agent
Uses a calculation tool to compute the total payable amount.
Agent 3 – Verifier Agent
Verifies the calculated results and presents the final response to the user.
🔹 Model Used
llama-3.1-8b-instant (via Groq API)
