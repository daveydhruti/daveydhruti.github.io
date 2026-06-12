


module.exports = {
  intro: "I recently graduated from the University of Sheffield, where I did my Master's in Cybersecurity and AI. Currently exploring Neuromorphic Computing.",
  projectss: [
    {
      title: "Large Language Model-based Intrusion Detection",
      link: "/projects/#paper1",
      authors: ["Dhruti Davey", "Kayvan Karim", "Hani Ragab Hassen", "Hadj Batatia"],
      venue: "ICLR 2026 (Oral Presentation)"
    },
    {
      title: "On the Geometry of Loss Landscapes",
      link: "/projects/#paper2",
      authors: ["Dhruti Davey", "Sarah Johnson", "Alex Chen"],
      venue: "NeurIPS 2025"
    },
    {
      id: "snn-reverse-replay",
      title: "Spiking Neural Network Model of Hippocampal Reverse Replay",
      authors: ["Dhruti Davey", "Eleni Vasilaki"],
      venue: "MSc Dissertation – University of Sheffield, 2024–2025",
      description: "Reimplemented a reinforcement learning model of hippocampal reverse replay, originally rate based, and converted it to use spiking neurons. Place cells used Poisson encoding for spatial position, while action cells used leaky integrate-and-fire (LIF) neurons. The model simulates how an agent in a navigation task can replay trajectories in reverse order to accelerate learning, a mechanism observed biologically in the hippocampus. The spiking implementation preserved task performance while increasing biological plausibility.",
      tags: ["computational neuroscience", "spiking neural networks", "hippocampus", "reinforcement learning"],
      links: { pdf: "/documents/2025/snn-reverse-replay.pdf", code: "https://gitlab.com/daveydhruti-msc-projects/snn-reverse-replay" } 
    },
  ],
  writing: [
    {
      title: "Thoughts on Neural Network Interpretability",
      link: "/writing/#post1",
      date: "December 2025",
      excerpt: "Why I think interpretability research is crucial for advancing AI safety..."
    },
    {
      title: "Starting My PhD Journey",
      link: "/writing/#post2",
      date: "September 2025",
      excerpt: "Reflections on my first few months as a PhD student at Stanford..."
    }
  ]
};
