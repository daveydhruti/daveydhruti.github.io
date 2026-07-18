module.exports = {
  projects: [
    {
      semester: "M.Sc. Projects",
      projects: [
        {
          title: "Scalable Machine Learning with PySpark on HPC",
          type: "Academic Project",
          module: "COM6012 -- Scalable Machine Learning",
          date: "Feb. 2025 -- Mar. 2025",
          description: [
            "Processed large-scale datasets on HPC using PySpark, mining NASA web logs with distributed aggregations.",
            "Tuned Logistic Regression, Poisson Regression, & ALS collaborative filtering via cross-validated grid search.",
            "Compared Random Forest, GBT, and Neural Networks across training sizes, analysing accuracy and latency."
          ],
          tags: ["PySpark", "Scalable ML", "Distributed Computing", "Log Mining", "Recommender Systems", "ALS", "Logistic Regression", "Gradient Boosting", "Random Forest", "Neural Networks", "K-Means Clustering", "Hyperparameter Tuning", "Cross-Validation", "Data Visualisation"],
        },
        {
          title: "Feedforward Neural Network for News Topic Classification",
          type: "Academic Project",
          module: "COM6513 -- Natural Language Processing",
          date: "Feb. 2025",
          description: [
            "Built a Feedforward Neural Network from scratch in NumPy, implementing backpropagation,ReLU, softmax, cross-entropy loss, and dropout for 3-class news article classification.",
            "Benchmarked randomly initialised embeddings against frozen GloVe pre-trained embeddings, achieving up to 87.9% test accuracy via SGD with systematic hyperparameter tuning.",
            "Extended the network with multi-layer architectures and conducted error analysis using confusion matrices and per-class word frequency inspection to diagnose misclassifications."
          ],
          tags: ["Neural Networks", "NLP", "NumPy", "Feedforward Neural Network", "Backpropagation", "SGD", "GloVe Embeddings", "Text Classification", "Dropout Regularisation", "Hyperparameter Tuning", "Softmax", "Cross-Entropy Loss", "AG News Corpus", "Deep Learning from Scratch"]
        },
        {
          title: "Unsupervised Learning and Deep Classification on Fashion MNIST",
          type: "Academic Project",
          module: "COM6509",
          date: "Dec. 2024",
          description: [
            "Applied K-Means clustering and PCA (3-component dimensionality reduction) to Fashion MNIST, visualising cluster quality against true labels in reduced feature space.",
            "Trained and benchmarked Logistic Regression, RNN, CNN, and a Fully Connected CNN in PyTorch, evaluating training, validation, and test accuracy across all architectures.",
            "Analysed complexity-performance trade-offs across models, implementing structured training loops with cross-entropy loss and batch-based data loading throughout."
          ],
          tags: [
            "Unsupervised Learning", "Deep Learning", "PyTorch", "CNN", "RNN", "Logistic Regression", "K-Means Clustering", "PCA", "Dimensionality Reduction", "Image Classification", "Fashion MNIST", "Cross-Entropy Loss", "Model Comparison", "Computer Vision"
          ]
        },
        {
          title: "Probabilistic Bee Path Tracking with Gaussian Basis Regression",
          type: "Academic Project",
          date: "Nov. 2024",
          description: [
            "Implemented a probabilistic regression model using Gaussian Radial Basis Functions to reconstruct bee flight trajectories from noisy 2D sensor observations.",
            "Derived and minimised a regularised negative log-likelihood objective, fitting 20 model parameters via numerical optimisation using scipy.optimize.minimize.",
            "Selected optimal regularisation and noise scale hyperparameters through grid search across multiple datasets, evaluating reconstruction quality against ground-truth flight paths."
          ],
          tags: [
            "Gaussian Radial Basis Functions", "Probabilistic Modelling", "Regression", "Numerical Optimisation", "Regularisation", "Hyperparameter Tuning", "Trajectory Reconstruction", "NumPy", "Log-Likelihood", "Machine Learning", "Spatial Modelling"
          ]
        },
        {
          title: "Denoising Autoencoder on CIFAR-10",
          type: "Academic Project",
          date: "Dec. 2024",
          description: [
            "Built a convolutional denoising autoencoder in PyTorch using Conv2d and ConvTranspose2d layers to learn compressed latent representations of CIFAR-10 images.",
            "Trained the model to reconstruct clean images from synthetically corrupted inputs, evaluating reconstruction error on a held-out noisy test set.",
            "Saved and reloaded model weights for inference, qualitatively and quantitatively comparing denoised outputs against original images to assess reconstruction quality."
          ],
          tags: [
            "Autoencoder", "Denoising", "PyTorch", "CNN", "Conv2d", "ConvTranspose2d", "CIFAR-10", "Image Reconstruction", "Representation Learning", "Computer Vision", "Deep Learning", "Model Serialisation"
          ]
        },
        { 
          title: "Digital Forensics Investigation Lab", 
          description: [
            "Analysed disk images and memory dumps using Autopsy, FTK, and Volatility to recover digital artefacts and reconstruct event timelines in Windows environments.", 
            "Captured and inspected network traffic with Wireshark to identify indicators of compromise, complemented by password analysis using John the Ripper.", 
            "Documented findings following structured forensic procedures, maintaining chain of custody and producing professional evidence reports suitable for investigative use."
          ], 
          tags: ["Digital Forensics", "Memory Forensics", "Disk Forensics", "Autopsy", "FTK", "Volatility", "Wireshark", "John the Ripper", "Network Traffic Analysis", "Incident Response", "Chain of Custody", "Cybersecurity"]
        },
        { 
          title: "SoK: Intrusion Detection for Automotive and Autonomous Vehicle Systems", 
          description: [
            "Co-authored a Systematization of Knowledge (SoK) paper surveying Intrusion Detection Systems for automotive networks, covering CAN bus and V2X communication protocols and their security vulnerabilities.", 
            "Developed a two-dimensional IDS taxonomy categorising 20+ systems by algorithm type (timing, rule, entropy, specification, ML, and deep learning) and attack type under the CIA triad, analysing systems including CANShield, EdgeTDC, and MULSAM.", 
            "Critically evaluated trade-offs between detection accuracy, computational cost, and real-world deployability, identifying open challenges and proposing future directions including federated learning and security-by-design for next-generation protocols."
          ], 
          tags: ["Cybersecurity", "Intrusion Detection", "Automotive Security", "CAN Bus", "V2X", "Autonomous Vehicles", "Machine Learning", "Deep Learning", "Federated Learning", "Taxonomy", "Research", "SoK", "Academic Writing", "CIA Triad"]
        },
      ],
    },
    {
      semester: "BSc Year 4 Projects",
      projects: [             
        { 
          title: "A Study on Buffer Overflow Attacks", 
          description: [ 
            "Exploited stack-based buffer overflows in vulnerable C programs across Windows XP, Windows 11, and Linux to achieve arbitrary code execution, demonstrating cross-platform offensive security fundamentals.",
            "Wrote Bash scripts on Kali Linux to open a remote shell on a Windows 11 target, simulating a real-world post-exploitation scenario.",
            "Used GDB and pwntools to debug binaries and develop proof-of-concept exploits, evaluating mitigations including stack canaries, ASLR, and DEP/NX.",
          ], 
          tags: ["Buffer Overflow", "Exploit Development", "Offensive Security", "GDB", "pwntools", "Kali Linux", "C", "ASLR", "Penetration Testing"]
        },
        { 
          title: "ANN with Particle Swarm Optimisation", 
          description: [
            "Implemented an Artificial Neural Network and Particle Swarm Optimisation algorithm entirely from scratch in Python, without any external ML libraries.", 
            "Designed an interactive Tkinter GUI to visualise training progress and model behaviour in real time, enabling intuitive exploration of the optimisation process.", 
            "Structured the project into modular components, cleanly separating optimisation logic, model architecture, and the user interface for maintainability and clarity."
          ], 
          tags: ["Artificial Neural Networks", "Particle Swarm Optimisation", "Python", "Tkinter"]
        },
      ]
    },
    {
      semester: "BSc Year 3 Projects",
      projects: [
        { 
          title: "MemoriesAR — Full-Stack Mobile Application", 
          description: [
            "Co-developed a full-stack platform with a mobile app and web admin panel using React, React Native, Node.js, MySQL, and Firebase Authentication.", 
            "Built and tested backend APIs for authentication and database access, ensuring reliable integration between frontend clients and server-side services.", 
            "Worked in an Agile/Scrum environment, contributing to sprint planning and iterative feature development across a team."
          ], 
          tags: ["React", "React Native", "Node.js", "MySQL", "Firebase", "REST APIs", "Full-Stack Development", "Mobile Development", "Agile", "Scrum", "Team Collaboration"]
        },
      ]
    },
    {
      semester: "BSc Year 2 Projects",
      projects: [
        { 
          title: "Mastermind Game — C & ARM Assembly on Raspberry Pi", 
          description: [
            "Implemented a Mastermind game in C with inline ARM Assembly on a Raspberry Pi, interfacing with physical components including LEDs, LCD display, and buttons via GPIO.", 
            "Managed low-level register usage, execution flow, and direct hardware interaction at the assembly level, maintaining correctness across C and assembly boundaries.", 
            "Debugged complex cross-language behaviour in a hardware-software co-design context, demonstrating hands-on embedded systems development with real physical components."
          ], 
          tags: ["ARM Assembly", "C", "Raspberry Pi", "Embedded Systems", "Hardware Programming", "Low-Level Programming", "GPIO", "LCD Display", "Inline Assembly", "Hardware-Software Interface"] 
        },
        { 
          title: "LSB Steganography Tool in C", 
          description: [
            "Built a command-line steganography tool in C to encode and decode hidden messages within PPM images using Least Significant Bit (LSB) encoding.", 
            "Implemented bit manipulation logic to embed secret data into image pixel values with minimal visual distortion, preserving image integrity across encode-decode cycles.", 
            "Developed robust error handling to manage edge cases such as oversized messages, malformed image files, and invalid inputs, ensuring reliable CLI operation."
          ], 
          tags: ["C", "Steganography", "LSB Encoding", "PPM Images", "CLI", "Image Processing", "Low-Level Programming", "Bit Manipulation", "Error Handling"]
        },
      ]
    },
  ],
  selected_projects: [
    {
      id: "snn-reverse-replay",
      title: "Spiking Neural Network Model of Hippocampal Reverse Replay",
      authors: ["Dhruti Davey", "Eleni Vasilaki"],
      venue: "M.Sc. Dissertation – University of Sheffield, 2024–2025",
      description: [
        "Converted a rate-based hippocampal reverse-replay Reinforcement Learning model into a Spiking Neural Network, encoding spatial position via Poisson-firing place cells and modelling action selection with LIF neurons.",
        "Simulated a navigation agent performing biological reverse trajectory replay, mirroring hippocampal memory consolidation mechanisms to accelerate reinforcement learning.",
        "Validated that the spiking model preserved task performance equivalent to the original rate-based model, while significantly increasing biological plausibility of the architecture."
      ],
      tags: ["Neuromorphic Algorithms", "Spiking Neural Networks", "Reinforcement Learning", "Hippocampal Replay", "Leaky Integrate-and-Fire", "Poisson Spiking Neurons", "Place Cells", "Spatial Navigation", "Biologically Plausible AI"],
      links: { pdf: "/documents/2025/snn-reverse-replay.pdf", code: "https://gitlab.com/daveydhruti-M.Sc.-projects/snn-reverse-replay" }
    },
  ],
  publications: [
    {
      id: "llm_ids",
      title: "Large Language Model-Based Intrusion Detection System",
      authors: ["Dhruti Davey", "Kayvan Karim", "Hani Ragab Hassen", "Hadj Batatia"],
      venue: "Springer Nature (published in a peer-reviewed volume), 2024",
      description: [
        "Developed an LLM-based intrusion detection system that classifies network traffic as benign or malicious.",
        "Analyzed NetFlow network data and logs, and fine-tuned large language models for accurate classification.",
        "Processed structured network traffic data to identify and flag potential security threats."
      ],
      tags: ["cybersecurity", "large language models", "intrusion detection", "network security"],
      links: { pdf: "https://link.springer.com/chapter/10.1007/978-981-96-1758-6_26", code: "https://gitlab.com/daveydhruti-bsc-projects/llm-ids" }
    },
  ],
  archive: [
    {
      id: "snn_reverse_replay",
      title: "SNN Model of Hippocampal Reverse Replay",
      type: "M.Sc. Dissertation",
      date: "Jan. 2024 -- Sept. 2025",
      description: [
        "Implemented an RL decision-making model, converting rate-based neurons to spiking neurons.",
        "Modelled agent state representation via Poisson firing & action-selection policy with LIF neurons.",
        "Preserved task performance over baseline while evaluating agent behaviour across policy variants.",
      ],
      links: { pdf: "/documents/2025/snn-reverse-replay.pdf", code: "https://gitlab.com/daveydhruti-M.Sc.-projects/snn-reverse-replay" }
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
      id: "ics_attack_simulation",
      title: "Industrial Control System Cyberattack Simulation & Threat Modelling",
      authors: ["Dhruti Davey"],
      venue: "Academic project, Apr. 2025",
      description: "Conducted a cyberattack simulation on a virtual industrial control system within a Hyper-V environment. Analysed network traffic using packet capture techniques to investigate attack behaviour and system responses. Applied MITRE ATT&CK to classify adversary tactics and evaluate risks to system availability and integrity.",
      tags: ["cybersecurity", "industrial control systems", "threat modeling", "MITRE ATT&CK"]
    },
    {
      id: "rfid_access_control",
      title: "RFID-Based Secure Access Control System",
      authors: ["Dhruti Davey"],
      venue: "Academic project, Mar. 2025",
      description: "Designed and implemented a networked RFID access control system integrating hardware components with backend server logic. Developed conditional logic linking RFID authentication to physical actuation, demonstrating hardware/software co-design. Configured routers, switches, and DHCP services for reliable communication between IoT devices and control systems.",
      tags: ["hardware", "rfid", "access control", "internet of things"]
    },
    {
      id: "digital_forensics",
      title: "Digital Forensics Investigation Lab",
      authors: ["Dhruti Davey"],
      venue: "Academic project, Jan. 2025",
      description: "Conducted structured forensic analysis using Autopsy, FTK, Volatility, and Wireshark. Investigated system images, memory data, and network traffic. Documented findings following systematic investigation procedure.",
      tags: ["forensics", "digital investigation", "malware analysis", "network forensics"]
    },
    {
      id: "delirium_game",
      title: "Delirium – First-Person Thriller Game",
      authors: ["Dhruti Davey", "Team Member 1", "Team Member 2", "Team Member 3", "Team Member 4", "Team Member 5"],
      venue: "Academic project, Feb. 2024 – Apr. 2024",
      description: "Developed a game in C# using the Unity Engine, applying object-oriented programming principles within a .NET environment. Collaborated with a team of 6 using structured development practices, contributing to feature design, code integration, and iterative improvements. Worked within a shared codebase using Git, focusing on code organisation and maintainability.",
      tags: ["game development", "unity", "csharp", "team project"]
    },
    {
      id: "ann_pso",
      title: "ANN with Particle Swarm Optimisation",
      authors: ["Dhruti Davey"],
      venue: "Academic project, Sept. 2023 – Jan. 2024",
      description: "Implemented an artificial neural network (ANN) and particle swarm optimisation (PSO) algorithm from scratch in Python without external ML libraries. Designed an interactive GUI using Tkinter to visualise training progress and model behaviour. Structured the project into modular components separating optimisation logic, model architecture, and interface.",
      tags: ["machine learning", "neural networks", "optimization", "python"]
    },
    {
      id: "custom_compiler",
      title: "Custom Programming Language Compiler (NanoJava)",
      authors: ["Dhruti Davey"],
      venue: "Academic project, Feb. 2023 – Mar. 2023",
      description: "Designed and implemented a compiler for a custom programming language (NanoJava) using C++. Developed core compiler components including lexical analysis, parsing, and code generation. Built and tested the compiler to handle valid and invalid input programs, ensuring robustness.",
      tags: ["compilers", "programming languages", "c++", "software engineering"]
    },
    {
      id: "full_stack_platform",
      title: "Full-Stack Application Development",
      authors: ["Dhruti Davey", "Team Member 1", "Team Member 2", "Team Member 3"],
      venue: "Academic project, Sept. 2022 – Mar. 2023",
      description: "Developed a full-stack platform using Node.js, React, MySQL, and Firebase Authentication in a team of 4. Worked in an Agile (SCRUM) environment, contributing to sprint planning, task allocation, and iterative feature development. Developed backend services and APIs, handling authentication and database interactions. Tested and debugged system interactions across multiple components.",
      tags: ["full-stack", "web development", "nodejs", "react"]
    },
    {
      id: "rl_tictactoe",
      title: "Reinforcement Learning Tic-Tac-Toe Agent",
      authors: ["Dhruti Davey"],
      venue: "Academic project, Jan. 2023 – Feb. 2023",
      description: "Developed a reinforcement learning agent in Java, applying object-oriented design and algorithmic problem-solving. Designed and implemented game logic and training loops using object-oriented principles. Structured code for clarity and modularity, separating game state, learning logic, and evaluation components. Tested and refined agent performance through iterative experimentation.",
      tags: ["reinforcement learning", "machine learning", "java", "game ai"]
    },
    {
      id: "arm_mastermind",
      title: "ARM Assembly Mastermind Game",
      authors: ["Dhruti Davey"],
      venue: "Academic project, Mar. 2022 – Apr. 2022",
      description: "Implemented a Mastermind game in C with inline ARM assembly on a Raspberry Pi. Managed low-level execution flow, register usage, and hardware interaction at the assembly level. Debugged behaviour across C and assembly boundaries, demonstrating hardware/software co-design.",
      tags: ["embedded systems", "assembly language", "raspberry pi", "game development"]
    },
    {
      id: "inventory_management",
      title: "Personal Inventory Management System",
      authors: ["Dhruti Davey"],
      venue: "Self-initiated project, Feb. 2026 – Mar. 2026",
      description: "Designed and built a C# (.NET) console application for managing personal inventory data. Developed a relational data layer using Entity Framework Core and Microsoft SQL Server, enabling efficient querying and filtering with LINQ. Implemented CRUD operations, category/location management, input validation, and an automated expiry alert system with prioritisation logic. Designed with a modular architecture supporting future API integration.",
      tags: ["csharp", ".net", "database", "inventory management"]
    },
    {
      id: "iot_smart_home",
      title: "IoT Smart Home Security & Network Analysis",
      authors: ["Dhruti Davey"],
      venue: "Self-initiated project, Jan. 2026",
      description: "Built and tested a simulated IoT network to explore system-level communication. Performed basic attacks (MAC spoofing, IP scanning) to evaluate access control weaknesses. Suggested improvements to reduce attack surface.",
      tags: ["iot", "security", "network analysis", "smart home"]
    },
    {
      id: "home_it_lab",
      title: "Home IT Lab",
      authors: ["Dhruti Davey"],
      venue: "Self-initiated lab, 2025–2026",
      description: "Installed and configured Windows and Linux systems in devices and virtual environments for personal use. Practised troubleshooting system, software, and configuration issues. Explored basic network connectivity and system interaction between environments. Set up a Raspberry Pi as network-wide ad blocker."
    },
    {
      id: "aws_iam_lab",
      title: "AWS IAM Security Lab",
      authors: ["Dhruti Davey"],
      venue: "Self-initiated lab, Sept. 2025 – Oct. 2025",
      description: "Configured AWS Identity and Access Management (IAM) to enforce secure access control practices. Created users and roles with scoped permissions, avoiding use of root credentials. Tested and validated access policies to ensure correct permission boundaries. Gained practical understanding of cloud security risks such as over-permissive roles and credential exposure."
    },
    {
      id: "containerised_dev",
      title: "Containerised Development Environment",
      authors: ["Dhruti Davey"],
      venue: "Self-initiated lab, Nov. 2023",
      description: "Used Docker to containerise an OCaml-based development environment within Jupyter notebooks. Configured containers to ensure consistent and reproducible execution across systems. Managed dependencies and environment setup through containerisation."
    }
  ],
};
