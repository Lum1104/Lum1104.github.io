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

My name is Yuxiang Lin, pronounced as "You-shee-ahng Lin". I am an MS student at [Georgia Institute of Technology](https://www.gatech.edu/) <img src='images/gt_logo.jpeg' style='width: 1.1em;'>. I earned my B.S. degree from [Shenzhen Technology University](https://english.sztu.edu.cn/) <img src='images/logo_SZTU.png' style='width: 1.1em;'> under supervision from Prof. [Xiaojiang Peng](https://scholar.google.com/citations?user=7oRD67kAAAAJ&hl=en&oi=ao). In 2023, I was a visiting student at the [Shenzhen Institute of Advanced Technology (SIAT), CAS](https://english.siat.ac.cn/) <img src='images/logo_SIAT.webp' style='width: 1.1em;'> and a research intern with Prof. [Chen Chen](https://scholar.google.com/citations?user=TuEwcZ0AAAAJ&hl=en&oi=ao) at UCF <img src='images/ucf.png' style='width: 1.1em;'> remotely. In 2024, I interned at [Baidu Inc](https://www.baidu.com/) <img src='images/baidu.jpeg' style='width: 1.1em;'>  in the Group of Multimodal Retrieval, gaining experience in representation learning and big data. 

Additionally, I volunteered as a Teaching Assistant for a Large Language Models/Computer Vision tutorial hosted by the [Shanghai AI Laboratory](https://github.com/InternLM/InternLM) <img src='images/ta.jpeg' style='width: 1.1em;'>.

You can find me at [yuxiang.lin@gatech.edu](yuxiang.lin@gatech.edu) or [lin.yuxiang.contact@gmail.com](lin.yuxiang.contact@gmail.com).

My research interest mainly includes:
- **Foundation model**: Representation Learning, Post-Pretraining.
- **Multi-modal LLM**: LLM Reasoning, LLM Application.
- **Self-supervised learning**: Contrastive Learning.
- **AI4Science**: LLM with Medical Analysis.

# 🔥 News
- *2024.06*: We propose a new task and benchmark about understanding emotional triggers. Checkout the [EmCoBench](https://github.com/Lum1104/EmCoBench/tree/main). 🔬
- *2024.03*: One paper about Conversational Emotion-Cause Pair Analysis with LLM is accepted by SemEval 2024, NAACL.
- *2024.01*: I was awarded the First Prize of Research and Innovation Award (3000 CNY) and Star of Craftsmanship (3000 CNY).
- *2023.08*: My instance segmentation tutorial has been featured in [MMYOLO v0.6.0 highlight](https://github.com/open-mmlab/mmyolo/releases/tag/v0.6.0)! Check out the tutorial [here](https://github.com/open-mmlab/mmyolo/blob/main/docs/en/get_started/15_minutes_instance_segmentation.md) to master the essentials of instance segmentation.
- *2023.07*: One paper on multimodal emotion recognition is accepted by ACM MM! 🎉
- *2023.07*: We are the runner up in the Grand Challenge ([MER 2023](http://merchallenge.cn/)) of ACM MM! 🥈


# 📝 Publications
Working in Progress: CVIU (1: Under Review); NeurIPS (2: Under Review);
## 📌 Pinned
<div class='paper-box-top'><div class='paper-box-top-image'><div><div class="badge">ArXiv Preprint</div><img src='resources/emcobench.png' alt="sym" width="100%"></div></div>
<div class='paper-box-top-text' markdown="1">

[EmCoBench: An Extensive Benchmark for General Emotion Comprehension](../resources/emcobench_paper.pdf)

**Yuxiang Lin**, Jue Wang, Haomin Liang, Zebang Cheng, Jun-Yan He, Zhi-Qi Cheng, Xiaojiang Peng, Alexander G. Hauptmann

**<font color=red>ArXiv</font>** \| [[Paper]](../resources/emcobench_paper.pdf) [[Code]](https://github.com/Lum1104/EmCoBench)
- We proposing the Emotion Comprehension task, which focuses on identifying emotional triggers rather than merely classifying emotions, crucial for building more empathetic systems;
- We introducing the Coarse-to-Fine Self-Ask (CFSA) method, a novel VLLM-assisted data annotation technique;
- We developing the EmCoBench dataset, which includes 78 fine-grained emotions and 1,655 emotion comprehension samples, with 50 multifacets complex samples;

</div>
</div>

---

<div class='paper-box-top'><div class='paper-box-top-image'><div><div class="badge">ArXiv Preprint</div><img src='resources/gas.png' alt="sym" width="100%"></div></div>
<div class='paper-box-top-text' markdown="1">

[Invisible Gas Detection: An RGB-Thermal Cross Attention Network and A New Benchmark](https://arxiv.org/pdf/2403.17712)

Jue Wang\*, **Yuxiang Lin\***, Qi Zhao, Dong Luo, Shuaibao Chen, Wei Chen, Xiaojiang Peng (\* denotes equal contribution)

**<font color=red>ArXiv</font>** \| [[Paper]](https://arxiv.org/pdf/2403.17712) [[Code]](https://github.com/logic112358/RT-CAN)
- We design the RGB-Thermal Cross Attention Network for invisible gas detection, by effectively integrating texture information from RGB images and gas information from thermal images.
- We propose the RGB-assisted Cross Attention Module and the Global Textual Attention Module for cross modality feature fusion and diverse contextual information extraction.
- We introduce Gas-DB, the first comprehensive open-source gas detection database, including approximately 1.3K well-annotated RGB-thermal images for gas detection algorithms.

</div>
</div>

---

<div class='paper-box-top'><div class='paper-box-top-image'><div><div class="badge">ACMMM 2023</div><img src='images/grand_challenge.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-top-text' markdown="1">

[Semi-Supervised Multimodal Emotion Recognition with Expression MAE](../resources/acmmm_grand_challenge.pdf)

Zebang Cheng, **Yuxiang Lin**, Zhaoru Chen, Xiang Li, Shuyi Mao, Fan Zhang, Daijun Ding, Bowen Zhang, Xiaojiang Peng

**<font color=red>ACMMM 2023</font>** \| [[Paper]](../resources/acmmm_grand_challenge.pdf) [[Slides]](../resources/ExpMAE.pdf)
- We propose expMAE (combined with MAE and VideoMAE) to build an impressive emotion recognition classifier.
- We utilize multi-modal foundation model such as CLIP, MacBERT, and HuBERT to boost the ability of visual features from expMAE.
- We use the semi-supervised method of pseudo-labeling to solve the skewed distribution of the training set and finally achieve rank 2th among all the participants.

</div>
</div>

# 👨‍💻 Experience
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
