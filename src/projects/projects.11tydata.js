module.exports = {
  description: "A selection of my work I've done. My recent focus has been on spiking neural networks, and biologically inspired learning.",
  projects: [
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
  // workInProgress: [
  //   {
  //     title: "Noise-Aware Dynamic Optimization replication",
  //     description: "A partial replication of the NADO framework implementing the core noise-aware training algorithm on conventional CMOS hardware where possible.",
  //   },
  //   {
  //     title: "KAN for Time Series Forecasting",
  //     description: "Training a KAN to predict the next step in a noisy time series (e.g., stock data, weather, or synthetic chaotic systems like Lorenz).",
  //   },
  //   {
  //     title: "Visualizing What KANs Learn",
  //     description: "Training a tiny KAN on a simple toy problem then extract and visualize the learned spline functions on each edge",
  //   },
  // ],
  publications: [
    {
      id: "llm_ids",
      title: "Large Language Model-Based Intrusion Detection System",
      authors: ["Dhruti Davey", "Kayvan Karim", "Hani Ragab Hassen", "Hadj Batatia"],
      venue: "Springer Nature (published in a peer-reviewed volume), 2024",
      description: "Developed an LLM-based intrusion detection system to classify network traffic as benign or malicious. Analysed NetFlow network data and logs, fine-tuned large language models for classification, and processed structured network traffic data to identify potential security threats.",
      tags: ["cybersecurity", "large language models", "intrusion detection", "network security"],
      links: { pdf: "https://link.springer.com/chapter/10.1007/978-981-96-1758-6_26", code: "https://gitlab.com/daveydhruti-bsc-projects/llm-ids"}
    },
  ],
  allprojects: [
    {
      id: "snn_reverse_replay",
      title: "SNN Model of Hippocampal Reverse Replay",
      type: "MSc Dissertation",
      date: "Jan. 2024 -- Sept. 2025",
      description: [
        "Implemented an RL decision-making model, converting rate-based neurons to spiking neurons.",
        "Modelled agent state representation via Poisson firing & action-selection policy with LIF neurons.",
        "Preserved task performance over baseline while evaluating agent behaviour across policy variants.",
      ]
    },
    {
      title: "Scalable Machine Learning with PySpark on HPC",
      type: "Academic Project",
      date: "Feb. 2025 -- Mar. 2025",
      description: [
        "Processed large-scale datasets on HPC using PySpark, mining NASA web logs with distributed aggregations.",
        "Tuned Logistic Regression, Poisson Regression, & ALS collaborative filtering via cross-validated grid search.",
        "Compared Random Forest, GBT, and Neural Networks across training sizes, analysing accuracy and latency."
      ]
    },
    {
      title: "Feedforward Neural Network for News Topic Classification",
      type: "Academic Project (COM6513 -- Natural Language Processing)",
      date: "Feb. 2025",
      description: [
        "Built a feedforward neural network from scratch in NumPy, without the use of deep learning libraries.",
        "Trained models using SGD, comparing r&om embeddings against frozen GloVe embeddings.",
        "Evaluated model variants through hyperparameter tuning & error analysis."
      ]
    },
    {
      title: "Unsupervised Learning and Deep Classification on Fashion MNIST",
      type: "Academic Project",
      date: "Dec. 2024",
      description: [
        "Applied K-Means and PCA to Fashion MNIST, visualising cluster quality against true labels.",
        "Trained and compared Logistic Regression, RNN, CNN, and Fully Connected CNN in PyTorch.",
        "Analysed complexity vs. performance trade-offs using cross-entropy loss and batch-based training loops."
      ]
    },
    {
      title: "Probabilistic Bee Path Tracking with Gaussian Basis Regression",
      type: "Academic Project",
      date: "Nov. 2024",
      description: [
        "Reconstructed bee flight paths from noisy sensor data using Gaussian radial basis functions for regression.",
        "Minimised a regularised negative log-likelihood, fitting model parameters via numerical optimisation.",
        "Selected optimal hyperparameters via grid search over regularisation and noise scale across datasets."
      ]
    },
    {
      title: "Large Language Model-based Intrusion Detection",
      type: "BSc Dissertation",
      date: "Feb. 2025 -- Mar. 2025",
      description: [
        "Fine-tuned LLMs for context-aware classification using a retrieval-augmented inference pipeline.",
        "Processed structured NetFlow data to construct a contextual feature store for model input.",
        "Implemented an automated RL feedback loop for iterative model refinement, improving robustness."
      ]
    },
    {
      title: "ANN with Particle Swarm Optimisation",
      type: "Academic Project",
      date: "Feb. 2025 -- Mar. 2025",
      description: [
        "Implemented an ANN and PSO algorithm entirely from scratch in Python without external ML libraries.",
        "Designed a Tkinter GUI to visualise training progress and model behaviour interactively.",
        "Structured into modular components separating optimisation logic, model architecture, and interface."
      ]
    }
  ],
  olderprojects: [
    {
      id: "ics_attack_simulation",
      title: "Industrial Control System Cyberattack Simulation & Threat Modelling",
      authors: ["Dhruti Davey"],
      venue: "Academic project, Apr. 2025",
      description: "Conducted a cyberattack simulation on a virtual industrial control system within a Hyper-V environment. Analysed network traffic using packet capture techniques to investigate attack behaviour and system responses. Applied MITRE ATT&CK to classify adversary tactics and evaluate risks to system availability and integrity.",
      tags: ["cybersecurity", "industrial control systems", "threat modeling", "MITRE ATT&CK"],
      // links: { pdf: "#", code: "#" }
    },
    {
      id: "rfid_access_control",
      title: "RFID-Based Secure Access Control System",
      authors: ["Dhruti Davey"],
      venue: "Academic project, Mar. 2025",
      description: "Designed and implemented a networked RFID access control system integrating hardware components with backend server logic. Developed conditional logic linking RFID authentication to physical actuation, demonstrating hardware/software co-design. Configured routers, switches, and DHCP services for reliable communication between IoT devices and control systems.",
      tags: ["hardware", "rfid", "access control", "internet of things"],
      // links: { pdf: "#", code: "#" }
    },
    {
      id: "digital_forensics",
      title: "Digital Forensics Investigation Lab",
      authors: ["Dhruti Davey"],
      venue: "Academic project, Jan. 2025",
      description: "Conducted structured forensic analysis using Autopsy, FTK, Volatility, and Wireshark. Investigated system images, memory data, and network traffic. Documented findings following systematic investigation procedure.",
      tags: ["forensics", "digital investigation", "malware analysis", "network forensics"],
      // links: { pdf: "#" }
    },
    {
      id: "delirium_game",
      title: "Delirium – First-Person Thriller Game",
      authors: ["Dhruti Davey", "Team Member 1", "Team Member 2", "Team Member 3", "Team Member 4", "Team Member 5"],
      venue: "Academic project, Feb. 2024 – Apr. 2024",
      description: "Developed a game in C# using the Unity Engine, applying object-oriented programming principles within a .NET environment. Collaborated with a team of 6 using structured development practices, contributing to feature design, code integration, and iterative improvements. Worked within a shared codebase using Git, focusing on code organisation and maintainability.",
      tags: ["game development", "unity", "csharp", "team project"],
      // links: { code: "#" }
    },
    {
      id: "ann_pso",
      title: "ANN with Particle Swarm Optimisation",
      authors: ["Dhruti Davey"],
      venue: "Academic project, Sept. 2023 – Jan. 2024",
      description: "Implemented an artificial neural network (ANN) and particle swarm optimisation (PSO) algorithm from scratch in Python without external ML libraries. Designed an interactive GUI using Tkinter to visualise training progress and model behaviour. Structured the project into modular components separating optimisation logic, model architecture, and interface.",
      tags: ["machine learning", "neural networks", "optimization", "python"],
      // links: { code: "#" }
    },
    {
      id: "custom_compiler",
      title: "Custom Programming Language Compiler (NanoJava)",
      authors: ["Dhruti Davey"],
      venue: "Academic project, Feb. 2023 – Mar. 2023",
      description: "Designed and implemented a compiler for a custom programming language (NanoJava) using C++. Developed core compiler components including lexical analysis, parsing, and code generation. Built and tested the compiler to handle valid and invalid input programs, ensuring robustness.",
      tags: ["compilers", "programming languages", "c++", "software engineering"],
      // links: { code: "#" }
    },
    {
      id: "full_stack_platform",
      title: "Full-Stack Application Development",
      authors: ["Dhruti Davey", "Team Member 1", "Team Member 2", "Team Member 3"],
      venue: "Academic project, Sept. 2022 – Mar. 2023",
      description: "Developed a full-stack platform using Node.js, React, MySQL, and Firebase Authentication in a team of 4. Worked in an Agile (SCRUM) environment, contributing to sprint planning, task allocation, and iterative feature development. Developed backend services and APIs, handling authentication and database interactions. Tested and debugged system interactions across multiple components.",
      tags: ["full-stack", "web development", "nodejs", "react"],
      // links: { code: "#" }
    },
    {
      id: "rl_tictactoe",
      title: "Reinforcement Learning Tic-Tac-Toe Agent",
      authors: ["Dhruti Davey"],
      venue: "Academic project, Jan. 2023 – Feb. 2023",
      description: "Developed a reinforcement learning agent in Java, applying object-oriented design and algorithmic problem-solving. Designed and implemented game logic and training loops using object-oriented principles. Structured code for clarity and modularity, separating game state, learning logic, and evaluation components. Tested and refined agent performance through iterative experimentation.",
      tags: ["reinforcement learning", "machine learning", "java", "game ai"],
      // links: { code: "#" }
    },
    {
      id: "arm_mastermind",
      title: "ARM Assembly Mastermind Game",
      authors: ["Dhruti Davey"],
      venue: "Academic project, Mar. 2022 – Apr. 2022",
      description: "Implemented a Mastermind game in C with inline ARM assembly on a Raspberry Pi. Managed low-level execution flow, register usage, and hardware interaction at the assembly level. Debugged behaviour across C and assembly boundaries, demonstrating hardware/software co-design.",
      tags: ["embedded systems", "assembly language", "raspberry pi", "game development"],
      // links: { code: "#" }
    },
    {
      id: "inventory_management",
      title: "Personal Inventory Management System",
      authors: ["Dhruti Davey"],
      venue: "Self-initiated project, Feb. 2026 – Mar. 2026",
      description: "Designed and built a C# (.NET) console application for managing personal inventory data. Developed a relational data layer using Entity Framework Core and Microsoft SQL Server, enabling efficient querying and filtering with LINQ. Implemented CRUD operations, category/location management, input validation, and an automated expiry alert system with prioritisation logic. Designed with a modular architecture supporting future API integration.",
      tags: ["csharp", ".net", "database", "inventory management"],
      // links: { code: "#" }
    },
    {
      id: "iot_smart_home",
      title: "IoT Smart Home Security & Network Analysis",
      authors: ["Dhruti Davey"],
      venue: "Self-initiated project, Jan. 2026",
      description: "Built and tested a simulated IoT network to explore system-level communication. Performed basic attacks (MAC spoofing, IP scanning) to evaluate access control weaknesses. Suggested improvements to reduce attack surface.",
      tags: ["iot", "security", "network analysis", "smart home"],
      // links: { code: "#" }
    },
    {
      id: "home_it_lab",
      title: "Home IT Lab",
      authors: ["Dhruti Davey"],
      venue: "Self-initiated lab, 2025–2026",
      description: "Installed and configured Windows and Linux systems in devices and virtual environments for personal use. Practised troubleshooting system, software, and configuration issues. Explored basic network connectivity and system interaction between environments. Set up a Raspberry Pi as network-wide ad blocker.",
      // links: { }
    },
    {
      id: "aws_iam_lab",
      title: "AWS IAM Security Lab",
      authors: ["Dhruti Davey"],
      venue: "Self-initiated lab, Sept. 2025 – Oct. 2025",
      description: "Configured AWS Identity and Access Management (IAM) to enforce secure access control practices. Created users and roles with scoped permissions, avoiding use of root credentials. Tested and validated access policies to ensure correct permission boundaries. Gained practical understanding of cloud security risks such as over-permissive roles and credential exposure.",
      // links: { }
    },
    {
      id: "containerised_dev",
      title: "Containerised Development Environment",
      authors: ["Dhruti Davey"],
      venue: "Self-initiated lab, Nov. 2023",
      description: "Used Docker to containerise an OCaml-based development environment within Jupyter notebooks. Configured containers to ensure consistent and reproducible execution across systems. Managed dependencies and environment setup through containerisation.",
      // links: { code: "#" }
    }
  ],
};
