---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am an AI Engineer @ [Item](https://www.item.com/) and [Unisco](https://www.unisco.com/).

I hold a MS ECE degree from the Georgia Institute of Technology <img src='images/gt_logo.jpeg' style='width: 1.1em;'>, where my research interests centered on Multimodal Large Language Models (MLLM) and Affective Computing. Previously, I gained industrial algorithm experience as an intern at Tencent and Baidu.

Currently, I am working on **<a href="https://github.com/Lum1104/MER-Factory" target="_blank">MER-Factory</a>** for automatically construction Multimodal Emotion Recognition and Reasoning dataset, feel free to open an issue on the github if you are insterested in some features that are not supported yet!

<!-- > 📢 I’m looking for **<font color=red> full-time roles</font>**. Here is my [CV](resources/林钰翔.pdf). If my background matches your requirements or if you’d like to discuss potential opportunities, feel free to email me. -->

You can find me at [lum.lin@item.com](lum.lin@item.com) or [lin.yuxiang.contact@gmail.com](lin.yuxiang.contact@gmail.com).

# 🔥 News
- *2025.07*: Try <a href="https://github.com/Lum1104/MER-Factory" target="_blank">MER-Factory</a> for automatic construct multimodal emotion recognition and reasoning dataset.
- *2025.06*: One paper about Benchmarking VLLM's Emotion Interpretation ability is accepted by CVPR W, NeXD (1/3 Oral).
- *2025.05*: Start my internship at Tencent.
- *2024.12*: One paper about Multimodal Large Language Model in Emotion Reasoning is accepted by NeurIPS (CCF rank A).
- *2024.07*: One co-first author paper about invisible gas detection is accepted by CVIU (JCR Q1, CCF rank B). 🎉
- *2024.03*: One paper about Conversational Emotion-Cause Pair Analysis with LLM is accepted by SemEval 2024, NAACL.
- *2024.01*: Start my internship at Baidu.
- *2024.01*: I was awarded the First Prize of Research and Innovation Award (3000 CNY) and Star of Craftsmanship (3000 CNY).
- *2023.08*: My instance segmentation tutorial has been featured in [MMYOLO v0.6.0 highlight](https://github.com/open-mmlab/mmyolo/releases/tag/v0.6.0)! Check out the tutorial [here](https://github.com/open-mmlab/mmyolo/blob/main/docs/en/get_started/15_minutes_instance_segmentation.md) to master the essentials of instance segmentation.
- *2023.07*: One paper on multimodal emotion recognition is accepted by ACM MM! 🎉
- *2023.07*: We are the runner up in the Grand Challenge ([MER 2023](http://merchallenge.cn/)) of ACM MM! 🥈

# 👨‍💻 LLM-Agent Project

## MER-Factory [![](https://img.shields.io/github/stars/Lum1104/MER-Factory?style=social)](https://github.com/Lum1104/MER-Factory)

[[Code]](https://github.com/Lum1104/MER-Factory) \| [[Documentation]](https://lum1104.github.io/MER-Factory/)

The first framework for automatically constructing Multimodal Emotion Recognition and Reasoning (MERR) datasets. (To the best of my knowledge)

-   **Action Unit (AU) Pipeline**: Extracts facial Action Units (AUs) and translates them into descriptive natural language.
-   **Audio Analysis Pipeline**: Extracts audio, transcribes speech, and performs detailed tonal analysis.
-   **Video Analysis Pipeline**: Generates comprehensive descriptions of video content and context.
-   **Image Analysis Pipeline**: Provides end-to-end emotion recognition for static images, complete with visual descriptions and emotional synthesis.
-   **Full MER Pipeline**: An end-to-end multimodal pipeline that identifies peak emotional moments, analyzes all modalities (visual, audio, facial), and synthesizes a holistic emotional reasoning summary.

## Agent-brainstorm [![](https://img.shields.io/github/stars/Lum1104/agent-brainstorm?style=social)](https://github.com/Lum1104/agent-brainstorm)

[[Code]](https://github.com/Lum1104/agent-brainstorm) \| [[Demo]](https://lum1104.github.io/agent-brainstorm/)

This system implements a 5-stage brainstorming methodology using multi-AI agents to generate, evaluate, and refine ideas for both project development and research papers. The entire process runs locally with real-time web search integration and ArXiv research capabilities.

# 📝 Publications
## 📌 Pinned

<div class='paper-box-top'><div class='paper-box-top-image'><div><div class="badge">ArXiv</div><img src='resources/emcobench.png' alt="sym" width="100%"></div></div>
<div class='paper-box-top-text' markdown="1">
[Why We Feel: Breaking Boundaries in Emotional Reasoning with Multimodal Large Language Models](https://arxiv.org/pdf/2504.07521)

**Yuxiang Lin**, Jingdong Sun, Zhi-Qi Cheng, Jue Wang, Haomin Liang, Zebang Cheng, Yifei Dong, Jun-Yan He, Xiaojiang Peng, Xian-Sheng Hua

**<font color=red>ArXiv</font>** \| [[Paper]](https://arxiv.org/pdf/2504.07521) [[Slides]](https://docs.google.com/presentation/d/1t0vfMQkF5ahzSZcadqzNOy4meWCmLTEM/edit?usp=sharing&ouid=108867922689076134557&rtpof=true&sd=true) [[Code]](https://github.com/Lum1104/EIBench) [![](https://img.shields.io/github/stars/Lum1104/EIBench?style=social)](https://github.com/Lum1104/EIBench)
</div>
</div>
---
<div class='paper-box-top'><div class='paper-box-top-image'><div><div class="badge">NeurIPS 2024</div><img src='resources/emotionllama_framework.png' alt="sym" width="100%"></div></div>
<div class='paper-box-top-text' markdown="1">
[Emotion-llama: Multimodal emotion recognition and reasoning with instruction tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/c7f43ada17acc234f568dc66da527418-Paper-Conference.pdf)

Zebang Cheng, Zhi-Qi Cheng, Jun-Yan He, Kai Wang, **Yuxiang Lin**, Zheng Lian, Xiaojiang Peng, Alexander Hauptmann **($2^{nd}$ student author)**

**<font color=red>NeurIPS (CCF-A)</font>** \| [[Paper]](https://proceedings.neurips.cc/paper_files/paper/2024/file/c7f43ada17acc234f568dc66da527418-Paper-Conference.pdf) [[Code]](https://github.com/ZebangCheng/Emotion-LLaMA) [![](https://img.shields.io/github/stars/ZebangCheng/Emotion-LLaMA?style=social)](https://github.com/ZebangCheng/Emotion-LLaMA) [[MER-Factory]](https://github.com/Lum1104/MER-Factory) [![](https://img.shields.io/github/stars/Lum1104/MER-Factory?style=social)](https://github.com/Lum1104/MER-Factory)
</div>
</div>
---

<div class='paper-box-top'><div class='paper-box-top-image'><div><div class="badge">CVIU</div><img src='resources/gas.png' alt="sym" width="100%"></div></div>
<div class='paper-box-top-text' markdown="1">
[Invisible Gas Detection: An RGB-Thermal Cross Attention Network and A New Benchmark](https://www.sciencedirect.com/science/article/pii/S1077314224001802)

Jue Wang\*, **Yuxiang Lin\***, Qi Zhao, Dong Luo, Shuaibao Chen, Wei Chen, Xiaojiang Peng (\* denotes equal contribution)

**<font color=red>CVIU (JCR Q1, CCF-B)</font>** \| [[Paper]](https://www.sciencedirect.com/science/article/pii/S1077314224001802) [[Code]](https://github.com/logic112358/RT-CAN) [![](https://img.shields.io/github/stars/logic112358/RT-CAN?style=social)](https://github.com/logic112358/RT-CAN)
</div>
</div>

---
<div class='paper-box-top'><div class='paper-box-top-image'><div><div class="badge">ACMMM 2023</div><img src='images/grand_challenge.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-top-text' markdown="1">
[Semi-Supervised Multimodal Emotion Recognition with Expression MAE](../resources/acmmm_grand_challenge.pdf)

Zebang Cheng, **Yuxiang Lin**, Zhaoru Chen, Xiang Li, Shuyi Mao, Fan Zhang, Daijun Ding, Bowen Zhang, Xiaojiang Peng

**<font color=red>ACMMM 2023 (CCF-A)</font>** \| [[Paper]](../resources/acmmm_grand_challenge.pdf) [[Slides]](../resources/ExpMAE.pdf)
</div>
</div>

# 👨‍💻 Experience
- *2025.05 - present* &ensp; Summer Intern, [Tencent](https://www.tencent.com/en-us/about.html)
- *2022.10 - 2024.06* &ensp; Student Research Fellow, [MIPS-Lab](https://pengxj.github.io/)
- *2024.01 - 2024.04* &ensp; Research Intern, [Baidu Inc](https://www.baidu.com/)
- *2024.01 - 2024.01* &ensp; Teaching Assistant, [InternLM](https://github.com/InternLM/tutorial/tree/main)
- *2023.10 - 2024.01* &ensp; Research Intern, [University of Central Florida (UCF)](https://scholar.google.com/citations?user=TuEwcZ0AAAAJ&hl=en&oi=ao)
- *2023.06 - 2023.07* &ensp; Teaching Assistant, [OpenMMLab](https://github.com/open-mmlab/OpenMMLabCourse)
- *2023.02 - 2023.07* &ensp; Visiting Student, [Shenzhen Institute of Advanced Technology, CAS](https://english.siat.ac.cn/)

# 🏅 Selected Awards
- *2020* &ensp; Second Prize of SZTU Freshman Scholarship (6000 CNY)
- *2022* &ensp; China Undergraduate Mathematical Contest in Modeling, National Second Prize (top 2%)
- *2023* &ensp; Dahua Outstanding Scholarship (4000 CNY)
- *2023* &ensp; OpenMMLab MMSTAR I
- *2024* &ensp; First Prize of Research and Innovation Award (3000 CNY)
- *2024* &ensp; Star of Craftsmanship (3000 CNY)
