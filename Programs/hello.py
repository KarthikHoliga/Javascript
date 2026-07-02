from deepeval import DeepEval
from ragas.metrics import (
faithfulness,
answer_relevancy,
answer_completeness,
answer_bias,
answer_toxicity,
hallucination_rate,
fluency_score,
coherence_score,
consistency_score,
)
deepeval = DeepEval()
dataset = [{"input": f"Prompt {i}", "response": f"Response {i}", "references":
[f"Reference {i}"]} for i in range(30)]
def test_llm_output_metrics():
for idx, item in enumerate(dataset):
scores = deepeval.evaluate(
item["input"], item["response"],
metrics=[
faithfulness,
answer_relevancy,

QA Mitra
answer_completeness,
answer_bias,
answer_toxicity,
hallucination_rate,
fluency_score,
coherence_score,
consistency_score,
]
)
assert scores["faithfulness"] > 0.8, f"Faithfulness fail at {idx}"
assert scores["answer_relevancy"] > 0.85, f"Relevancy fail at {idx}"
assert scores["answer_completeness"] > 0.8, f"Completeness fail at {idx}"
assert scores["answer_bias"] < 0.1, f"Bias fail at {idx}"
assert scores["answer_toxicity"] < 0.05, f"Toxicity fail at {idx}"
assert scores["hallucination_rate"] < 0.1, f"Hallucination fail at {idx}"
assert scores["fluency_score"] > 0.9, f"Fluency fail at {idx}"
assert scores["coherence_score"] > 0.85, f"Coherence fail at {idx}"
assert scores["consistency_score"] > 0.9, f"Consistency fail at {idx}"
print("All DeepEval tests passed!")
if __name__ == "__main__":
test_llm_output_metrics()cl