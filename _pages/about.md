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

I am currently a fourth-year undergraduate student at [Shenzhen Technology University](https://english.sztu.edu.cn/) <img src='images/logo_SZTU.png' style='width: 1.1em;'> under supervision from Prof. [Xiaojiang Peng](https://scholar.google.com/citations?user=7oRD67kAAAAJ&hl=en&oi=ao), and previously as a visiting student doing my research at [Shenzhen Institute of Advanced Technology (SIAT)](https://english.siat.ac.cn/) <img src='images/logo_SIAT.webp' style='width: 1.1em;'>, [Chinese Academy of Sciences (CAS)](https://english.cas.cn/), and a research intern with Prof. [Chen Chen](https://scholar.google.com/citations?user=TuEwcZ0AAAAJ&hl=en&oi=ao) at the University of Central Florida. 

My research interest mainly includes the foundation model in CV, LLM with CV, and self-supervised learning.

> 📢📢📢 <font color=red>I am looking for an M.Phil/Ph.D./Internship position.</font> If you would like to discuss potential opportunities or learn more about my qualifications, please feel free to [contact me](mailto:lin.yuxiang.contact@gmail.com). 😊


# 🔥 News
- *2024.01*: I was awarded the First Prize of Research and Innovation Award (3000 CNY) and Star of Craftsmanship (3000 CNY).
- *2023.08*: My instance segmentation tutorial has been featured in [MMYOLO v0.6.0 highlight](https://github.com/open-mmlab/mmyolo/releases/tag/v0.6.0)! Check out the tutorial [here](https://github.com/open-mmlab/mmyolo/blob/main/docs/en/get_started/15_minutes_instance_segmentation.md) to master the essentials of instance segmentation.
- *2023.07*: One paper on multimodal emotion recognition is accepted by ACM MM! 🎉
- *2023.07*: We are the runner up in the Grand Challenge ([MER 2023](http://merchallenge.cn/)) of ACM MM! 🥈
- *2023.05*: I was awarded a Dahua outstanding scholarship (4000 CNY)! 🏆
- *2023.04*: One first-author paper is accepted by the IEEE International Conference on Real-time Computing and Robotics 2023! 🎉
- *2023.02*: I join [SIAT, CAS](https://english.siat.ac.cn/) as a visiting student doing research! 🔬
- *2022.05*: We won the second prize in the China Undergraduate Mathematical Contest after one year's preparation (top 2%). Thanks all my teammates! 🥈


# 📝 Publications
## 📌 Pinned
<div class='paper-box-top'><div class='paper-box-top-image'><div><div class="badge">ACMMM 2023 (Grand Challenge)</div><img src='images/grand_challenge.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-top-text' markdown="1">

[Semi-Supervised Multimodal Emotion Recognition with Expression MAE](../resources/acmmm_grand_challenge.pdf)

Zebang Cheng, **Yuxiang Lin**, Zhaoru Chen, Xiang Li, Shuyi Mao, Fan Zhang, Daijun Ding, Bowen Zhang, Xiaojiang Peng

**<font color=red>ACMMM 2023 (Grand Challenge)</font>** \| [[Paper]](../resources/acmmm_grand_challenge.pdf)
- We propose expMAE (combined with MAE and VideoMAE) to build an impressive emotion recognition classifier.
- We utilize multimodal large model techniques such as CLIP, MacBERT, and HuBERT to boost the ability of visual features from expMAE.
- We use the semi-supervised method of pseudo-labeling to solve the skewed distribution of the training set and finally achieve rank 2 among all the participants.

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

<!-- # 👨‍💻 Experience
- *2023.04 - now* &ensp; Research Intern, [Tencent YouTu Lab](https://open.youtu.qq.com/), Shenzhen, China
- *2022.07 - 2023.01* &ensp; Research Intern, [Zhejiang Lab](https://en.zhejianglab.com/), Hangzhou, China
- *2021.03 - 2021.08* &ensp; Research Assistant, [SIAT](https://english.siat.ac.cn/), Shenzhen, China
- *2019.08 - 2020.01* &ensp; Entrepreneurial Intern, [XbotPark](http://www.xbotpark.com/?lang=en), Dongguan, China
<div class='exp-box'> <div class='exp-box-image'><div><img src='images/logo_YouTu.png' alt="sym" width="100%"></div></div>
<div class='exp-box-text' markdown="1">

[Tencent YouTu Lab](https://open.youtu.qq.com/), Shenzhen, China

**Research Intern** @ FuXi Research Center

*2023.04 - now*

</div>
</div>

---

<div class='exp-box'><div class='exp-box-image'><div><img src='images/logo_ZJLab.png' alt="sym" width="100%"></div></div>
<div class='exp-box-text' markdown="1">

[Zhejiang Lab](https://en.zhejianglab.com/), Hangzhou, China

**Research Intern** @ Research Institute of Intelligent Computing

*2022.07 - 2023.01*

</div>
</div>

---

<div class='exp-box'><div class='exp-box-image'><div><img src='images/logo_SIAT_CAS.png' alt="sym" width="100%"></div></div>
<div class='exp-box-text' markdown="1">

[SIAT, CAS](https://english.siat.ac.cn/), Shenzhen, China

**Research Assistant** @ CV2R-Lab

*2021.03 - 2021.08*

</div>
</div>
   -->
# 🏅 Selected Awards
- *2020* &ensp; Second Prize of SZTU Freshman Scholarship (6000 CNY)
- *2022* &ensp; China Undergraduate Mathematical Contest in Modeling, National Second Prize (top 2%)
- *2023* &ensp; Dahua Outstanding Scholarship (4000 CNY)
- *2023* &ensp; OpenMMLab MMSTAR I
- *2024* &ensp; First Prize of Research and Innovation Award (3000 CNY)
- *2024* &ensp; Star of Craftsmanship (3000 CNY)
