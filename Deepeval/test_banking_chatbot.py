from deepeval.evaluate import evaluate
from deepeval.test_case import LLMTestCase, LLMTestCaseParams
from deepeval.metrics import AnswerRelevancyMetric, GEval
from app.banking_chatbot import chatbot
def test_answer_relevancy_metrics():
    prompt = "What is Fixed deposit"
    response = chatbot(prompt)
    test_case = LLMTestCase(
        input= prompt,
        actual_output= response
    )
    # answer_relevancy = AnswerRelevancyMetric(threshold=0.7)
    #bias = BiasMetric(threshold=0.2)
    answer_relevancy = GEval(
        name = "Answer Relevancy",
        criteria="Check if the answer is relevant",
        evaluation_params=[
            LLMTestCaseParams.ACTUAL_OUTPUT,
            LLMTestCaseParams.INPUT,
        ],
        evaluation_steps=[
            "Check if the answer is relavent to the query",
        ],
        threshold=0.8
    )

    result = evaluate([test_case], [answer_relevancy])
    # print(result)from deepeval.evaluate import evaluate
from deepeval.test_case import LLMTestCase, LLMTestCaseParams
from deepeval.metrics import AnswerRelevancyMetric, GEval
from app.banking_chatbot import chatbot
def test_answer_relevancy_metrics():
    prompt = "What is Fixed deposit"
    response = chatbot(prompt)
    test_case = LLMTestCase(
        input= prompt,
        actual_output= response
    )
    # answer_relevancy = AnswerRelevancyMetric(threshold=0.7)
    #bias = BiasMetric(threshold=0.2)
    answer_relevancy = GEval(
        name = "Answer Relevancy",
        criteria="Check if the answer is relevant",
        evaluation_params=[
            LLMTestCaseParams.ACTUAL_OUTPUT,
            LLMTestCaseParams.INPUT,
        ],
        evaluation_steps=[
            "Check if the answer is relavent to the query",
        ],
        threshold=0.8
    )

    result = evaluate([test_case], [answer_relevancy])
    # print(result)