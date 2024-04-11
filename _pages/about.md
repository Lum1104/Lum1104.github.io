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

I am an undergraduate student at [Shenzhen Technology University](https://english.sztu.edu.cn/) <img src='images/logo_SZTU.png' style='width: 1.1em;'> under supervision from Prof. [Xiaojiang Peng](https://scholar.google.com/citations?user=7oRD67kAAAAJ&hl=en&oi=ao). I feel fortunate to have had the opportunity to join [Shenzhen Institute of Advanced Technology (SIAT), CAS](https://english.siat.ac.cn/) <img src='images/logo_SIAT.webp' style='width: 1.1em;'> as a visiting student in 2023. Additionally, I have explored the field of computer vision with Prof. [Chen Chen](https://scholar.google.com/citations?user=TuEwcZ0AAAAJ&hl=en&oi=ao) at UCF <img src='images/ucf.png' style='width: 1.1em;'> remotely.

Besides my academic studies, I interned with the [Baidu Inc](https://www.baidu.com/) (Group of Multimodal Retrieval), gaining valuable industry experience in representation learning and big data, and I also volunteered as a Teaching Assistant for an open-source tutorial on Large Language Models (LLM)/Computer Vision hosted by the [Shanghai AI Laboratory](https://github.com/InternLM/InternLM) <img src='images/ta.jpeg' style='width: 1.1em;'>.

My research interest mainly includes:
- Foundation model
- Multi-modal LLM
- Self-supervised learning

> 📢📢📢 <font color=red>I am looking for an M.Phil (happy to self-funded)/Ph.D. position.</font> Check out my [CV](../resources/Yuxiang_CV.pdf), and if you would like to discuss potential opportunities or learn more about my qualifications, please feel free to [contact me](mailto:lin.yuxiang.contact@gmail.com). 😊


# 👨‍💻 Experience
- *2024.01 - 2024.04* &ensp; Research Intern, [Baidu Inc](https://www.baidu.com/)
- *2024.01 - 2024.01* &ensp; Teaching Assistant, [InternLM](https://github.com/InternLM/tutorial/tree/main)
- *2023.10 - 2024.01* &ensp; Research Intern, [University of Central Florida (UCF)](https://scholar.google.com/citations?user=TuEwcZ0AAAAJ&hl=en&oi=ao)
- *2023.06 - 2023.07* &ensp; Teaching Assistant, [OpenMMLab](https://github.com/open-mmlab/OpenMMLabCourse)
- *2023.02 - 2023.07* &ensp; Visiting Student, [Shenzhen Institute of Advanced Technology, CAS](https://english.siat.ac.cn/)


# 🔥 News
- *2024.03*: One paper about Conversational Emotion-Cause Pair Analysis with LLM is accepted by SemEval 2024, NAACL.
- *2024.01*: I was awarded the First Prize of Research and Innovation Award (3000 CNY) and Star of Craftsmanship (3000 CNY).
- *2023.08*: My instance segmentation tutorial has been featured in [MMYOLO v0.6.0 highlight](https://github.com/open-mmlab/mmyolo/releases/tag/v0.6.0)! Check out the tutorial [here](https://github.com/open-mmlab/mmyolo/blob/main/docs/en/get_started/15_minutes_instance_segmentation.md) to master the essentials of instance segmentation.
- *2023.07*: One paper on multimodal emotion recognition is accepted by ACM MM! 🎉
- *2023.07*: We are the runner up in the Grand Challenge ([MER 2023](http://merchallenge.cn/)) of ACM MM! 🥈
- *2023.05*: I was awarded a Dahua outstanding scholarship (4000 CNY)! 🏆
- *2023.04*: One first-author paper is accepted by the IEEE International Conference on Real-time Computing and Robotics 2023! 🎉
- *2023.02*: I join [SIAT, CAS](https://english.siat.ac.cn/) as a visiting student doing research! 🔬
- *2022.05*: We won the second prize in the China Undergraduate Mathematical Contest after one year's preparation (top 2%). Thanks all my teammates! 🥈


# 📝 Publications
Working in Progress: CVIU (1: Under Review); SemEval 2024, NAACL (1: Accepted);
## 📌 Pinned
<div class='paper-box-top'><div class='paper-box-top-image'><div><div class="badge">ArXiv Preprint</div><img src='resources/gas.png' alt="sym" width="100%"></div></div>
<div class='paper-box-top-text' markdown="1">

[Invisible Gas Detection: An RGB-Thermal Cross Attention Network and A New Benchmark](https://arxiv.org/pdf/2403.17712)

Jue Wang\*, **Yuxiang Lin\***, Qi Zhao, Dong Luo, Shuaibao Chen, Wei Chen, Xiaojiang Peng (\* denotes equal contribution)

**<font color=red>ArXiv</font>** \| [[Paper]](https://arxiv.org/pdf/2403.17712)
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

---

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">RCAR 2023</div><img src='images/uav.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Real-time UAV Localization and Tracking in Multi-Weather Conditions using Multispectral Image Analysis](../resources/rcar23-119.pdf)

**Yuxiang Lin**, Xiaojiang Peng, Jiahe Yu, Wei Chen, Yan Wu, Hu Liu

**<font color=red>RCAR 2023</font>** \| [[Paper]](../resources/rcar23-119.pdf) [[Slides]](../resources/rcar-slide.pdf)
- We propose a novel method by using multispectral image analysis to solve the limitation of visual tracking methods on low-visibility at a single RGB image.
- We have devised an approach for real-time tracking that integrates the strengths of both the YOLOv5 object detection algorithm and the KCF tracking algorithm while compensating for their respective weaknesses.

</div>
</div>


# 🏅 Selected Awards
- *2020* &ensp; Second Prize of SZTU Freshman Scholarship (6000 CNY)
- *2022* &ensp; China Undergraduate Mathematical Contest in Modeling, National Second Prize (top 2%)
- *2023* &ensp; Dahua Outstanding Scholarship (4000 CNY)
- *2023* &ensp; OpenMMLab MMSTAR I
- *2024* &ensp; First Prize of Research and Innovation Award (3000 CNY)
- *2024* &ensp; Star of Craftsmanship (3000 CNY)
