import { Note } from "@/types/portfolio";

export const notes: Note[] = [
  {
    id: "note-1",
    title: "How I Built a 5-Agent AI Council on Local LLMs",
    content:
      "The core insight behind **AI Enterprise Council** is that real business decisions need dissenting voices — not a single LLM agreeing with your prompt.\n\n## The Architecture\n\nFive specialised agents run on local Ollama models:\n\n- **CEO** — breaks ties, sets overall direction\n- **CFO** — quantifies risk and return\n- **Legal** — flags compliance and liability\n- **Marketing** — evaluates brand impact\n- **PR** — projects public perception\n\nEach agent has a *credibility score* that is updated after every round based on the accuracy of its past predictions, so agents that have been right before get more weight.\n\n## Defeating Sycophancy\n\nThe biggest challenge with multi-agent LLMs is that they echo each other. My solution:\n\n1. Agents read only the **decision brief**, not each other's replies, in round 1\n2. Round 2 introduces a structured rebuttal phase\n3. A vector store (ChromaDB) retrieves domain-specific precedents for each agent independently via RAG\n\n```python\nagent = Agent(role=\"CFO\", model=\"llama3\", rag_collection=\"finance_docs\")\nresponse = agent.deliberate(brief, rebuttals=previous_round)\n```\n\nGSSoC 2026 — 5 open-source contributors so far.",
    date: "2026-09-15",
    pinned: true,
  },
  {
    id: "note-2",
    title: "Kavach: Parametric Insurance Meets ML",
    content:
      "Delivery workers in India lose income on bad-weather or high-pollution days with zero safety net. **Kavach** changes that.\n\n### Why Parametric?\n\nTraditional insurance requires claims, adjusters, and weeks of waiting. Parametric insurance pays out *automatically* when a measurable trigger is hit — no paperwork.\n\nFor Kavach the triggers are:\n- 🌧️ Rainfall > threshold for the worker's city\n- 🌫️ AQI > 200 (hazardous)\n- 🌡️ Heat index above safe working limits\n\nLive data comes from open weather and government AQI APIs, checked every hour.\n\n### ML Premium Pricing\n\nWe train a gradient-boosted model on historical weather, claim frequency, and worker profile to compute fair, city-specific premiums. The fraud scorer is a separate Random Forest that flags anomalous claim patterns.\n\n**Stack:** Python · FastAPI · scikit-learn · React · Supabase · Vercel",
    date: "2026-08-20",
    pinned: true,
  },
  {
    id: "note-3",
    title: "KhelYuva — Webcam Pose Tracking at SIH 2024",
    content:
      "**KhelYuva** started as a 36-hour hackathon project and landed in the **Top 50 nationally** at Smart India Hackathon.\n\n### The Core Tech\n\nMediaPipe Pose gives you 33 body landmarks at ~30 FPS in the browser. The trick is turning those landmarks into *exercise-specific logic*:\n\n```js\n// Bicep curl rep counter\nconst angle = computeAngle(shoulder, elbow, wrist);\nif (angle < 40 && phase === \"up\") {\n  reps++;\n  phase = \"down\";\n}\n```\n\nForm scoring compares joint angles against a \"golden set\" recorded by a coach — real-time visual feedback shows which joints are off.\n\n### What the Team Built in 36 h\n\n- Rep counter + form scorer for 8 exercises\n- Athlete dashboard (Supabase + Tailwind)\n- Coach dashboard with session history\n- Live pose overlay rendered on a `<canvas>` over the webcam feed\n\nTeam size: 5. I owned the pose pipeline and the Supabase schema.",
    date: "2026-07-10",
  },
  {
    id: "note-4",
    title: "RAG Pipelines — What I've Learned",
    content:
      "After building RAG for two production projects I've collected a few hard-won lessons:\n\n1. **Chunk size matters more than the embedding model** — 512-token chunks with 64-token overlap almost always beat 1 000-token chunks in retrieval precision\n2. **Metadata filtering before similarity search** dramatically cuts hallucinations for domain-specific data\n3. **Reranking** (cross-encoder on the top-k results) is worth the extra latency\n4. **ChromaDB** is great for local-first development; swap to **pgvector** on Supabase when you need row-level security\n\n```python\nresults = collection.query(\n    query_embeddings=[embed(query)],\n    n_results=10,\n    where={\"domain\": \"finance\"},  # metadata filter\n)\n```\n\n5. Always eval your retrieval with a held-out QA set — vibe-checking is not enough.",
    date: "2026-06-28",
  },
];
