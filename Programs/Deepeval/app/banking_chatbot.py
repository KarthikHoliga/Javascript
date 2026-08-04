def chatbot(prompt: str) -> str:
    """
    Placeholder banking chatbot.
    Replace this logic with your real chatbot/LLM call later.
    """
    prompt_lower = prompt.lower()

    if "fixed deposit" in prompt_lower:
        return (
            "A Fixed Deposit (FD) is a financial instrument where you deposit "
            "a lump sum of money with a bank for a fixed period at a fixed "
            "interest rate, higher than a regular savings account."
        )
    elif "savings account" in prompt_lower:
        return "A savings account lets you deposit and withdraw money while earning interest."
    else:
        return "I'm a demo banking chatbot. Please ask about fixed deposits or savings accounts."
